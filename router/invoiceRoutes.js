const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function formatDate (date) {
    let formatted ="";
    date = new Date(date);
    const months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    formatted += `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    return formatted;
}

module.exports = function (router) {
    router.param('invoice_id', function (req, res, next, id) {
        return req.sessionUser.getInvoices({
            where: { id: id }
        }).then((invoices) => {
            if (invoices[0]) {
                req.invoice = invoices[0]
                next()
                return null
            } else {
                res.status(404).json({ error: "Task does not exist or User is not the owner" })
            }
        }).catch((error) => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.post("/api/invoices", function (req, res) {
        const { client, startDate, endDate, dueDate } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.createInvoice({ 
                client,
                startDate,
                endDate,
                dueDate,
                date: new Date(),
                paid: 0,
                due: 0,
                discount: 0,
                rate: 0
            }, { transaction: t }).then((invoice) => {
                const updateRes = db.TimeEntry.update({ invoice: invoice.id }, 
                    { 
                        where: {
                            startDate: {
                                [Op.and]: {
                                    [Op.gte]: invoice.startDate,
                                    [Op.lte]: invoice.endDate
                                }
                            }
                        },
                        transaction: t
                    }).then(affectedCount => {
                        t.commit()
                        return res.json({ success: true, message: `Created invoice` })
                    });
                    return updateRes;
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.get("/api/invoices", async function (req, res) {
        try {
            const invoices = await req.sessionUser.getInvoices({include: [{model: db.Client}]})

            if (invoices) {
                res.json({ success: true, length: invoices.length, results: invoices.map(invoice => invoice.json), message: `Found ${invoices.length} invoices` })
            } else {
                res.status(404).json({ error: "No invoices found" })
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error: error })
        }
    })
    router.get("/api/invoice/:invoice_id", function (req, res) {
        return req.sessionUser.getTasks({
                include: [
                    { 
                        model: db.TimeEntry,
                        where: {
                            invoice: req.invoice.id
                        }
                    },
                    {model: db.Client}
                ]
            }).then(tasks => {
            // Define font files
            const fonts = {
                Roboto: {
                    normal: __root + '/fonts/Roboto-Regular.ttf',
                    bold: __root + '/fonts/Roboto-Medium.ttf',
                    italics: __root + '/fonts/Roboto-Italic.ttf',
                    bolditalics: __root + '/fonts/Roboto-MediumItalic.ttf'
                }
            };

            const PdfPrinter = require('pdfmake');
            const printer = new PdfPrinter(fonts);
            const fs = require('fs');

            const defs = [];
            let totalDue = 0;
            let totalElapsed = 0;

            for (const task of tasks) {
                                
                defs.push({
                    text: `${task.name} $${task.rate}/hour`,
                    style: "subsubheader",
                });
                const tableItems = [];
                for (const timeEntry of task.TimeEntries) {
                    let time = (new Date(timeEntry.endDate).getTime() - new Date(timeEntry.startDate).getTime())
                    const formattedTime = `${Math.floor(time/1000/60/60)}:${Math.floor((time/1000/60)%60)}`
                    tableItems.push([timeEntry.description, formattedTime]);
                    totalElapsed += time;
                    totalDue += (time /1000/60/60) * task.rate;
                }
                defs.push({
                    table: {
                        widths: ['*', 50],
                        body: tableItems,
                    }
                })
            }

            const docDefinition = {
                content: [
                    {
                        text: `Invoice for ${tasks[0].Client.name}\n\n`,
                        style: 'header'
                    },
                    `Posted: ${formatDate(req.invoice.date)}\n`,
                    `Due Date: ${formatDate(req.invoice.dueDate)}\n\n`,
                    {
                        text: 'Time Entries',
                        style: 'subheader'
                    },
                    `${formatDate(req.invoice.startDate)} - ${formatDate(req.invoice.endDate)}\n\n`,
                    ...defs,
                    "\n",
                    {
                        style: 'subsubheader',
                        table: {
                            widths: ['*', 50],
                            body: [
                                ['Total', `${Math.floor(totalElapsed/1000/60/60)}:${Math.floor((totalElapsed/1000/60)%60)}`],
                                ['Amount Due', `$${Math.round(totalDue * 100) / 100}`]
                            ]
                        }
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true
                    },
                    subheader: {
                        fontSize: 15,
                        bold: true
                    },
                    subsubheader: {
                        fontSize: 12,
                        bold: true
                    }
                },
                defaultStyle: {
                    columnGap: 20
                }
            };

            const options = {
                // ...
            }

            const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
            pdfDoc.pipe(res);
            pdfDoc.end();
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
}
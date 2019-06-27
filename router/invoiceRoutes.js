const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
        const { client } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.createInvoice({ client }, { transaction: t }).then((invoice) => {
                t.commit()
                return res.json({ success: true, message: `Created invoice` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.get("/api/invoice/:invoice_id", function (req, res) {
        return req.invoice.getTimeEntries({
                include: [
                    { model: db.Client },
                    { model: db.Task }
                ],
                group: ['Tasks.id']
            }).then(timeEntries => {
                console.log(timeEntries);
            // Define font files
            // const fonts = {
            //     Roboto: {
            //         normal: 'fonts/Roboto-Regular.ttf',
            //         bold: 'fonts/Roboto-Medium.ttf',
            //         italics: 'fonts/Roboto-Italic.ttf',
            //         bolditalics: 'fonts/Roboto-MediumItalic.ttf'
            //     }
            // };

            // const PdfPrinter = require('pdfmake');
            // const printer = new PdfPrinter(fonts);
            // const fs = require('fs');

            const docDefinition = {
                content: [
                    {
                        text: `Invoice for ${timeEntries[0].Client.name}\n\n`,
                        style: 'header'
                    },
                    `Posted: ${req.invoice.date}\n`,
                    `Due Date: ${req.invoice.dueDate}\n\n`,
                    {
                        text: 'Time Entries',
                        style: 'subheader'
                    },
                    `${req.invoice.startDate} - ${req.invoice.endDate}\n\n`,
                    {
                        text: "Website Task $200/hour",
                        style: "subsubheader"
                    },
                    {
                        table: {
                            widths: ['*', 50],
                            body: [
                                ['Worked on adding the header', '04:34'],
                                ['Worked on dashboard styles', '01:50'],
                                ['Worked on the clock module', '00:28']
                            ]
                        }
                    },
                    {
                        text: "\nBlog Task - $40/hour",
                        style: "subsubheader"
                    },
                    {
                        table: {
                            widths: ['*', 50],
                            body: [
                                ['I made a blog that does blogging thing to the end result of being a blog', '02:00']
                            ]
                        }
                    }, "\n",
                    {
                        style: 'subsubheader',
                        table: {
                            widths: ['*', 50],
                            body: [
                                ['Total', "8:24"],
                                ['Amount Due', "$1356"]
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

            // const options = {
            //     // ...
            // }

            // const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
            // pdfDoc.pipe(fs.createWriteStream('document.pdf'));
            // pdfDoc.end();
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
}
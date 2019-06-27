const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.post("/api/company/:company_id/task/:task_id/timeEntries", function (req, res) {
        const { description, startDate, endDate } = req.body
        console.log(req.task)
        return db.sequelize.transaction().then((t) => {
            return req.company.createTimeEntry({
                description: description,
                startDate: startDate,
                endDate: endDate,
                task: req.task.id,
                client: req.task.client,
                project: req.task.project,
                user: req.sessionUser.id
            }, { transaction: t }).then((timeEntry) => {
                t.commit()
                return res.json({ success: true, message: `Created time entry` })
            })
        }).catch(error => {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
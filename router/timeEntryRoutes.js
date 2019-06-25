const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.post("/api/company/:company_id/task/:task_id/timeEntries", function (req, res) {
        const { description, startDate, endDate } = req.body
        return req.company.createTimeEntry({
            description: description,
            startDate: startDate,
            endDate: endDate,
            task: req.task.id,
            client: req.task.client,
            project: req.task.project,
            archived: false
        }, { transaction: t }).then((timeEntry) => {
            t.commit()
            return res.json({ success: true, message: `Created time entry` })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
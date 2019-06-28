const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.post("/api/task/:task_id/timeEntries", function (req, res) {
        const { description, startDate, endDate } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.createTimeEntry({
                description: description,
                startDate: startDate,
                endDate: endDate,
                project: req.task.project,
                client: req.task.client,
                task: req.task.id
            }, { transaction: t }).then((timeEntry) => {
                t.commit()
                return res.json({ success: true, message: `Created time entry` })
            })
        }).catch(error => {
            console.log(error)
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
}
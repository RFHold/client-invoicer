const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('task_id', function (req, res, next, id) {
        return db.Task.findOne({
            where: { id: id, company: req.company.id }
        }).then((task) => {
            if (task) {
                req.task = task
                next()
                return null
            } else {
                res.status(404).json({ error: "Task does not exist or User is not a member of the parent company" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.get("/api/company/:company_id/tasks", function (req, res) {
        return req.company.getTasks({...req.query({ fields: [] }), incudes: [db.TimeEntry]}).then((tasks) => {
            if (tasks) {
                res.json({ success: true, length: tasks.length, results: tasks.map(task => task.json), message: `Found ${tasks.length} tasks` })
            } else {
                res.status(404).json({ error: "No tasks found" })
            }
        }).catch((error) => {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.post("/api/company/:company_id/tasks", function (req, res) {
        const { name, description, startDate, dueDate, project, client } = req.body
        return db.sequelize.transaction().then((t) => {
            return db.Project.findOne({
                where: { id: project, company: req.company.id }
            }).then((project) => {
                if (project) {
                    return req.company.createTask({
                        name: name,
                        description: description,
                        startDate: startDate,
                        dueDate: dueDate,
                        project: project.id,
                        client: project.client
                    }, { transaction: t })
                } else {
                    res.status(404).json({ error: "Project does not exist or User is not a member of the parent company" })
                }
            }).then((task) => {
                t.commit()
                return res.json({ success: true, message: `Created task: ${task.name}` })
            })
        }).catch(error => {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.patch("/api/company/:company_id/task/:task_id", function (req, res) {
        const { name, description, startDate, dueDate, project, client } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.task.update({
                name: name,
                description: description,
                startDate: startDate,
                dueDate: dueDate,
                project: project,
                client: client
            }, { transaction: t }).then((task) => {
                t.commit()
                return res.json({ success: true, result: task.json, message: `Updated task: "${task.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.get("/api/company/:company_id/task/:task_id", function (req, res) {
        res.json({ success: true, result: req.task.json, message: `Found task: "${req.task.name}"` })
    })
    router.delete("/api/company/:company_id/task/:task_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.task.destroy({ transaction: t }).then((task) => {
                t.commit()
                return res.json({ success: true, result: task.json, message: `Deleted task: "${task.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
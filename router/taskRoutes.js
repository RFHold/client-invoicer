const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('task_id', function (req, res, next, id) {
        return req.sessionUser.getTasks({
            where: { id: id }
        }).then((tasks) => {
            if (tasks[0]) {
                req.task = tasks[0]
                next()
                return null
            } else {
                res.status(404).json({ error: "Task does not exist or User is not the owner" })
            }
        }).catch((error) => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })

    router.get("/api/tasks", function (req, res) {
        return req.sessionUser.getTasks({ include: [{ all: true }] }).then((tasks) => {
            if (tasks) {
                res.json({ success: true, length: tasks.length, results: tasks.map(task => task.json), message: `Found ${tasks.length} tasks` })
            } else {
                res.status(404).json({ error: "No tasks found" })
            }
        }).catch((error) => {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })

    router.get("/api/project/:project_id/tasks", function (req, res) {
        return req.project.getTasks({ include: [{ all: true }] }).then((tasks) => {
            if (tasks) {
                res.json({ success: true, length: tasks.length, results: tasks.map(task => task.json), message: `Found ${tasks.length} tasks` })
            } else {
                res.status(404).json({ error: "No tasks found" })
            }
        }).catch((error) => {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.post("/api/tasks", function (req, res) {
        const { name, description, startDate, dueDate, project, rate } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.getProjects({
                where: { id: project }
            }).then((projects) => {
                if (projects[0]) {
                    const project = projects[0]
                    return req.sessionUser.createTask({
                        name: name,
                        description: description,
                        startDate: startDate,
                        dueDate: dueDate,
                        project: project.id,
                        client: project.client,
                        rate: rate
                    }, { transaction: t })
                } else {
                    res.status(404).json({ error: "Project does not exist or User is not the owner" })
                }
            }).then((task) => {
                t.commit()
                return res.json({ success: true, message: `Created task: ${task.name}` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.patch("/api/task/:task_id", function (req, res) {
        const { name, description, startDate, dueDate, project, rate } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.task.update({
                name: name,
                description: description,
                startDate: startDate,
                dueDate: dueDate,
                project: project,
                client: project.client,
                rate: rate
            }, { transaction: t }).then((task) => {
                t.commit()
                return res.json({ success: true, result: task.json, message: `Updated task: "${task.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.get("/api/task/:task_id", function (req, res) {
        res.json({ success: true, result: req.task.json, message: `Found task: "${req.task.name}"` })
    })
    router.delete("/api/task/:task_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.task.destroy({ transaction: t }).then((task) => {
                t.commit()
                return res.json({ success: true, result: task.json, message: `Deleted task: "${task.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
}
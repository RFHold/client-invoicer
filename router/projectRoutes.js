const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('project_id', function (req, res, next, id) {
        return req.sessionUser.getProjects({
            where: { id: id }
        }).then((projects) => {
            if (projects[0]) {
                req.project = projects[0]
                next()
                return null
            } else {
                res.status(404).json({ error: "Project does not exist or User is not the owner" })
            }
        }).catch((error) => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.get("/api/projects", function (req, res) {
        return req.sessionUser.getProjects({ include: [{ model: db.Client }] }).then((projects) => {
            if (projects) {
                res.json({ success: true, length: projects.length, results: projects.map(project => project.json), message: `Found ${projects.length} projects` })
            } else {
                res.status(404).json({ error: "No projects found" })
            }
        }).catch((error) => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.post("/api/projects", function (req, res) {
        const { name, description, startDate, dueDate, client } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.createProject({
                name: name,
                description: description,
                startDate: startDate,
                dueDate: dueDate,
                client: client
            }, { transaction: t }).then((project) => {
                t.commit()
                return res.json({ success: true, message: `Created project: ${project.name}` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.patch("/api/project/:project_id", function (req, res) {
        const { name, description, startDate, dueDate, client } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.project.update({
                name: name,
                description: description,
                startDate: startDate,
                dueDate: dueDate,
                client: client
            }, { transaction: t }).then((project) => {
                t.commit()
                return res.json({ success: true, result: project.json, message: `Updated project: "${project.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.get("/api/project/:project_id", function (req, res) {
        res.json({ success: true, result: req.project.json, message: `Found project: "${req.project.name}"` })
    })
    router.delete("/api/project/:project_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.project.destroy({ transaction: t }).then((project) => {
                t.commit()
                return res.json({ success: true, result: project.json, message: `Deleted project: "${project.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
}
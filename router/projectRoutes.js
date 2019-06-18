const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('project_id', function (req, res, next, id) {
        return db.Project.findOne({
            where: { id: id, company: req.company.id }
        }).then((project) => {
            if (project) {
                req.project = project
                next()
                return null
            } else {
                res.status(404).json({ error: "Project does not exist or User is not a member of the parent company" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.get("/api/company/:company_id/projects", function (req, res) {
        return req.company.getProjects(req.query({ fields: [] })).then((projects) => {
            if (projects) {
                res.json({ success: true, length: projects.length, results: projects.map(project => project.json), message: `Found ${projects.length} projects` })
            } else {
                res.status(404).json({ error: "No projects found" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.post("/api/company/:company_id/projects", function (req, res) {
        const { name, description, startDate, dueDate, client } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.company.createProject({
                name: name,
                description: description,
                startDate: startDate,
                dueDate: dueDate,
                client: client,
            }, { transaction: t }).then((project) => {
                t.commit()
                return res.json({ success: true, message: `Created project: ${project.name}` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.patch("/api/company/:company_id/project/:project_id", function (req, res) {
        const { name, description, startDate, dueDate, client } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.project.update({
                name: name,
                description: description,
                startDate: startDate,
                dueDate: dueDate,
                client: client,
            }, { transaction: t }).then((project) => {
                t.commit()
                return res.json({ success: true, result: project.json, message: `Updated project: "${project.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.get("/api/company/:company_id/project/:project_id", function (req, res) {
        res.json({ success: true, result: req.project.json, message: `Found project: "${req.project.name}"` })
    })
    router.delete("/api/company/:company_id/project/:project_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.project.destroy({ transaction: t }).then((project) => {
                t.commit()
                return res.json({ success: true, result: project.json, message: `Deleted project: "${project.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
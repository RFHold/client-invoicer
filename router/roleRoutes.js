const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('role_id', function (req, res, next, id) {
        return db.Role.findOne({
            where: { id: id, company: req.company.id }
        }).then((role) => {
            if (role) {
                req.role = role
                next()
                return null
            } else {
                res.status(404).json({ error: "Role does not exist or User is not a member of the parent company" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.get("/api/company/:company_id/roles", function (req, res) {
        return req.company.getRoles(req.query({ fields: [] })).then((roles) => {
            if (roles) {
                res.json({ success: true, length: roles.length, results: roles.map(role => role.json), message: `Found ${roles.length} roles` })
            } else {
                res.status(404).json({ error: "No roles found" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.post("/api/company/:company_id/roles", function (req, res) {
        const { name, permissions } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.company.createRole({
                name: name,
                permissions: permissions
            }, { transaction: t }).then((role) => {
                t.commit()
                return res.json({ success: true, message: `Created role: ${role.name}` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.patch("/api/company/:company_id/role/:role_id", function (req, res) {
        const { name, permissions } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.role.update({
                name: name,
                permissions: permissions
            }, { transaction: t }).then((role) => {
                t.commit()
                return res.json({ success: true, result: role.json, message: `Updated role: "${role.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.get("/api/company/:company_id/role/:role_id", function (req, res) {
        res.json({ success: true, result: req.role.json, message: `Found role: "${req.role.name}"` })
    })
    router.delete("/api/company/:company_id/role/:role_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.role.destroy({ transaction: t }).then((role) => {
                t.commit()
                return res.json({ success: true, result: role.json, message: `Deleted role: "${role.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
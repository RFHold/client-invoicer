const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('client_id', function (req, res, next, id) {
        return db.Client.findOne({
            where: { id: id, company: req.company.id }
        }).then((client) => {
            if (client) {
                req.client = client
                next()
                return null
            } else {
                res.status(404).json({ error: "Client does not exist or User is not a member of the parent company" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.get("/api/company/:company_id/clients", function (req, res) {
        return req.company.getClients(req.query({ fields: [] })).then((clients) => {
            if (clients) {
                res.json({ success: true, length: clients.length, results: clients.map(client => client.json), message: `Found ${clients.length} clients` })
            } else {
                res.status(404).json({ error: "No clients found" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.post("/api/company/:company_id/clients", function (req, res) {
        const { name } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.company.createClient({
                name: name
            }, { transaction: t }).then((client) => {
                t.commit()
                return res.json({ success: true, message: `Created client: ${client.name}` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.patch("/api/company/:company_id/client/:client_id", function (req, res) {
        const { name } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.client.update({
                name: name
            }, { transaction: t }).then((client) => {
                t.commit()
                return res.json({ success: true, result: client.json, message: `Updated client: "${client.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.get("/api/company/:company_id/client/:client_id", function (req, res) {
        res.json({ success: true, result: req.client.json, message: `Found client: "${req.client.name}"` })
    })
    router.delete("/api/company/:company_id/client/:client_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.client.destroy({ transaction: t }).then((client) => {
                t.commit()
                return res.json({ success: true, result: client.json, message: `Deleted client: "${client.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
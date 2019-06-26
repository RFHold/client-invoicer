const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('client_id', function (req, res, next, id) {
        return req.sessionUser.getClients({
            where: { id: id }
        }).then((clients) => {
            if (clients[0]) {
                req.client = clients[0]
                next()
                return null
            } else {
                res.status(404).json({ error: "Client does not exist or User is not the owner" })
            }
        }).catch((error) => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })

    router.get("/api/clients", function (req, res) {
        return req.sessionUser.getClients().then((clients) => {
            if (clients) {
                res.json({ success: true, length: clients.length, results: clients.map(client => client.json), message: `Found ${clients.length} clients` })
            } else {
                res.status(404).json({ error: "No clients found" })
            }
        }).catch((error) => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.post("/api/clients", function (req, res) {
        const { name } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.createClient({
                name: name
            }, { transaction: t }).then((client) => {
                t.commit()
                return res.json({ success: true, message: `Created client: ${client.name}` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.patch("/api/client/:client_id", function (req, res) {
        const { name } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.client.update({
                name: name
            }, { transaction: t }).then((client) => {
                t.commit()
                return res.json({ success: true, result: client.json, message: `Updated client: "${client.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.get("/api/client/:client_id", function (req, res) {
        res.json({ success: true, result: req.client.json, message: `Found client: "${req.client.name}"` })
    })
    router.delete("/api/client/:client_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.client.destroy({ transaction: t }).then((client) => {
                t.commit()
                return res.json({ success: true, result: client.json, message: `Deleted client: "${client.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
}
const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('service_id', function (req, res, next, id) {
        return db.Service.findOne({
            where: { id: id, company: req.company.id }
        }).then((service) => {
            if (service) {
                req.service = service
                next()
                return null
            } else {
                res.status(404).json({ error: "Service does not exist or User is not a member of the parent company" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.get("/api/company/:company_id/services", function (req, res) {
        return req.company.getServices(req.query({ fields: [] })).then((services) => {
            if (services) {
                res.json({ success: true, length: services.length, results: services.map(service => service.json), message: `Found ${services.length} services` })
            } else {
                res.status(404).json({ error: "No services found" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.post("/api/company/:company_id/services", function (req, res) {
        const { name, rate } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.company.createService({
                name: name,
                rate: rate
            }, { transaction: t }).then((service) => {
                t.commit()
                return res.json({ success: true, message: `Created service: ${service.name}` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.patch("/api/company/:company_id/service/:service_id", function (req, res) {
        const { name, rate } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.service.update({
                name: name,
                rate: rate
            }, { transaction: t }).then((service) => {
                t.commit()
                return res.json({ success: true, result: service.json, message: `Updated service: "${service.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.get("/api/company/:company_id/service/:service_id", function (req, res) {
        res.json({ success: true, result: req.service.json, message: `Found service: "${req.service.name}"` })
    })
    router.delete("/api/company/:company_id/service/:service_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.service.destroy({ transaction: t }).then((service) => {
                t.commit()
                return res.json({ success: true, result: service.json, message: `Deleted service: "${service.name}"` })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
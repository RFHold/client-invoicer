const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('company_client_id', function (req, res, next, id) {
        return db.CompanyClient.findByPk(id).then((companyClient) => {
            if (companyClient) {
                req.companyClient = companyClient
                next()
                return null
            } else {
                res.status(404).json({ error: "Company client does not exist" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.get("/api/company/:company_id/companyClients", function (req, res) {
        return db.CompanyClient.findAll(req.query({ fields: [] })).then((companyClients) => {
            if (companyClients) {
                res.json({ success: true, length: companyClients.length, results: companyClients.map(companyClient => companyClient.json), message: `Found ${companyClients.length} company clients` })
            } else {
                res.status(404).json({ error: "No company clients found" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.post("/api/company/:company_id/companyClients", function (req, res) {
        const { user, client } = req.body

        return db.CompanyClient.create({
            company: req.company.id,
            client: client,
            user: user
        }).then((companyClient) => {
            res.json({ success: true, message: `Created company client: ${companyClient.name}` })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.get("/api/company/:company_id/companyClient/:company_client_id", function (req, res) {
        res.json({ success: true, result: req.companyClient.json, message: `Found company client: "${req.companyClient.name}"` })
    })
    router.delete("/api/company/:company_id/companyClient/:company_client_id", function (req, res) {
        return req.company.getCompanyClients({ where: { id: req.companyClient.id } }).then((companyClients) => {
            if (companyClients.length === 1) {
                return companyClients[0].destroy()
            } else {
                res.json({ success: false, error: `User does not own "${req.companyClient.name}"` })
                return null
            }
        }).then((companyClient) => {
            if (!companyClient) return null
            res.json({ success: true, result: companyClient.json, message: `Deleted company client: "${companyClient.name}"` })
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
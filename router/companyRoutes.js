const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('company_id', function (req, res, next, id) {
        return db.Company.findOne({
            where: {
                id: id
            },
            include: [{
                model: db.CompanyMember,
                where: { user: req.sessionUser.id }
            }]
        }).then((company) => {
            if (company) {
                req.company = company
                next()
                return null
            } else {
                res.status(404).json({ error: "Company does not exist or User is not a member of company" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.get("/api/companies", function (req, res) {
        return db.Company.findAll(req.query({ fields: [] })).then((companies) => {
            if (companies) {
                res.json({ success: true, length: companies.length, results: companies.map(company => company.json), message: `Found ${companies.length} companies` })
            } else {
                res.status(404).json({ error: "No companies found" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.post("/api/companies", function (req, res) {
        const { name } = req.body
        return db.sequelize.transaction().then((t) => {
            return db.Company.create({
                name: name,
                user: req.sessionUser.id
            }, { transaction: t }).then((company) => {
                return db.Role.create({
                    name: "Member",
                    permissions: 99,
                    company: company.id
                }, { transaction: t }).then((role) => {
                    return db.CompanyMember.create({
                        role: role.id,
                        user: req.sessionUser.id,
                        company: company.id
                    }, { transaction: t }).then((companyMember) => {
                        t.commit()
                        return res.json({ success: true, message: `Created company: ${company.name}` })
                    })
                })
            }).catch(error => {
                t.rollback()
                return res.status(500).json({ error: "Internal server error" })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.patch("/api/company/:company_id", function (req, res) {
        const { name } = req.body
        return db.sequelize.transaction().then((t) => {
            return req.company.update({
                name: name
            }, { transaction: t }).then((company) => {
                t.commit()
                return res.json({ success: true, result: company.json, message: `Updated company: "${company.name}"` })
            }).catch((error) => {
                t.rollback()
                return res.status(500).json({ error: "Internal server error" })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.get("/api/company/:company_id", function (req, res) {
        res.json({ success: true, result: req.company.json, message: `Found company: "${req.company.name}"` })
    })
    router.delete("/api/company/:company_id", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.getCompanies({ where: { id: req.company.id } }).then((companies) => {
                if (companies.length === 1) {
                    return companies[0].destroy({ transaction: t })
                } else {
                    return res.json({ success: false, error: `User does not own "${req.company.name}"` })
                }
            }).then((company) => {
                if (!company) return null
                t.commit()
                res.json({ success: true, result: company.json, message: `Deleted company: "${company.name}"` })
            }).catch((error) => {
                t.rollback()
                res.status(500).json({ error: "Internal server error" })
            })
        }).catch(error => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
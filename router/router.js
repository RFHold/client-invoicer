const express = require("express")
const router = express.Router()
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require(__root + "/models")

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use((req, res, next) => {
    req.query = () => {}
    if (req.query.q) {
        const q = JSON.parse(req.query.q)

        const query = ({ fields, models }) => {

            function pass(obj) {
                const finalObject = {}
                
                if (typeof obj !== "object") return obj
                for (const [param, value] of Object.entries(obj)) {
                    const [fullGroup, operator] = param.match(`[$](\\w+)`) || [null, null]
                    if (fullGroup) {
                        const Operator = Op[operator]
                        if (Operator) {
                            finalObject[Operator] = pass(value)
                        }else{
                            res.status(400).json({ error: `Invalid query operator ${fullGroup}`})
                        }
                    } else {
                        if (fields.includes(param)) {
                            finalObject[param] = pass(value)
                        }else{
                            res.status(400).json({ error: "Query parameter not allowed" })
                        }
                    }
                }
                return finalObject
            }

            return { where: pass(q), offset: req.query.offset || 0, limit: (req.query.limit > 500) ? 500 : req.query.limit || 500}
        }

        req.query = query
    }

    next()
});

// routes that do not require authentication go here
require("./unprotectedUserRoutes")(router)

// session routes everything after gets authenticated
require("./sessionRoutes")(router)

// routes that do require authentication go here
require("./protectedUserRoutes")(router)
require("./companyRoutes")(router)

module.exports = router
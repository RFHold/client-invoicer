const db = require(__root + "/models")
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const Op = Sequelize.Op;

module.exports = function (router) {
    function authenticate(req, res, next) {
        if (req.session.userID) {
            return db.User.findByPk(req.session.userID).then((user) => {
                if (user) {
                    req.sessionUser = user
                    next()
                    return null
                } else {
                    req.session.destroy()
                    res.status(401).json({ error: "Session user does not exist" })
                }
            }).catch((error) => {
                res.status(500).json({ error: "Internal server error" })
            })
        }else{
            return res.status(401).json({ error: "Not logged in" })
        }
    }
    
    router.post("/api/session", function (req, res) {
        const { login, password } = req.body

        if (!login || !password) return res.status(400).json({ success: false, error: "Input missing" })

        return db.User.findOne({
            where: { [Op.or]: [{ username: login }, { email: login }] }
        }).then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.userID = user.id
                res.json({success: true, message: `Logged in as ${user.username}`})
            } else {
                res.status(401).json({ success: false, error: "Incorrect username or password" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.all("/api/*", authenticate)

    router.get("/api/session", function (req, res) {
        return res.json({ success: true, result: req.sessionUser.json, message: `Logged in as: ${req.sessionUser.username}` })
    })
    router.delete("/api/session", function (req, res) {
        req.session.destroy()
        return res.json({ success: true, message: `Session destroyed` })
    })
}
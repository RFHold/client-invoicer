const db = require(__root + "/models")
const Sequelize = require('./node_modules/sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.param('user_id', function (req, res, next, id) {
        return db.User.findByPk(id).then((user) => {
            if (user) {
                req.user = user
                next()
                return null
            } else {
                res.status(404).json({ error: "User does not exist" })
            }
        }).catch((error) => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.patch("/api/user", function (req, res) {
        const { username, password, email, address, phone, firstName, lastName } = req.body

        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.update({
                username: username,
                password: password,
                email: email,
                address: address,
                phone: phone,
                firstName: firstName,
                lastName: lastName
            }, { transaction: t }).then((user) => {
                t.commit()
                return res.json({ success: true, result: user.json, message: `Updated user: "${user.username}"` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
    router.get("/api/user/:user_id", function (req, res) {
        res.json({ success: true, result: req.user.json, message: `Found user: "${req.user.username}"` })
    })
    router.delete("/api/user", function (req, res) {
        return db.sequelize.transaction().then((t) => {
            return req.sessionUser.destroy({ transaction: t }).then((user) => {
                t.commit()
                return res.json({ success: true, result: user.json, message: `Deleted user: "${user.username}"` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
}
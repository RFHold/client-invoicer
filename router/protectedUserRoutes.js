const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function(router) {
    router.param('user_id', function (req, res, next, id) {
        return db.User.findByPk(id).then((user) => {
            if (user) {
                req.user = user
                next()
            } else {
                res.status(404).json({ error: "User does not exist" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })

    router.get("/api/users", function (req, res) {
        return db.User.findAll(req.query({fields: ["username", "email", "phone"]})).then((users) => {
            if (users) {
                res.json({ success: true, length: users.length, results: users.map(user => user.json), message: `Found ${users.length} users` })
            } else {
                res.status(404).json({ error: "No users found" })
            }
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.patch("/api/user", function (req, res) {
        const { username, password, email, address, phone, firstName, lastName } = req.body

        return req.sessionUser.update({
            username: username,
            password: password,
            email: email,
            address: address,
            phone: phone,
            firstName: firstName,
            lastName: lastName
        }).then((user) => {
            res.json({ success: true, result: user, message: `Updated user: "${user.username}"` })
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
    router.get("/api/user/:user_id", function (req, res) {
        res.json({ success: true, result: req.user.json, message: `Found user: "${req.user.username}"` })
    })
    router.delete("/api/user", function (req, res) {
        return req.sessionUser.destroy().then((user) => {
            res.json({ success: true, result: user, message: `Deleted user: "${user.username}"` })
        }).catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
const db = require(__root + "/models")
const Sequelize = require('./node_modules/sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.post("/api/users", function (req, res) {
        const { username, password, email, address, phone, firstName, lastName } = req.body
        return db.sequelize.transaction().then((t) => {
            return db.User.create({
                username: username,
                password: password,
                email: email,
                address: address,
                phone: phone,
                firstName: firstName,
                lastName: lastName,
                verified: true
            }, { transaction: t }).then((user) => {
                req.session.userID = user.id
                t.commit()
                return res.json({ success: true, message: `Logged in as ${user.username}` })
            })
        }).catch(error => {
            res.status(500).json({ message: "Internal server error", error: error })
        })
    })
}
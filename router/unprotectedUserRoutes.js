const db = require(__root + "/models")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (router) {
    router.post("/api/users", function (req, res) {
        const { username, password, email, address, phone, firstName, lastName } = req.body

        db.User.create({
            username: username,
            password: password,
            email: email,
            address: address,
            phone: phone,
            firstName: firstName,
            lastName: lastName,
            verified: true
        }).then((user) => {
            req.session.userID = user.id
            res.json({ success: true, message: `Logged in as ${user.username}` })
        }).catch(error => {
            console.log(error);
            res.status(500).json({ error: "Internal server error" })
        })
    })
}
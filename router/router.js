const express = require("express")
const router = express.Router()

router.param('user_id', function (req, res, next, id) {
    //req.user = {name: "bob"}
    next()
})

function getSessionUser(req, res, next) {
    //req.sessionUser = { name: "jim" }
    next()
}

router.all("/api/*", getSessionUser)

router.get("/api/user/:user_id", function (req, res) {
    //res.send(req.user.name)
})

module.exports = router
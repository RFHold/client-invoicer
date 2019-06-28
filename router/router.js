const express = require("express")
const router = express.Router()
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require(__root + "/models")

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// routes that do not require authentication go here
require("./unprotectedUserRoutes")(router)

// session routes everything after gets authenticated
require("./sessionRoutes")(router)

// routes that do require authentication go here
require("./protectedUserRoutes")(router)
require("./clientRoutes")(router)
require("./projectRoutes")(router)
require("./taskRoutes")(router)
require("./timeEntryRoutes")(router)

module.exports = router
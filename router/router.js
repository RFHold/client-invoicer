const express = require("express")
const router = express.Router()

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// routes that do not require authentication go here
require("./unprotectedUserRoutes")(router)

// session routes everything after gets authenticated
require("./sessionRoutes")(router)

// routes that do require authentication go here
require("./protectedUserRoutes")(router)

module.exports = router
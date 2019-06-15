const express = require("express")
const session = require("express-session")
const enableWS = require("express-ws")
require('dotenv').config()

global.__root = __dirname

const app = express()

const models = require("./models")

app.use(express.static(__root + "/public"));

app.use(require(__root + "/router/router"))

const PORT = process.env.port || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening to port :" + PORT);
})
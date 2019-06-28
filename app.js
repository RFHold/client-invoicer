const express = require("express")
const enableWs = require("express-ws")

const session = require("express-session")
const MySQLStore = require('connect-mysql')(session)

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.js')[env];
const PORT = process.env.port || 4000
require('dotenv').config()

global.__root = __dirname

const app = express()
const wss = enableWs(app)

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 3,
        expires: 1000 * 60 * 60 * 24 * 3
    },
    store: new MySQLStore({
        config: process.env[config.use_env_variable]
    })
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__root + "/build"));
app.use(require(__root + "/router/router"))

app.listen(PORT, function() {
    console.log("App listening to port: " + PORT);
})
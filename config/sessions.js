require("dotenv").config();
const session = require("express-session");
const KnexSession = require("connect-session-knex")(session);
const db = require("../database/dbConfig");

module.exports = {
	name: "asid",
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 10,
		secure: false,
		httpOnly: true
    }
    store: new KnexSession({
        knex: db,
		tablename: "sessions",
		sidfieldname: "sid",
		createtable: true,
		clearInterval: 1000 * 60 * 30
    })
};

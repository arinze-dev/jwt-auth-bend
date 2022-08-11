const Route = require("express").Router();
const jwt = require("jsonwebtoken");
const { route } = require("./login");

Route.get("/logout", (req, res) => {
	res.header("usertoken", "", { maxAge: 2 }).json("user loged out");
	// res.redirect("/login");
	res.end();
});

module.exports = Route;

const Route = require("express").Router();
const jwt = require("jsonwebtoken");
const { route } = require("./login");

Route.get("/logout", (req, res) => {
 return res.header("usertoken", "", { maxAge: 1}).json("user loged out");
	// res.redirect("/login");
	// res.end();
});

module.exports = Route;

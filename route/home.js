const Route = require("express").Router();

const authUser = require("../middleware/auth");

Route.get("/home", authUser, (req, rse) => {
	res.send("<h1>welcome to home Route</h1>");
});

module.exports = Route;

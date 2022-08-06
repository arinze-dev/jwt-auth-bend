const Route = require("express").Router();

const authUser = require("../middleware/auth");

Route.get("/home", authUser, (req, res) => {
	res.json({ message: "welcome to home Route" });
});

module.exports = Route;

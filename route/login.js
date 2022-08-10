const Route = require("express").Router();
const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {validateLogin} =require("../model/user")
// const { route } = require("./register");

Route.post("/login", async (req, res) => {
	  //  the data varable is equal user log in data 
	const loginData = {
		email: req.body.email,
		password: req.body.password,
	}

	const {error} = validateLogin(loginData)

	// note this logs all the error because abortEarly is false in joi 

	if (error) return error.details


	const user = await User.findOne({ email: loginData.email });
	if (!user) return res.status(400).send("wrong email try angin");

	const correPassword = await bcrypt.compare(loginData.password, user.password);
	if (!correPassword) return res.status(400).send("wrong password try angin");
	// creating the token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header("usertoken", token).send(token);
	// return res.status(200).send("loged in ", token);
});

module.exports = Route;

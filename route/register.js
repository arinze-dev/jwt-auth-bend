const Route = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../model/user");

Route.post("/register", async (req, res) => {
	//  checking for the input length
	if (
		req.body.email.length < 10 ||
		req.body.name.length < 5 ||
		req.body.password.length < 8
	)
		return res.send("check the your input");

	//  checking to no if the name already exist
	const nameCheck = await User.findOne({ name: req.body.name }); //
	if (nameCheck) return res.status(402).send("Name already Exist ⚡");
	//  checking to no if the email already exist
	const emailCheck = await User.findOne({ email: req.body.email }); //
	if (emailCheck) return res.status(402).send("Email already Exist ⚡");
	//

	//  bcrypt
	const salt = await bcrypt.genSalt(10);
	const passwordHash = await bcrypt.hash(req.body.password, salt);

	//

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: passwordHash,
	});
	const Newuser = await user.save();
	res.send("success registration ", Newuser);
});

Route.get("/register", (req, res) => {
	res.send("god");
});
module.exports = Route;

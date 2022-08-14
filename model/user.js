const mongoose = require("mongoose");
const joi = require("joi");
const { string } = require("joi");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		min: 6,
	},
	email: {
		type: String,
		require: true,
		min: 6,
	},
	password: {
		type: String,
		require: true,
		min: 6
	},
});

const validateRegister = function (data) {
	const joischema = joi.object({
		name: joi.string().min(4).trim().required(),
		email: joi.string().min(6).required().email(),
		password: joi.string().min(8).required(),
	});

	return joischema.validate(data, { abortEarly: false });
};

const validateLogin = function (data) {
	const joischema = joi.object({
		email: joi.string().required().email().min(6),
		password: joi.string().min(8).required(),
	});

	return joischema.validate(data, { abortEarly: false });
};

module.exports = {
	User: mongoose.model("User", UserSchema),
	validateRegister: validateRegister,
	validateLogin: validateLogin,
};

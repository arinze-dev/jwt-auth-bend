const mongoose = require("mongoose");
const joi = require("joi");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		min: 6,
	},
	email: {
		type: String,
		require: true,
		min: 10,
	},
	password: {
		type: String,
		require: true,
		min: 6,
	},
});

const validateRegister = function (data) {
	const joischema = joi.object({
		name: joi.string().min(4).trim().required(),
		email: joi.string().required().min(6).email(),
		password: joi.string().min(8).max(14).required(),
	});

	return joischema.validate(data, { abortEarly: false });
};

const validateLogin = function (data) {
	const joischema = joi.object({
		email: joi.string().required().email().min(8),
		password: joi.string().min(8).max(14).required(),
	});

	return joischema.validate(data, { abortEarly: false });
};

module.exports = {
	User: mongoose.model("User", UserSchema),
	validateRegister: validateRegister,
	validateLogin: validateLogin,
};

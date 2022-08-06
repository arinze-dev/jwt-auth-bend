const mongoose = require("mongoose");

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

module.exports = {
	User: mongoose.model("User", UserSchema),
};

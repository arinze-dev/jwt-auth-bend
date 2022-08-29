const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	const token = req.header("usertoken");
	if (!token) return res.status(400).json("access denied⚡");
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.User = verified;
		next();

	} catch (err) {
	 return	res.status(400).json(" The token didn't match⚡");
	}
};

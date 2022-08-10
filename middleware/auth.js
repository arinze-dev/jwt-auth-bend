const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	const token = req.header("usertoken");
	if (!token) return res.status(400).send("access denied⚡");
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.User = verified;
		next();
	} catch (err) {
		res.status(400).send(" The token didn't match⚡");
	}
};


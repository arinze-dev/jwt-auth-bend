const Route = require("express").Router();

const authUser = require("../middleware/auth");

Route.get("/home", authUser, (req, res) => {
	res.json({ message: "welcome to home Route" });
});

module.exports = Route;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmVlMzY5NDAxYWMzMTVhMTQ3NzhhODciLCJpYXQiOjE2NTk3OTA1NTh9.nmOIlmtbLstMI-8PhWrB8Gsz8N3krwzDMeCzXkAwDZU

// change on the auth route header(usertoken) to header('usertoken') $ home route rse to res
"use strict";

var express = require("express");

var app = express();

var mongoose = require("mongoose");

var dotenv = require("dotenv"); // const jwt = require("jsonwebtoken");


var bodyParser = require("body-parser");

dotenv.config(); //

app.use(bodyParser.json()); // parse application/json

app.use(bodyParser.urlencoded({
  extended: false
}));
mongoose.connect("mongodb://localhost/jwt-db", {
  useNewUrlParser: true
}, function () {
  console.log("connected to jwt-db");
}); // geting the route

var registerRoute = require("./route/register");

var login = require("./route/login");

var logout = require("./route/logout");

var homeRoute = require("./route/home");

var cors = require("cors");

app.use(express.json());
app.use(cors);
app.use("/api", registerRoute);
app.use("/api", login);
app.use("/api", logout);
app.use(homeRoute);
app.listen(4000, function () {
  console.log("server is online");
});
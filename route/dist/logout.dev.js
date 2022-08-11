"use strict";

var Route = require("express").Router();

var jwt = require("jsonwebtoken");

var _require = require("./login"),
    route = _require.route;

Route.get("/logout", function (req, res) {
  res.header("usertoken", "", {
    maxAge: 2
  }).json("user loged out");
  res.redirect("/login");
});
module.exports = Route;
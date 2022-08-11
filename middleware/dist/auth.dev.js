"use strict";

var express = require("express");

var jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  var token = req.header("usertoken");
  if (!token) return res.status(400).json("access denied⚡");

  try {
    var verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.User = verified;
    res.json("success");
    next();
  } catch (err) {
    res.status(400).json(" The token didn't match⚡");
  }
};
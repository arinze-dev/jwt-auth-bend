"use strict";

var Route = require("express").Router();

var _require = require("../model/user"),
    User = _require.User;

var jwt = require("jsonwebtoken");

var bcrypt = require("bcrypt");

var _require2 = require("../model/user"),
    validateLogin = _require2.validateLogin; // const { route } = require("./register");


Route.post("/login", function _callee(req, res) {
  var loginData, _validateLogin, error, user, correPassword, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //  the data varable is equal user log in data
          loginData = {
            email: req.body.email,
            password: req.body.password
          };
          _validateLogin = validateLogin(loginData), error = _validateLogin.error; // note this logs all the error because abortEarly is false in joi

          if (!error) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json(error.details));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            email: loginData.email
          }));

        case 6:
          user = _context.sent;

          if (user) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(400).json("wrong email try angin"));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(bcrypt.compare(loginData.password, user.password));

        case 11:
          correPassword = _context.sent;

          if (correPassword) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(400).json("wrong password try angin"));

        case 14:
          // creating the token
          token = jwt.sign({
            _id: user._id
          }, process.env.TOKEN_SECRET);
          res.header("usertoken", token).send(token); // return res.status(200).send("loged in ", token);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = Route;
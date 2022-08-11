"use strict";

var Route = require("express").Router();

var bcrypt = require("bcrypt"); // const { User } = require("../model/user");


var _require = require("../model/user"),
    User = _require.User,
    validateRegister = _require.validateRegister;

Route.post("/register", function _callee(req, res) {
  var RegisterData, _validateRegister, error, value, nameCheck, emailCheck, salt, userMoudel, Newuser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // console.log(req.body);
          //  the data varable is equal user data
          RegisterData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          };
          _validateRegister = validateRegister(RegisterData), error = _validateRegister.error, value = _validateRegister.value; // note this logs all the error because abortEarly is false in joi

          if (!error) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(200).json(error.details));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            name: RegisterData.name
          }));

        case 6:
          nameCheck = _context.sent;

          if (!nameCheck) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(400).json("Name already Exist ⚡"));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(User.findOne({
            email: RegisterData.email
          }));

        case 11:
          emailCheck = _context.sent;

          if (!emailCheck) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(400).json("Email already Exist ⚡"));

        case 14:
          //
          //  bcrypt
          console.log(RegisterData.password);
          _context.next = 17;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 17:
          salt = _context.sent;
          _context.next = 20;
          return regeneratorRuntime.awrap(bcrypt.hash(RegisterData.password, salt));

        case 20:
          RegisterData.password = _context.sent;
          //
          userMoudel = new User(RegisterData);
          _context.prev = 22;
          _context.next = 25;
          return regeneratorRuntime.awrap(userMoudel.save());

        case 25:
          Newuser = _context.sent;
          console.log(Newuser);
          res.json("success registration ");
          _context.next = 33;
          break;

        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](22);
          res.status(400).json(_context.t0);

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[22, 30]]);
}); // Route.get("/register", (req, res) => {
// 	res.json("god");
// });

module.exports = Route;
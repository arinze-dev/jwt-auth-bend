"use strict";

var mongoose = require("mongoose");

var joi = require("joi");

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 6
  },
  email: {
    type: String,
    require: true,
    min: 10
  },
  password: {
    type: String,
    require: true,
    min: 6
  }
});

var validateRegister = function validateRegister(data) {
  var joischema = joi.object({
    name: joi.string().min(4).trim().required(),
    email: joi.string().required().min(6).email(),
    password: joi.string().min(8).max(14).required()
  });
  return joischema.validate(data, {
    abortEarly: false
  });
};

var validateLogin = function validateLogin(data) {
  var joischema = joi.object({
    email: joi.string().required().email().min(8),
    password: joi.string().min(8).max(14).required()
  });
  return joischema.validate(data, {
    abortEarly: false
  });
};

module.exports = {
  User: mongoose.model("User", UserSchema),
  validateRegister: validateRegister,
  validateLogin: validateLogin
};
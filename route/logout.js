const Route = require("express").Router();
const jwt = require("jsonwebtoken");
const { route } = require("./login");

 Route.get("/logout",(req,res)=>{
  res.header("usertoken",'',{maxAge:2}) 
  res.redirect("/login")
})


module.exports = Route
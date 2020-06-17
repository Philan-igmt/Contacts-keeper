const express = require("express");
const route = express.Router();

//orute GET request api/auth
//desciption GET logged in user
//access private

route.get("/", (req, res) => {
  res.send("Get logged in user");
});

//orute POST request api/auth
//desciption AUTH user and get token
//access public

route.post("/", (req, res) => {
  res.send("log in user");
});

module.exports = route;

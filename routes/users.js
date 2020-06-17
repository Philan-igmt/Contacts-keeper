const express = require("express");
const route = express.Router();

//route POST request api/user
//desciption register a user
//access public

route.post("/", (req, res) => {
  res.send("register a user");
});

module.exports = route;

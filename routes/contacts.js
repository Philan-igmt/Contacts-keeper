const express = require("express");
const route = express.Router();

//orute GET request api/contacts
//desciption get all users contacts
//access private

route.get("/", (req, res) => {
  res.send("get all contacts");
});

//orute POST request api/contacts
//desciption Add new contact
//access private

route.post("/", (req, res) => {
  res.send("add conacts");
});

//orute PUT request api/contacts/:id
//desciption Add new contact
//access private

route.put("/:id", (req, res) => {
  res.send("update contacts");
});

//orute DELETE request api/contacts/:id
//desciption DELETE contact
//access private

route.delete("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = route;

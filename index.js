const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("hello world"));

const PORT = process.env.PORT || 5000;

//defining routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const contactsRoute = require("./routes/contacts");

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/contacts", contactsRoute);

//to listern to the port, to run the server
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

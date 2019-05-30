const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// configure dotenv
require("dotenv").config();

const message_controller = require("./controllers/messageController");

const app = express();
const port = process.env.PORT || 5000;
// set up mongoose connection
mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"build")));

/* handle routes */

// GET messages
app.get("/messages", message_controller.message_get);

/*
// POST message
app.post("/messages", message_controller.message_post);
*/

// route root to the react app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () =>
  console.log(`Listening on port ${port} | http://localhost:${port}`)
);

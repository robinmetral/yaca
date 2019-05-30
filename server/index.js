// configure dotenv
require("dotenv").config();

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;
// set up mongoose connection
mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// todo fetch data from mongodb
const response = [
  {
    author: "robin",
    message: "hey",
    timestamp: 1559218918716
  }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect(`/messages`);
});

app.get("/messages", (req, res) => {
  res.send(response);
});

app.use((req, res) => {
  res.status(404).send({ error: "No route found" });
});

app.listen(port, () =>
  console.log(`Listening on port ${port} | http://localhost:${port}`)
);

// configure dotenv
require("dotenv").config();

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { message_get, message_post } from "./controllers/messageController";

const app = express();
const port = process.env.PORT || 5000;
// set up mongoose connection
mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* handle routes */
// redirect index to messages
app.get("/", (req, res) => {
  res.redirect(`/messages`);
});
// GET messages
app.get("/messages", message_get);
// POST message
app.get("/messages", message_post);
// set up 404
app.use((req, res) => {
  res.status(404).send({ error: "No route found" });
});

app.listen(port, () =>
  console.log(`Listening on port ${port} | http://localhost:${port}`)
);

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// configure express
const app = express();
const port = process.env.PORT || 5000;

// configure dotenv for local environment
// managed by heroku in production
require("dotenv").config();

// set up mongoose connection
mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// create message model
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  user: { type: String, required: true, max: 25 },
  message: { type: String, required: true, max: 280 },
  timestamp: { type: Number, required: true }
});
mongoose.model("Message", MessageSchema);

// serve build directory as static files
app.use(express.static(path.join(__dirname, "build")));

// support json-encoded POST requests
app.use(express.json());

// handle 404
app.use((req, res) => {
  res.status(404).send("Not found");
});

// GET messages on the endpoint
app.get("/api", (req, res, next) => {
  Message.find({}, "user message timestamp").exec((error, messages) => {
    if (error) {
      res.send({ error });
    } else {
      // return messages as json
      res.json(messages);
    }
  });
});

// POST message
app.post("/api/post", (req, res) => {
  // destructure request
  const { body } = req;
  // build message
  const message = new Message(body);

  // populate message
  message.save(error => {
    if (error) console.log(error);
    else {
      console.log(`Message populated: ${message}`);
    }
  });
});

// route root to the react app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () =>
  console.log(`Listening on port ${port} | http://localhost:${port}`)
);

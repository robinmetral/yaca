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
const MessageSchema = new Schema(
  {
    user: { type: String, required: true, max: 25 },
    message: { type: String, required: true, max: 280 },
    timestamp: { type: Number, required: true }
  },
  {
    capped: { max: 100, size: 25600 }
  }
);
const Message = mongoose.model("Message", MessageSchema);

// serve build directory as static files
app.use(express.static(path.join(__dirname, "build")));

// support json-encoded POST requests
app.use(express.json());

// GET messages on the endpoint
app.get("/api", (req, res, next) => {
  Message.find({}, "user message timestamp").exec((error, messages) => {
    if (error) {
      res.send({ error });
    } else {
      // return messages as json
      res.send(messages);
    }
  });
});

// POST message
app.post("/api/post", (req, res) => {
  // extract message
  const data = req.body;
  // add timestamp
  data.timestamp = Date.now();
  // build message
  const message = new Message(data);
  // populate message
  message.save(error => {
    if (error) {
      res.send({ error });
    } else {
      // return message
      res.send({ message });
    }
  });
});

// route root to the react app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// handle 404
app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () =>
  console.log(`Listening on port ${port} | http://localhost:${port}`)
);

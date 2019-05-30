// configure dotenv
require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
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

app.use(express.static(path.join(__dirname, "build")));

/* handle routes */

// 404
app.use((req, res) => {
  res.status(404).send("Not found");
});

// GET messages
app.get("/messages", (req, res, next) => {
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
app.post("/messages", (req, res) => {
  console.log("req", req);
  /*
  // build message
  const message = new Message({
    user: "robin",
    message: "Hello MongoDB!",
    timestamp: 1559198920378
  });

  // populate message
  message.save(error => {
    if (error) console.log(error);
    else {
      console.log(`Message populated: ${message}`);
      // closing db connection
      mongoose.connection.close();
    }
  });
  */
});

// route root to the react app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () =>
  console.log(`Listening on port ${port} | http://localhost:${port}`)
);

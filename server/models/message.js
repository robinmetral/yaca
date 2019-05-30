const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: { type: String, required: true, max: 25 },
  message: { type: String, required: true, max: 280 },
  timestamp: { type: Number, required: true }
});

module.exports = mongoose.model("Message", MessageSchema);

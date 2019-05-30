import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: { type: String, required: true, max: 25 },
  message: { type: String, required: true, max: 280 },
  timestamp: { type: Number, required: true }
});

export default mongoose.model("Message", MessageSchema);

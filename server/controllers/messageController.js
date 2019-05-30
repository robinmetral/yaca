import Message from "../models/message";

export const message_get = (req, res, next) => {
  Message.find({}, "user message timestamp").exec((error, messages) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(messages);
    }
  });
};

// create message
export const message_post = (req, res) => {
  res.send({ error: "Not implemented yet" });
};

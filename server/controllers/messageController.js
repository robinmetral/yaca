import Message from "../models/message";

export const message_get = (req, res, next) => {
  Message.find({}, "user message timestamp").exec((err, message_list) => {
    if (err) {
      return next(err);
    }
    // render
    res.render("message_list", { title: "Messages", message_list });
  });
};

// create message
export const message_post = (req, res) => {
  res.send("Not implemented yet");
};

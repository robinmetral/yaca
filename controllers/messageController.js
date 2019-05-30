const Message = require("../models/message");

module.exports.message_get = (req, res, next) => {
  Message.find({}, "user message timestamp").exec((error, messages) => {
    if (error) {
      res.send({ error });
    } else {
      res.send(messages);
    }
  });
};

// create message
module.exports.message_post = (req, res) => {
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
};

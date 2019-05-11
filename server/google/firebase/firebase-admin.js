const FCM = require("fcm-node");
const serverKey = require("./firebaseAdmin.json"); //put your server key here
const fcm = new FCM(serverKey);

// const message = {
//   //this may vary according to the message type (single recipient, multicast, topic, et cetera)
//   to:
//     "eNmNe-PDmRc:APA91bGeklvNgviaPku6x6_h6Ymh-Ya6wlZuZRfLFlbBoCe5WUQqQjta2DRH003PIiFfVRV8pKYEZeXKqbKSpSWIu1IvslQCD14JaGcTcvZN2kx84uwB0I1QwYyB8yNukFbHalsJpUEI",
//   // collapse_key: "AIzaSyDgLbaO5zfbvcW2chqyZflWLXqS1jHhtzQ",

//   notification: {
//     title: "Title of your push notification",
//     body: "Body of your push notification"
//   },

//   data: {
//     //you can send only notification or only data(or include both)
//     my_key: "my value",
//     my_another_key: "my another value"
//   }
// };

const sendMessage = (res, message) => {
  fcm.send(message, function(err, response) {
    if (err) {
      console.log("Something has gone wrong!");
      res.json(err);
    } else {
      console.log("Successfully sent with response: ", response);
      res.json(response);
    }
  });
};
module.exports = app => {
  app.post("/push-notification", (req, res) => {
    const { message } = req.body;
    sendMessage(res, message);
  });
};

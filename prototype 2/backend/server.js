const { default: axios } = require("axios");
const qs = require("querystring");

class user {
  constructor(userID, partnerID) {
    // this.userMessageLog = userMessageLog;
    // this.partnerMessageLog = partnerMessageLog;
    this.userMessageLog = [];
    this.partnerMessageLog = [];
    this.info = {
      userID,
      partnerID,
    };
  }
}

let user1 = new user(69, 420);

user1.userMessageLog.push("hey");
user1.partnerMessageLog.push("howdy");
user1.userMessageLog.push("whatsup");
user1.partnerMessageLog.push("not much");

// http bits

// const http = require("http");
// // const server = http.createServer();

// // // Listen to the request event
// // server.on("request", (request, res) => {
// //   res.writeHead(200, {
//     // "Content-Type": "application/json",
//     // "Access-Control-Allow-Origin": "*",
// //   });
// //   res.end(
// //     JSON.stringify({
// //       data: "Hello World!",
// //     })
// //   );
// // });

// // server.listen(8000);

// const host = 'localhost';
// const port = 8000;

// const requestListener = function (req, res) {
//     res.writeHead(200,{
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       });
//     res.end("My first server!");
//     req
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// })

("use strict");

const express = require("express");
const bodyParser = require("body-parser");

// Create a new instance of express
const app = express();

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Route that receives a POST request to /sms
app.post("/", function (req, res) {
  const body = req.body.Body;
  res.set("Content-Type", "text/plain");
  res.set("Access-Control-Allow-Origin", "*");
    res.send(Object.keys(req.body)[0]);
    console.log(Object.keys(req.body)[0])
});

// Tell our app to listen on port 3000
app.listen(8000, function (err) {
  if (err) {
    throw err;
  }

  console.log("Server started on port 8000");
});

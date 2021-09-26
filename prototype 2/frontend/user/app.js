// const { resolve } = require("path/posix");

// const { time } = require("console");

// Classes
class User {
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

function sendPostRequest(destinationURL, requestBody) {
  let config = {
    method: "post",
    url: destinationURL,
    data: requestBody,
  };

  //send a post req and print req body to console
  return axios(config);
}

var user1 = new User(69, 420); // DEBUG

// sends the last item in userMessageLog and pops it upon successful transfer
function transmitUserMessageLog() {
  sendPostRequest(
    Url,
    user1.userMessageLog[user1.userMessageLog.length - 1]
  ).then((result) => {
    if (result.Status == 200) {
      user1.userMessageLog.pop();
      console.log("freak");
    } else {
      console.log(result.Status);
    }
  });
}

// debugging

user1.userMessageLog.push("hey");
user1.partnerMessageLog.push("howdy");
user1.userMessageLog.push("whatsup");
user1.partnerMessageLog.push("not much");

const Url = "http://127.0.0.1:8000";

function syncUserMessageLog() {
  if (user1.userMessageLog[user1.userMessageLog.length - 1] !== undefined) {
    sendPostRequest(
      Url,
      user1.userMessageLog[user1.userMessageLog.length - 1]
    ).then((result) => {
      if (result.status === 200) {
        user1.userMessageLog.pop();
        // console.log('success')
      } else {
        // console.log('fail')
      }
    });
  }
}

var i = 1;                

function loop() {       
  setTimeout(function() {  
    syncUserMessageLog(); 
    i++;                   
    if (i < 10) {           
      loop();            
    }                       
  }, 100)
}

loop(); 

// var sleep = 1000;
// setTimeout(syncUserMessageLog(), sleep);
// while (user1.userMessageLog.length >= 1) {
// }

// while(user1.userMessageLog.length > 0) {
//   if (user1.userMessageLog[user1.userMessageLog.length - 1] !== undefined) {
//     sendPostRequest(Url, user1.userMessageLog[user1.userMessageLog.length - 1]).then((result) => {
//       if (result.status === 200) {
//         user1.userMessageLog.pop();
//         // console.log('success')
//       } else {
//         // console.log('fail')
//       }
//     });
//   }
// }

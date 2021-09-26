// Classes
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

// debugging
let user1 = new user(69, 420);

user1.userMessageLog.push("hey");
user1.partnerMessageLog.push("howdy");
user1.userMessageLog.push("whatsup");
user1.partnerMessageLog.push("not much");

console.log(user1.userMessageLog);

const Url = "http://127.0.0.1:8000";

var responseBody = "";
function sendPost(destinationURL, requestBody) {
    let config = {
      method: "post",
      url: destinationURL,
      data: requestBody,
    };
    
    //send a post req and print req body to console
    return axios(config)
}
// console.log(sendPost(Url, "aaaaaaaaaaaaaaaaa"));
sendPost(Url, user1.userMessageLog.join()).then((data) => console.log(data.data))
// console.log(responseBody)

// class user {
//   userMessageLog: [],
//   partnerMessageLog: [],
//   info: {
//     userID,
//     partnerID,
//   },
// };

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
let user1 = new user();
// console.log(user1.info.);

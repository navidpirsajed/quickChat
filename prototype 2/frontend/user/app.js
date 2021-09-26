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

user1.userMessageLog.push('hey')
user1.partnerMessageLog.push('howdy')
user1.userMessageLog.push('whatsup')
user1.partnerMessageLog.push('not much')



console.log(user1.userMessageLog[0]);

// variables
var userData = {
    userMessage: '',
    partnerMessage: '',
    userID: '',
    partnerID: ''
}

let serverResponse = "";

const backendURL

// debugging variables
let msgA = "bunch of random garbage";

// sends out an http post request to backend 
function sendPostRequest(url,requestBody) {
    return $.post(url,requestBody)
}

//
function transmitMessage(userMessage) {
    sendPostRequest()
}
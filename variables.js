let lightColor = "#74BF04";
let darkColor = "#488C03";

let allowRecipient = false;
let allowEncryption = false;
let allowHacking = false;

let lastResetTime = new Date().getTime()/1000;

const knownConnections = document.getElementById("knownMicrobits");
const messageBoard = document.getElementById("messageBoard");
const serverSpace = document.getElementById("serverSpace");
let messageIndex = 0;
let hashCode = ""

let messageConstruct = [];  // array to construct messages from the microbit

// locally store any information received from the microbit
let knownMicrobits = []; // [0] are the actual microbit names, [1] are the assigned numerical id's

let newMessageList = [[false, ""],[false, ""],[false, ""],[false, ""],[false, ""], ["", ""]];
let lastMessageStats = ["", "", ""];
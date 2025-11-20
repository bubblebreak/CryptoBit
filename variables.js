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

let newImages = []

const features = [  ["serverButton", "Se Server", "server"], 
                    ["translaterButton", "Se Oversætter", "translate"], 
                    ["builderButton", "Tilføj Billede-byggeren", "build"],
                    ["recipientButton", "Tilføj modtager", "receiver"],
                    ["encryptButton", "Tillad Kryptering", "encrypt"],
                    ["hackingButton", "Tillad Hacking", "hack"]];

const localImages = [[[0,0,0,0,0],[0,1,0,1,0],[0,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]], 
                    [[0,0,0,0,0],[0,1,0,1,0],[0,0,0,0,0],[0,1,1,1,0],[1,0,0,0,1]]];

const ledNumber = [[[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0]], // 1
                  [[1,1,1,0,0],[0,0,0,1,0],[0,1,1,0,0],[1,0,0,0,0],[1,1,1,1,0]], // 2
                  [[1,1,1,1,0],[0,0,0,1,0],[0,0,1,0,0],[1,0,0,1,0],[0,1,1,0,0]], // 3
                  [[0,0,1,1,0],[0,1,0,1,0],[1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0]], // 4
                  [[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]], // 5
                  [[0,0,0,1,0],[0,0,1,0,0],[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0]], // 6
                  [[1,1,1,1,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]], // 7
                  [[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0]], // 8
                  [[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0],[0,0,1,0,0],[0,1,0,0,0]]]; // 9

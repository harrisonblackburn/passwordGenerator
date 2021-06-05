// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

let charTotal = 0; 
let lowerChar = false;
let upperChar = false; 
let numChar = false;
let specialChar = false; 

let numberOps = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let specialCharOps = ["!", "%", "&", ",", "*", "+", "-", ".", "~", "=", "/", "<", ">", "?"];

let lowCaseOps = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let upCaseOps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

charTotal = prompt("What is the length of your passowrd?")

while (charTotal < 8 || charTotal > 100 || !charTotal.match(/^[0-9]+$/)) {
  alert ("Please enter a password between 8 and 100 characters")
  charTotal = prompt("What is the length of your password (must be between 8 and 100 characters)?");

}

lowerChar = confirm("Would you like to use lower case letters?"); 

upperchar = confirm("Would you like to use upper case letters?"); 

numChar = confirm("Would you like to use numerical characters?");

specialChar = confirm("Would you like to use special characters?");

let passwordChar = ""; 

if (lowerChar) {
  passwordChar += lowCaseOps
};

if (upperChar) {
  passwordChar += upCaseOps
};

if (numChar) {
  passwordChar += numberOps
};

if (specialChar) {
  passwordChar += specialCharOps
}

let newPassword = ""; 

for (let i=0; i < charTotal; i++) {
  let char = Math.floor(Math.random() * passwordChar.length)
  newPassword += passwordChar[char];
}
return newPassword

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

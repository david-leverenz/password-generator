// Assignment Code
var generateBtn = document.querySelector("#generate");

// var pwspecs = {
//   length: pull from popup;
//   lower: pull from popup;
//   upper: pull from popup;
//   numbers: pull from popup;
//   special: pull from popup;
// }

var lowercharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialcharaters = ["~","!","@","#","$","%","^","&","*","(",")","_","+","="]

var text;
var pwlength
var chooselower
var chooseupper
var choosenumbers
var choosespecial

function generateIt() {
  let number;
  let pwlength = prompt("Specify password length (between 8 and 128)", 8);
  if (pwlength == null || pwlength == "" || pwlength == "Enter Here") {
    text = "User cancelled the prompt.";
  } else {
    text = "You chose a length of " + pwlength + ".";
  }
  console.log(text);

  for (var i = 0; i < pwlength; i++) { 
    console.log(lower[i] + ".");
  }

  if (confirm("Do you want lower case characters?")) {
    chooselower=true;
  } else {
    chooselower=false;;
  }
  console.log(chooselower);

  if (confirm("Do you want upper case characters?")) {
    chooseupper=true;
  } else {
    chooseupper=false;;
  }
  console.log(chooseupper);

  var text;
  if (confirm("Do you want numbers?")) {
    text = "You pressed Yes to numbers.";
  } else {
    text = "You do not want numbers.";
  }
  console.log(text);
 
  var text;
  if (confirm("Do you want special characters?")) {
    text = "You pressed Yes to special characters.";
  } else {
    text = "You do not want special characters.";
  }
  console.log(text);
}



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

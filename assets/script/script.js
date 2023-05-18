// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="]
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var pwLength;
var datainput
var chooseLower;
var chooseUpper;
var chooseNumbers;
var chooseSpecial;
var generatedPassword;
var characterSetContents= [];

// first get password info
// then create random characters
// then generate password

function generateIt() {

  var pwLength = parseInt(window.prompt("Specify password length (between 8 and 128)", 8));
  if (pwLength === null) {
    alert("No password for you!");
    return;
  }
  if (pwLength == null || pwLength < 8 || pwLength > 128 || pwLength == "Enter Here" || isNaN(pwLength)) {
    prompt("Please enter a number is between 8 and 128.");
    generateIt();
  } else {
    console.log("You chose a length of " + pwLength + ".");
  }
  // console.log(text);

  if (confirm("Do you want lower case characters?")) {
    chooseLower = true;
  } else {
    chooseLower = false;
  }
  console.log("\n" + "Lower choice: " + chooseLower);

  if (confirm("Do you want upper case characters?")) {
    chooseUpper = true;
  } else {
    chooseUpper = false;

    // console.log("datainput: "+ datainput);

    // var chooseUpper =  datainput;  
  }
  console.log("\n" + "Upper choice: " + chooseUpper);

  if (confirm("Do you want numbers?")) {
    chooseNumbers = true;
  } else {
    chooseNumbers = false;
  }
  console.log("\n" + "Number choice: " + chooseNumbers);

  if (confirm("Do you want special characters?")) {
    chooseSpecial = true;
  } else {
    chooseSpecial = false;
  }
  console.log("\n" + "Special choice: " + chooseSpecial);



  if (chooseLower == true) {
    console.log("\n" + "chooseLower value is: " + chooseLower);
    characterSetContents = characterSetContents.concat(lowerCharacters);
    // var lowerSelect;

    // var randNum = Math.floor(Math.random() * 26);
    // var lowerSelect = lowerCharacters[randNum];
    // console.log("\n" + "Lowercase selection: " + lowerSelect);
  }
  
  if (chooseUpper == true) {
    characterSetContents = characterSetContents.concat(upperCharacters);
    // var upperSelect;

    // var randNum = Math.floor(Math.random() * 26);
    // var upperSelect = upperCharacters[randNum];
    // console.log("\n" + "Uppercase selection: " + upperSelect);
  }
  
  if (chooseNumbers == true) {
    characterSetContents = characterSetContents.concat(numberCharacters);
    // var numberSelect;



  } 
  
  if (chooseSpecial == true) {
    characterSetContents = characterSetContents.concat(specialCharacters);
    // var specialSelect;

    // var randNum = Math.floor(Math.random() * 10);
    // var specialSelect = specialCharacters[randNum];
    // console.log("\n" + "Special selection: " + specialSelect);
    
  }
    console.log(characterSetContents);

    // console.log("\n" + "Your password is: " + lowerSelect + upperSelect + numberSelect + specialSelect);
  
  for (var i = 0; i < pwLength; i++) {
    var randNum = Math.floor(Math.random() * characterSetContents.length);
    var passwordCharacters = characterSetContents[randNum];
    console.log("Character selection: " + passwordCharacters);
  }
  generatedPassword = "password"
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;

  
 

}

// var newPassword
// newPassword += pickletter


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

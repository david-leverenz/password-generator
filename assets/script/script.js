// Assignment Code
var generateBtn = document.querySelector("#generate");

// These are the four different arrays to pull characters from.

var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="]
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// I created my variables here.

var pwLength;
var chooseLower;
var chooseUpper;
var chooseNumbers;
var chooseSpecial;
var generatedPassword;

// I decided to put it all in one function.  I realize that I could break into multiple functions.

function generateIt() {

  // First I collect all of the inputs.

  var pwLength = parseInt(window.prompt("Specify password length (between 8 and 128)", 8));

  if (pwLength == null || pwLength < 8 || pwLength > 128 || pwLength == "Enter Here" || isNaN(pwLength)) {
    prompt("Please enter a number is between 8 and 128.");
    generateIt();
  }

  // console.log("You chose a length of " + pwLength + ".");

  if (confirm("Do you want lower case characters?")) {
    chooseLower = true;
  } else {
    chooseLower = false;
  }

  // console.log("\n" + "Lower choice: " + chooseLower);

  if (confirm("Do you want upper case characters?")) {
    chooseUpper = true;
  } else {
    chooseUpper = false;

  }

  // console.log("\n" + "Upper choice: " + chooseUpper);

  if (confirm("Do you want numbers?")) {
    chooseNumbers = true;
  } else {
    chooseNumbers = false;
  }

  // console.log("\n" + "Number choice: " + chooseNumbers);

  if (confirm("Do you want special characters?")) {
    chooseSpecial = true;
  } else {
    chooseSpecial = false;
  }

  // console.log("\n" + "Special choice: " + chooseSpecial);

  // Next I build a single array based on the collected inputs.

  var characterSetContents = [];

  if (chooseLower == true) {
    characterSetContents = characterSetContents.concat(lowerCharacters);
  }

  if (chooseUpper == true) {
    characterSetContents = characterSetContents.concat(upperCharacters);
  }

  if (chooseNumbers == true) {
    characterSetContents = characterSetContents.concat(numberCharacters);
  }

  if (chooseSpecial == true) {
    characterSetContents = characterSetContents.concat(specialCharacters);

  }

  // If they didn't pick any character sets, alert the user and exit.

  if (characterSetContents.length == 0) {
    alert("You didn't pick any character sets!");
    return;
  }

  //   console.log(characterSetContents);

  // Now I loop through my new array, grab a character and add it to a string.  I do this for whatever password length was input.

  var generatedPassword = "";

  for (var i = 0; i < pwLength; i++) {
    var randNum = Math.floor(Math.random() * characterSetContents.length);
    var passwordCharacters = characterSetContents[randNum];
    // console.log("Character selection: " + passwordCharacters);
    generatedPassword = generatedPassword + passwordCharacters;

  }
  
  // console.log("Paswword: " + generatedPassword);

  // Finally, I insert the gereated password to the box on the screen.

  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;




}

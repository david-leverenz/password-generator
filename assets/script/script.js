// Assignment Code
var generateBtn = document.querySelector("#generate");

// These are the four different arrays to pull characters from.

var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="]
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// I decided to put it all in one function.  I realize that I could break into multiple functions.

function generateIt() {

  // First I collect all of the inputs.

  var pwLength = parseInt(window.prompt("Specify password length (between 8 and 128)", 8));

  // If the user doesn't enter a number they need to start over.

  if (pwLength == null || pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Invalid input, please try again.");
    return;
  }

  // console.log("You chose a length of " + pwLength + ".");

  var chooseLower=false;
  if (confirm("Do you want lower case characters?")) {
    chooseLower = true;
  }

  // console.log("\n" + "Lower choice: " + chooseLower);

  var chooseUpper=false;
  if (confirm("Do you want upper case characters?")) {
    var chooseUpper = true;
  }

  // console.log("\n" + "Upper choice: " + chooseUpper);

  var chooseNumbers=false;
  if (confirm("Do you want numbers?")) {
    chooseNumbers = true;
  }

  // console.log("\n" + "Number choice: " + chooseNumbers);

  var chooseSpecial=false;
  if (confirm("Do you want special characters?")) {
    chooseSpecial = true;
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

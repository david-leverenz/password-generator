// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","_","+","="]
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var text;
var pwLength;
var chooseLower;
var chooseUpper;
var chooseNumbers;
var chooseSpecial;


function generateIt() {

  var pwLength = prompt("Specify password length (between 8 and 128)", 8);
  if (pwLength == null || pwLength < 8 || pwLength > 128 || pwLength == "Enter Here" || isNaN(pwLength)) {
    alert("Please enter a number is between 8 and 128.");
    generateIt();
  } else {
    text = "You chose a length of " + pwLength + ".";
  }
  console.log(text);

  if (confirm("Do you want lower case characters?")) {
    chooseLower=true;
  } else {
    chooseLower=false;;
  }
  console.log(chooseLower);

  if (confirm("Do you want upper case characters?")) {
    chooseUpper=true;
  } else {
    chooseUpper=false;;
  }
  console.log(chooseUpper);

   if (confirm("Do you want numbers?")) {
    choosenumbers=true;
  } else {
    choosenumbers=false;
  }
  console.log(chooseUpper);
 
  if (confirm("Do you want special characters?")) {
    chooseSpecial=true;
  } else {
    chooseSpecial=false;
  }
  console.log(chooseSpecial);

  // for (var i = 0; i < pwLength; i++) { 
  //   console.log(lowercharacters[i] + ".");
  // }
  var lowerSelect;

  var randNum = Math.floor(Math.random() *26);
  var lowerSelect = lowerCharacters[randNum];
  console.log("Lowercase selection: " + lowerSelect);

  var upperSelect;

  var randNum = Math.floor(Math.random() *26);
  var upperSelect = upperCharacters[randNum];
  console.log("Uppercase selection: " + upperSelect);

  var numberSelect;

  var randNum = Math.floor(Math.random() *10);
  var numberSelect = numberCharacters[randNum];
  console.log("Number selection: " + numberSelect);

  var specialSelect;

  var randNum = Math.floor(Math.random() *10);
  var specialSelect = specialCharacters[randNum];
  console.log("Number selection: " + specialSelect);

  console.log(lowerSelect+upperSelect+numberSelect+specialSelect);

}



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Special characters for the function created
const specialCharacters = "!?/@#$%^&*()><:[]{}+";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
const speacialCharacters = "!?/@#$%^&*()><:[]{}+";
const generateButton = document.getElementById("generateBtn")
generateBtn.addEventListener("click", writePassword)

// Prompts that come up after you click generate password
function generatePassword(){
  var passwordLength = prompt ("Please enter the number of characters you want for your new password. It must be more than 8 but less than 128");
  var numbers = confirm ("Do you want numbers in your password?");
  var upperCases = confirm ("Do you want uppercases in your password?");
  var lowerCases = confirm ("Do you want lowercases in your password?");
  var speacialCharacters = confirm ("Do you want special characters in your password?");

  // This is a minimum count for numbers, lowerCases, upperCases and specialCharacters 
  var minimumCount = 0;

  // Empty minimums for numbers, lowerCases and specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters ="";

  // Generator functions**
  var functionArray = {
    getNumbers: function(){
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function(){
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function(){
      return specialCharacters [Math.floor(Math.random() * specialCharacters.length)]
    }
  };

  // Checks to make sure user selected ok for all and uses empty minimums from above
  
  if (numbers === true){
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (lowerCases === true){
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }
  if (upperCases === true){
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (specialCharacters === true){
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

  // Empty string variable for the loop below
  var randomPasswordGenerated = "";

  // Loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++){
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  }

  // To make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated +=minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;

}
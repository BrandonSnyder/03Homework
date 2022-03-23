// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declaration of all possible characters in an Object
var characters = {
  lowerCaseLetters : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  
  upperCaseLetters : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  
  nums : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  specialCharacters : ['!','@','#','$','%','^','&','*','?','<','>'],
};
// Pool of Characters where the password will be pulled from
var poolOfChars = [];


// Declaration of function Wrap all code in this function
function generatePassword(){
//function to prompt number of characters return input as number
function numOfChars(){
  var lengthOfPassword = window.prompt('How many characters does your password need?', 'Enter a number between 1 and 30');
  return lengthOfPassword;
};
var lengthOfPassword = numOfChars();

// deciding characters return poolOfChars
function chooseCharTypes(){
  if(confirm("Click OK if you want to include lowercase letters in your password")){
    poolOfChars = poolOfChars.concat(characters.lowerCaseLetters);
  };

  if(confirm("Click OK if you want to include uppercase letters in your password")){
    poolOfChars = poolOfChars.concat(characters.upperCaseLetters);
  };
  if(confirm("Click OK if you want to include numbers in your password")){
    poolOfChars = poolOfChars.concat(characters.nums);
  };
  if(confirm("Click OK if you want to include special characters in your password")){
    poolOfChars = poolOfChars.concat(characters.specialCharacters);
  };
  return poolOfChars;
};
poolOfChars = chooseCharTypes();

console.log(poolOfChars)
console.log(lengthOfPassword)
// deciding on an index
// creating the password
var randomPassword = ""
for ( i = 0; i < lengthOfPassword ; i++ ) {
  randomPassword = randomPassword + poolOfChars[Math.floor(Math.random()*poolOfChars.length)];
};

console.log(randomPassword);


}


// test code call

generatePassword();
// end of test code call











// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

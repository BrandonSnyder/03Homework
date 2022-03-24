// Assignment Code
// Global Variables
var generateBtn = document.querySelector("#generate");
// Declaration of all possible characters in an Object
var characters = {
  lowerCaseLetters : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  
  upperCaseLetters : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  
  nums : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  specialCharacters : ['!','@','#','$','%','^','&','*','?','<','>'],
};
// stored decisions
var lowChars=false;
var upChars=false;
var numChars=false;
var specChars=false;
var lengthOfPassword = 0 ;
var randomPassword = ""; //Password 
var poolOfChars = []; // array of all characters to choose password from

// Declaration of function Wrap all code in this function
function generatePassword(){
//function to prompt number of characters return input as number
function numOfChars(){
  var lengthOfPassword = window.prompt('How many characters does your password need?', 'Enter a number between 8 and 128.');
  if(lengthOfPassword > 7 && lengthOfPassword < 129){
    return lengthOfPassword;
  }else{
    window.alert('You entered and invalid response please try again.')
    return numOfChars();
  }
};
lengthOfPassword = numOfChars();

// deciding characters return poolOfChars
function chooseCharTypes(){
  poolOfChars = []
  if(confirm("Click OK if you want to include lowercase letters in your password")){
    poolOfChars = poolOfChars.concat(characters.lowerCaseLetters);
    lowChars=true
  };

  if(confirm("Click OK if you want to include uppercase letters in your password")){
    poolOfChars = poolOfChars.concat(characters.upperCaseLetters);
    upChars=true;};
  
  if(confirm("Click OK if you want to include numbers in your password")){
    poolOfChars = poolOfChars.concat(characters.nums);
    numChars=true;
  };
  if(confirm("Click OK if you want to include special characters in your password")){
    poolOfChars = poolOfChars.concat(characters.specialCharacters);
    specChars= true;
  };
  if(!lowChars && !upChars && !numChars && !specChars){
    window.alert('you need to select at least 1 type of character to proceed!')
    return chooseCharTypes();
  }
  return poolOfChars;
};
poolOfChars = chooseCharTypes();


// creating the password based off of poolOfChars
function initPassword(){
  randomPassword=[]
for ( i = 0; i < lengthOfPassword ; i++ ) {
  randomPassword = randomPassword + poolOfChars[Math.floor(Math.random()*poolOfChars.length)];
};};

// Comparing string and array that are passed into function return true or calls initPassword to get a new password. 
function findCommonElement(string,array){
  var stringConverted = [];
//  converts a string to an array
  for( b = 0; b < string.length;b++){
    stringConverted[b]=string[b];
  }
// compares individual letter from string to array 
  for(i=0; i < stringConverted.length; i++){
    for(j=0; j < array.length; j++){
      if (array[i] === stringConverted[j]){
      return true;
    }else{
      initPassword();
    };
  }}};


function checkPassword(){
  // check for lower case letters
  if(lowChars){
    if(findCommonElement(randomPassword,characters.lowerCaseLetters)){
    }else{initPassword()
  };};

  if(upChars){
    if(findCommonElement(randomPassword,characters.upperCaseLetters)){
    }else{initPassword()
  };};
  if(numChars){
    if(findCommonElement(randomPassword,characters.nums)){
    }else{initPassword()
  };};
  if(specChars){
    if(findCommonElement(randomPassword,characters.specialCharacters)){
    }else{initPassword()
  };};
};

console.log(randomPassword);
initPassword()
checkPassword()

return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

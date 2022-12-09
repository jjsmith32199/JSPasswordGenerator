// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["!@#$%^&*()-=_+"];
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numbers = ['1234567890'];
var passwordLen;
var upperCase;
var lowerCase;

 function checkpassLen() {
   passwordLen = prompt('How long should we make password?(8-128 characters');
  if (passwordLen > 128){
    alert('Too many characters selected. Please select a number between 8 and 128');
    checkpassLen();
  } 
  if(passwordLen < 8){
    alert('Too few characters selected. Please select a number betweeen 8 and 128');
    checkpassLen();
  }
  else if (isNaN(passwordLen)){
    alert('Please enter a numerical value between 8 and 128')
    checkpassLen();
  }
}
 

 function specChar(){
  specialChar = prompt('Would you like to include special characters? Type y or n');
    if (specialChar === 'y') {
      console.log('Special characters selected');
    }
    else if (specialChar === 'n') { 
      console.log('No special characters included');
    }
    else {
    alert('Please enter y or n to choose');
    specChar()
    }
  }
function checknumber(){
  numbers = prompt('Would you like to include numbers? Type y or n');
    if(numbers === 'y'){
      console.log('Numbers selected');
    }
  else if (numbers === 'n'){
  console.log('No numbers selected');
} 
  else {
    alert('Please enter y or n to choose');
    checknumber()
  }
}
 function checkCaselow(){
  lowerCase = prompt('Do you want to include lower case letters? Type y or n');
    if(lowerCase === 'y'){
      console.log('Lower case letters selected');
    }
    else if ( lowerCase === 'n'){
    console.log('Lower case letters not selected');
  }
  else {
    alert('Please enter y or n to choose');
    checkCaselow()
  }
}
function checkCaseupper(){
  upperCase = prompt('Do you want to include upper case letters? Type y or n');
    if(lowerCase === 'y'){
      console.log('Upper case letters selected');
    }
    else if ( upperCase === 'n'){
    console.log('Upper case letters not selected');
  }
  else {
    alert('Please enter y or n to choose');
    checkCaseupper()
  }
}
 function generatePassword() {
  checkpassLen();
  specChar();
  checknumber();
  checkCaselow();
  checkCaseupper();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
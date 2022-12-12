let generateBtn = document.querySelector("#generate");
let specialChar = ["!@#$%^&*()-=_+"];
let lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
let upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let numbers = ['1234567890'];

 // generate button function was decalred and never defined
 // the variables that make up the password generator also needed to be defined
 // the following functions will present the end user with choice criteria for their password
function checkpassLen() {
 let passwordLen = parseInt(prompt('How long should we make password? (8-128 characters'));
 confirm('You have selected ' + passwordLen + ' characters.');
 if (passwordLen > 128){
 alert('Too many characters selected. Please select a number between 8 and 128.');
 checkpassLen();
 }
 else if(passwordLen < 8){
 alert('Too few characters selected. Please select a number betweeen 8 and 128.');
 checkpassLen();
   }
 else if (isNaN(passwordLen)){
 alert('Please enter a numerical value between 8 and 128.')
 checkpassLen();
  }
  else{
 
  }
  return passwordLen
}
function CheckspecChar(){
 let specialChar = prompt('Would you like to include special characters? Type y or n.');
 confirm("You have selected " + specialChar + " for special characters.");
 if (specialChar === 'y') {
 console.log('Special characters selected.');
     }
 else if (specialChar === 'n') { 
 console.log('No special characters included.');
     }
 else {
 alert('Please enter y or n to choose.');
 specChar()
 }
 return specialChar
}
function checknumber(){
 let numbers = prompt('Would you like to include numbers? Type y or n.');
 confirm("You have selected " + numbers + " for numbers.");
 if(numbers === 'y'){
 console.log('Numbers selected.');
  }
 else if (numbers === 'n'){
 console.log('No numbers selected.');
  }
 else {
 alert('Please enter y or n to choose.');
 checknumber()
 
  }
 return numbers
}
function checkCaselow(){
 let lowerCase = prompt('Do you want to include lower case letters? Type y or n.');
 confirm("You have selected " + lowerCase + " lower case letters.");
 if(lowerCase === 'y'){
 console.log('Lower case letters selected.');
  }
 else if ( lowerCase === 'n'){
 console.log('Lower case letters not selected.');
  }
 else {
 alert('Please enter y or n to choose.');
 checkCaselow()
 
  }
 return lowerCase
}
 function checkCaseupper(){
 let upperCase = prompt('Do you want to include upper case letters? Type y or n');
 confirm("You have selected " + upperCase + " lower case letters.");
 if(upperCase === 'y'){
 console.log('Upper case letters selected.');
  }
 else if ( upperCase === 'n'){
 console.log('Upper case letters not selected.');
  }
 else {
 alert('Please enter y or n to choose.');
 checkCaseupper()
  }
 return upperCase
}
 //Write password to the #password input
 function writePassword(){
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 
 passwordText.value = password;
 
}
// We need to store the choices selected and add them to the index for generation
 function generatePassword(){
 let choiceIndex= [checkpassLen(), CheckspecChar(), checkCaseupper(), checkCaselow(), checknumber()];
 let characters = "";
 let password = "";
  if (choiceIndex[1]){
    characters = characters + specialChar;
  }
  if (choiceIndex[2]){
    characters = characters + upperCase;
  }
  if (choiceIndex[3]){
    characters = characters + lowerCase;
  }
  if (choiceIndex[4]){
    characters = characters + numbers;
  }
 for(var i = 0; i < choiceIndex[0]; i++) {
 let randomIndex = Math.floor(Math.random() * characters.length);  
 password = password + characters[randomIndex];
 }
 return password;
 }
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

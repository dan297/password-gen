var generatePassword = function() {

  var passwordLength = window.prompt("How long do you want your password? 8-128 characters.");
  for (var password = 0; password < passwordLength; password++){
  }
  
  if (passwordLength >= 8 && passwordLength < 129){
    var specialCharactor = window.confirm("Do you want special characters in your password? EX: !@#$%");
    var lowerCase = window.confirm("Do you want your password to contain lowercase lettes?");
    var passwordNumber = window.confirm("Do you want your password to contain numbers?");
    var upperCase = window.confirm("Do you want your password to contain uppercase letters?");

    if (lowerCase) {
      (Math.random() * 10);
    }

    if (specialCharactor) {
      (Math.random() * 10);
    }

    if (passwordNumber) {      
    (Math.random() * 10);
    }

    if (upperCase) {
      (Math.random() * 10);
    }
 
  else {
    window.alert("Please pick a password length between 8-128");
    generatePassword();
  }}}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
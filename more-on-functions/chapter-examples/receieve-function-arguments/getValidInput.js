const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    // Prompt the user, using the prompt string that was passed
    let userInput = input.question(prompt);

    // Call the boolean function isValid to check the input
    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// A boolean function for validating input
// let isEven = function(n) {
//   return Number(n) % 2 === 0;
// };

// console.log(getValidInput('Enter an even number:', isEven));

// let isValidPassword = function(password) {

//   // Passwords should have at least 8 characters
//   if (password.length < 8) {
//   return false;
//   }

//   return true;
// };

// console.log(getValidInput('Create a password:', isValidPassword));

// TODO 1: write a validator 
// that ensures input starts with "a"

// let isFirstLetterA = function(word) {

//   // word should start with a
//  return word.toLowerCase().slice(0, 1) === 'a';
// };
// console.log(getValidInput('Enter a word: ', isFirstLetterA));

// TODO 2: write a validator 
// that ensures input is a vowel

let isFirstLetterVowel = function(word) {

  // word should start with vowel
  vowel = ['a', 'e', 'i', 'o', 'u']
  for (i = 0; i < vowel.length; i++) {
    if (vowel[i] === word.toLowerCase().slice(0, 1)) {
    return true;
  }
}
 return false;
};
console.log(getValidInput('Enter a word that starts with a vowel: ', isFirstLetterVowel));

// Be sure to test your code!

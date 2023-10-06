// Import the modules exported from practiceExports.js below:
const checkValue = require('./practiceExports');

// console.log(typeof checkIfPalindrome);
// console.log(checkIfPalindrome('train'));
// console.log(checkIfPalindrome('zerorez'));

const practice = require('./practiceExports.js');

console.log(typeof practice);
console.log(practice);

let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++){
    console.log(practice.randomArrayElement(arr));
}
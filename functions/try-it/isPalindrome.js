// function reverse(str) {
//    return str.split('').reverse().join('');
// }

// function isPalindrome(str) {
//    return reverse(str) === str;
// }

// not good example, want function to do one thing not two
function isPalindrome(str) {
   let reversed = str.split('').reverse().join('');
   return reversed === str;
}

let str = "zerlorez";
console.log(isPalindrome(str));
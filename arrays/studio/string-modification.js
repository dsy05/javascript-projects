const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str1 = str.slice(3,10)
let str2 = str.slice(0,3);
console.log(str1+str2);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`the original string: ${str} has had the first three letters sliced and added to the end to form: ${str1+str2}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let question = Number(input.question(`\nHow many letters would you like to cut from ${str} and have relocated to the end? `));

//3) Add validation to your code to deal with user inputs that are longer than the word. 
//In such cases, default to moving 3 characters. Also, the template literal should note the error.

if ((question <= (str.length-1) && (question >= 1))){
    firstStr = str.slice(question,10);
    secondStr = str.slice(0,question);
    console.log(`\nYou have sliced the original string: ${str} into ${firstStr+secondStr}`);
}
    else {
       console.log(`\nThe original string: ${str} by default has only had the first three letters sliced and added to the end to form: ${str1+str2}
because ${str} is ${str.length} charactres long and you tried to either cut less than one character or tried to cut the length of the word or more.`)
   }

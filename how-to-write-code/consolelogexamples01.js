
/*
console.log('Hello, JavaScript.');
console.log(2001);
console.log("What","do","commas","do?");
console.log("Does", "adding",      "\nspace", "\tmatter?");
console.log('Launch' + 'Code');
console.log("LaunchCode was founded in", 2013);
console.log('Coding Rocks')
console.log(String(17));
console.log(String(123.45));
console.log(typeof String(123.45));
console.log(Number('3 3'));
*/
//let programmingLanguage = "JavaScript";

//let message = "What's up, Doc?";
/*
let n = 17;
let pi = 3.14159;
console.log(message);
console.log(n);
console.log(pi);


console.log(typeof message);
console.log(typeof n);
console.log(typeof pi);
*/


//let day = "Thursday";
//day = 32.5;
//day = 19;
//console.log(day);

/*

//let radiusOfCircle = 5;
const pi = 3.14;
//let areaOfCircle = pi * radiusOfCircle ** 2;
console.log(areaOfCircle);

console.log(1 + 1);
//let sum = 1 + 2;
console.log(sum);

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 ** 3);
console.log(3 ** 2);

//let minutes = 645;
//let hours = minutes / 60;
//console.log(hours);

// the right-most ** operator is applied first
console.log(2 ** 3 ** 2)


// use parentheses to force the order you want
console.log((2 ** 3) ** 2)
*/
//console.log (16 - 2 * 5 / 3 + 1)
//console.log(1 + 5 % 3);
/*
console.log(2 ** 2 ** 3 * 3)

console.log(1 + 1);
console.log("1" + "1");

//let x = 1;
//x = x + 1;

//console.log(x);

let x = 1;
x += 1;

console.log(x);
*/


// const input = require('readline-sync');

// let name = input.question("Enter your name: ");

// console.log("Hello, " + name + name + "!");

/*
const input = require('readline-sync');

let firstname = input.question("Enter your first name: ");
let lastname = input.question("Enter your last name: ");

console.log("First Name: " + firstname);
console.log("Last Name: " + lastname);
console.log("Last, First: " + lastname + ", " + firstname);
*/
/*
const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);
*/
/*
const input = require('readline-sync');

let num1 = Number(input.question("Enter a number: "));
let num2 = Number(input.question("Enter another number: "));

console.log(num1 + num2);

*/

//Chapter 5
/*
console.log(true);
console.log(typeof true);
console.log(typeof false);

console.log(typeof true);
console.log(typeof "true");

console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));
*/
//console.log(4 == "4");
//console.log(5 == 6);
//console.log(true == "true");

//console.log(7 > 5 && 5 > 3);
//console.log(7 > 5 && 2 > 3);
//console.log(2 > 3 && 'dog' === 'cat');

//console.log(7 > 5 || 5 > 3);
//console.log(7 > 5 || 2 > 3);
//console.log(2 > 3 || 'dog' === 'cat');

//console.log(!true);
//console.log(!false);

//console.log( !(5 > 7) );
//console.log( !('dog' === 'cat') );


//console.log (4 < 3 || 2 < 3);

//let billHasBeenPaid = false;

//if (!billHasBeenPaid) {
//   console.log("Your bill is due soon!");
//}
/*
let num = 4
if (num % 2 === 0 && num > 3) {
    console.log(num, "is even");
    console.log(num, "is greater than 3");
 }

 let billHasBeenPaid = true;

if (!billHasBeenPaid) {
   console.log("Your bill is due soon!");
} else {
   console.log("Your payments are up to date.");
}

let x = 30;
let y = 30;

if (x > y) {
   console.log("x is greater than y");
} else if (x < y) {
   console.log("x is less than y");
} else {
   console.log("x and y are equal");
}

let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}


let num = 7;

if (num % 2 === 0) {
   console.log("EVEN");
}

if (num > 0) {
   console.log("POSITIVE");
}


let num = 11;

if (num % 2 === 0) {
    console.log("EVEN");

    if (num > 0) {
        console.log("POSITIVE");
    }
}
*/

let num = 9;

if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}
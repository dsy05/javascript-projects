let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

//let numDig = num.toString();

console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let decimal = 100.001
// let decimalDig = decimal.toString();
// let decimalRemoved = decimalDig.slice(0,3) + decimalDig.slice (4,7);
// console.log(decimalRemoved.length)
console.log(String(decimal).length-1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

expNum = 56869.15898
if (String(expNum).includes('.')) {
    console.log(String(expNum).length-1);
}
    else {
        console.log(String(expNum).length);
    }
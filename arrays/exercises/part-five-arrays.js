let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split()); // nothing
console.log(str.split('e')); //splits at the e's
console.log(str.split(' ')); //slplits at the spaces
console.log(str.split('')); //splits every character
console.log(str); // unaltered

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join()); // joins with comma
console.log(arr.join('a')); // joins by adding an a
console.log(arr.join(' ')); // joins by adding a space
console.log(arr.join('')); // joins 
console.log(arr); // unaltered

//3) Do split or join change the original string/array?

//no

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, 
//and then combine the contents into a new string.

let cargoHold = "water,space suits,food,plasma sword,batteries";
let newCargoHold = [];

newCargoHold = cargoHold.split(',').sort().join(',');
console.log(newCargoHold);
console.log(cargoHold.split(',').sort().join(','));

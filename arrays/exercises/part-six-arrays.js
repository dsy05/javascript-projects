//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];

table.push(element1, element2, element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1]);
console.log(table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2],table[1][0],table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. 
//Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let gasElement = [[1, "Hydrogen", "H", 1.008],[2, "Helium", "He", 4.003],[7, "Nitrogen", "N", 14.007]];
let solidElement = [[74, "Tungsten", "W", 183.84],[78, "Platinum", "Pt", 195.287],[78, "Gold", "Au", 196.967]];
let liquidElement = [[35, "Bromine", "Br", 79.904],[80, "Mercury", "Hg", 200.592]];

let table3d = [];

table3d.push(gasElement, solidElement, liquidElement);
console.log(table3d);

console.log(table3d[0][0][0],table3d[1][1][1],table3d[1][2][2],table3d[2][1][3]);
console.log(table3d[0][1][1],table3d[1][2][2],table3d[2][1][2],table3d[2][1][2]);
console.log(table3d[0][2][2],table3d[1][2][3],table3d[2][1][3],table3d[2][0][3]);
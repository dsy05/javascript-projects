const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let cabinetArray1 = food.split(',').sort();
let cabinetArray2 = equipment.split(',').sort();
let cabinetArray3 = pets.split(',').sort();
let cabinetArray4 = sleepAids.split(',').sort();
// console.log(cabinetArray1);
// console.log(cabinetArray2);
// console.log(cabinetArray3);
// console.log(cabinetArray4);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(cabinetArray1, cabinetArray2, cabinetArray3, cabinetArray4);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let cargoHoldQuery = Number(input.question(`\nSelect a cabinet from the cargo hold (0 - 3): `));
let cargoHoldItem = (input.question(`\nWhat item are you serching for? `).toLowerCase());

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (cargoHoldQuery < 0 || cargoHoldQuery > 3 ){
    console.log(`Cabinet ${cargoHoldQuery} is an invalid number`);
}
    else {
    console.log(`You selected cabinet ${cargoHoldQuery} which contain the following items: ${cargoHold[cargoHoldQuery]}`);
    
    if (cargoHold[cargoHoldQuery].includes(cargoHoldItem)) {
        console.log(`Cabinet ${cargoHoldQuery} does contain : ${cargoHoldItem}`);
    }
        else {
        console.log(`Cabinet ${cargoHoldQuery} does not contain ${cargoHoldItem}`); 
        }
    }
    

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

// let cargoHoldItemQuery1 = Number(input.question(`\nSelect a cabinet from the cargo hold (0 - 3): `));
// let cargoHoldItemQuery2 = (input.question(`\nWhat item are you serching for? `).toLowerCase());
// let cargoHoldSearch = (cargoHold[cargoHoldItemQuery1].includes(cargoHoldItemQuery2));

// if (cargoHoldSearch){
//     console.log(`Cabinet ${cargoHoldItemQuery1} does contain : ${cargoHoldItemQuery2}`);
// }
//     else {
//     console.log(`Cabinet ${cargoHoldItemQuery1} does not contain ${cargoHoldItemQuery2}`); 
    // }
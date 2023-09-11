// Declare and assign the variables below

const input = require('readline-sync');

let shuttleName = input.question("Enter name of space shuttle: ");
let shuttleSpeedMph = 17500;
let distanceMarsKm = 225000000;
let distanceMoonKm = 384400;
const milesperkilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log (typeof shuttleName);
console.log (typeof shuttleSpeedMph);
console.log (typeof distanceMarsKm);
console.log (typeof distanceMoonKm);

// Calculate a space mission below

// calculate distance to mars in miles
let milesToMars = distanceMarsKm * milesperkilometer;
console.log("Distance to mars in miles: " + milesToMars);

// calculate hours to mars
let hoursToMars = milesToMars / shuttleSpeedMph;
console.log("Hours to mars: " + hoursToMars);

// caculate days to mars
let daysToMars = hoursToMars / 24;
console.log("Days to mars: " + daysToMars);

// Print the results of the space mission calculations below

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below

// calculate distance to the moon in miles
let milesToMoon = distanceMoonKm * milesperkilometer;
console.log("Distance to moon in miles: " + milesToMoon);

// calculate hours to moon
let hoursToMoon = milesToMoon / shuttleSpeedMph;
console.log("Hours to moon: " + hoursToMoon);

// caculate days to moon
let daysToMoon = hoursToMoon / 24;
console.log("Days to moon: " + daysToMoon);

// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + daysToMoon + " to reach the Moon.");

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*11)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

animalsArray = [superChimpOne, superChimpTwo, salamander, dog, waterBear]

// Print out the relevant information about each animal.

let crewReport = function(arr) {
   let report = "";
   for (i = 0; i < arr.length; i++) {
      report += `${arr[i].name} is a ${arr[i].species}. They are ${arr[i].age} years old and ${arr[i].mass} kilograms. Their ID is ${arr[i].astronautID}.\n`
   }
   return report;
}
console.log(crewReport(animalsArray));

// Start an animal race!

let fitnessTest = function(arr) {
   let animalMoves = [], totalSteps, numTurns;
   for (i = 0; i < arr.length; i++) {
      totalSteps = 0;
      numTurns = 0;
      while (totalSteps < 20) {
         totalSteps += arr[i].move();
         numTurns++;
      }
      animalMoves.push(`${arr[i].name} took ${numTurns} turns to take 20 steps.`)
   }
   return animalMoves;
}
console.log(`${fitnessTest(animalsArray).join('\n')}`);


   


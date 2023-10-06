// Code your crewMass function here:
function crewMass(crewArray) {
  // let unRoundedMass = 0

  // for (let i = 0; i < crewArray.length; i++) {
  //   unRoundedMass += crewArray[i].mass;
  // }
  // return Math.round(unRoundedMass * 10)/10; // with let and for loop
    return Math.round((crewArray[0].mass + crewArray[1].mass + crewArray[2].mass)*10)/10;
  //return Math.round(crewArray.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)*10)/10;
}

// Code your fuelRequired function here:
// function fuelRequired(crewMassKg) {
//   return (75000 + crewMassKg) * 9.5;
// }

function fuelRequired(crewMassKg, crewArray) {
  let safetyMargin = 0;

  for (let i = 0; i < crewArray.length; i++) {
    if (crewArray[i].species === "dog" || crewArray[i].species === "cat") {
      safetyMargin += 200;
    } else {
      safetyMargin += 100;
    }
  }

  return Math.ceil((75000 + crewMassKg + safetyMargin) * 9.5);
}


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 let crewMassArray = [candidateB.mass, candidateD.mass, candidateF.mass]
 

 console.log(`the mission has a launch mass of ${crewMass(crew) + 75000} and requires ${fuelRequired(crewMass(crew), crew)} kg of fuel.`);

 //if using reduce function
 //console.log(`the mission has a launch mass of ${crewMass(crewMassArray) + 75000} and requires ${fuelRequired(crewMass(crewMassArray), crew)} kg of fuel.`);
 
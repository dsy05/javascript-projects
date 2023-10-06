// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}
//console.log(orbitCircumference(5000));

// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, speed = 28000) {
  distance = orbitCircumference(radius);
  let totalTime = Math.round((distance / speed) * numOrbits * 100)/100;
  //return Math.round((orbitCircumference(radius)/speed) * numOrbits * 100)/100;
  return totalTime;
}
//console.log(missionDuration(5));
//console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet and it will take ${missionDuration(5)} hours to complete.`)

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idNumber) {
  return idNumber[Math.floor(Math.random()*idNumber.length)];
};

// Code your oxygenExpended function here:

function oxygenExpended(crewMember, radius, speed) {
  let tripDuration = missionDuration(3, radius, speed);
  let o2Consumed = Math.round(crewMember.o2Used(tripDuration)*1000)/1000;

  return `${crewMember.name} will perform the spacewalk, which will last ${tripDuration} hours and require ${o2Consumed} kg of oxygen.`;
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 let crewIDs = [crew[0].astronautID, crew[1].astronautID, crew[2].astronautID,];

//  function pickTheWalker(crewArray, idArray) { // random crew
//   let output;
//   let choosenID = selectRandomEntry(idArray);

//   for (let i = 0; i < crewArray.length; i++){
//     if (crewArray[i].astronautID === choosenID) {
//       output = crewArray[i];
//     }
//   }
//   return output;
//  }

function pickTheWalker(crewArray) {   // lowest o2 used
  let indexOfMinO2Use = 0;

  for (let i = 0; i < crewArray.length; i++){
    if (crewArray[i].o2Used(5) < crewArray[indexOfMinO2Use].o2Used(5)) {
      indexOfMinO2Use = i;
    }
  }
  return crewArray[indexOfMinO2Use];
}

 let theWalker = pickTheWalker(crew, crewIDs);
 console.log(oxygenExpended(theWalker, 5000, 35000));

 
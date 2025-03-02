// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:

function selectRandomEntry(idNumber) {
  //let selectedIDNumber = idNumber[Math.floor(Math.random()*idNumber.length)];
  return idNumber[Math.floor(Math.random()*idNumber.length)];
};

//console.log(selectRandomEntry(idNumbers)); 

// Code your buildCrewArray function here:

let buildCrewArray = function(ids, candidates) { 
  //selectedIDs(selectedCrewId);
  let crewNameArray = [];
  for (let i = 0; i < candidates.length; i++) {
      if (ids.includes(candidates[i].astronautID)) {
      crewNameArray.push(candidates[i]);
      }
    }
    return crewNameArray;
  }

//function selectedIDs(idArray) {
  let selectedIDArray = [];
  for (let i = 0; i < 3; i++) {
    let crewMember = selectRandomEntry(idNumbers);
    while (selectedIDArray.includes(crewMember)) {
       crewMember = selectRandomEntry(idNumbers);
      }
  selectedIDArray.push(crewMember);
  }
  
//}

//checking if selecting 3 different crew
console.log(selectedIDArray);

console.log(buildCrewArray(selectedIDArray, animals));
let theCrew = buildCrewArray(selectedIDArray, animals)
// Code your template literal and console.log statements:
console.log(`${theCrew[0].name}, ${theCrew[1].name}, and ${theCrew[2].name} are going to space!`);

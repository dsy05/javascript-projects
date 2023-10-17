//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScores(additionalScore) {
        this.scores.push(additionalScore);
    }
    average(){
        let averageScore = 0;
        for (let i = 0; i < this.scores.length; i++){
            averageScore += this.scores[i];
        }
        return Math.round((averageScore / this.scores.length)*10)/10;
    }
    status(){
        if (this.average() >= 90) {
            return 'Accepted' ;
        } else if (this.average() >= 80) {
            return 'Reserve';
        } else if (this.average() >= 70) {
            return 'Probationary';
        } else if (this.average() < 70) {
            return 'Rejected'
        }
    }
}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad gator', 225, [75, 78, 62]);
console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScores(83);
console.log(bubbaBear.scores);

console.log(merryMaltese.average());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

let candidateArray = [bubbaBear, merryMaltese, gladGator];
for (let i = 0; i < candidateArray.length; i++) {
    console.log(`\n${candidateArray[i].name} earned an average test score of ${candidateArray[i].average()}% and has a status of ${candidateArray[i].status()}.`);
}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? 2 How many to reach Accepted? 6 Remember, scores cannot exceed 100%.
let reserveCount = 0;
while (gladGator.status() !== 'Reserve') {
    gladGator.addScores(100);
    reserveCount++;
}
console.log(`\nIt took ${gladGator.name}, ${reserveCount} additional perfect scores to get to Reserve status.`);
console.log(gladGator.scores);

let acceptedCount = 0;
while (gladGator.status() !== 'Accepted') {
    gladGator.addScores(100);
    acceptedCount++;
}
console.log(`\nIt took ${gladGator.name}, ${acceptedCount} additional perfect scores to get to Accepted status.`);
console.log(gladGator.scores);
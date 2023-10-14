//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);
let hippo = new Astronaut('Hippo', 25, 1500);

console.log(fox);
console.log(fox.age, fox.color);
console.log(hippo);
console.log(hippo.age, hippo.color);

fox.age = 9;
fox.color = 'red';
hippo.age = 15;
hippo.color = 'brown';


console.log(fox);
console.log(fox.age, fox.color);
console.log(hippo);
console.log(hippo.age, hippo.color);

//Try modifying or adding properties below.

fox.age = 16;
fox.id = 1234;
hippo.age = 20;
hippo.id = 5678;

console.log(fox);
console.log(fox.age, fox.id);
console.log(hippo);
console.log(hippo.age, hippo.id);
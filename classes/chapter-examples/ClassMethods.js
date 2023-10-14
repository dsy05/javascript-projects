// Here we assign the method inside the constructor
class AstronautI {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.reportStats = function() {
       let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
         return stats;
     }
   }
 }
 
 // Here we assign the method outside of the constructor
 class AstronautO {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
 
   reportStats() {
     let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
     return stats;
   }
 }
 
 let fox = new AstronautO('Fox', 7, 12);

 console.log(`outside constructor`);
 console.log(fox);
 console.log(fox.reportStats());
 
 let hippo = new AstronautI('Hippo', 25, 1000);
 
 console.log(`inside constructor`);
 console.log(hippo);
 console.log(hippo.reportStats());

//Exercise #1: Construct for loops that accomplish the following tasks:
//  a. Print the numbers 0 - 20, one number per line.
for (let i = 0; i < 21; i++) {
  console.log(i);
  }
//  b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i < 30; i = i + 2) {
  console.log(i);
  }

//  c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
for (let i = 12; i > -15; i-=2) {
  console.log(i);
  }

//  d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//let multiples = "";
for (let i = 361; i > -13; i--) {
  if ((i%3)===0){
    console.log(i);
  } else {
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/
let string = "LaunchCode";
let array = [1, 5, 'LC101', 'blue', 42];

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.*/
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  }

//b. Print each character of the string - in reverse order - to a new line. 
let reversedString = "";
for (let i = 0; i < string.length; i++) {
   reversedString = string[i] + reversedString;
   }
  console.log(reversedString);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.*/
  let sortArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
  let evenArray = [];
  let oddArray = [];

  for (let i = 0; i < sortArray.length; i++ ){
    if ((sortArray[i] % 2) === 0){
      evenArray.push(sortArray[i]);
    }
    else {
      oddArray.push(sortArray[i]);
    }
  }

  //b. Print the arrays to confirm the results.
  console.log(evenArray);
  console.log(oddArray);
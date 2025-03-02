let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

let newHoldCabinet = [];
newHoldCabinet = holdCabinet1.concat(holdCabinet2);
console.log(newHoldCabinet);
console.log(holdCabinet1);

//concat does not alter

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

holdCabinet1.slice(2,4)
console.log(holdCabinet1.slice(2,4));
console.log(holdCabinet1);

holdCabinet2.slice(3,5)
console.log(holdCabinet2.slice(3,5));
console.log(holdCabinet2);

// slice does not alter 

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

holdCabinet1.reverse(); //alters
console.log(holdCabinet1);

holdCabinet2.sort(); //alters
console.log(holdCabinet2);
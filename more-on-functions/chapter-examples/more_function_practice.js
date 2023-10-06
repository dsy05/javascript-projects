
// let fileLogger = function(msg) {

//     // Put the message in a file
// }

// function logError(msg, logger) {
//     let errorMsg = 'ERROR: ' + msg;
//     logger(errorMsg);
// }

// logError('Something broke!', fileLogger);

// function callMe(func) {
//     func();
// }

// callMe("Al");

// let arr = ['L', 'C', '1', '0', '1'];
// let newString = '';

// for (i = 0; i < arr.length; i++){
//     newString = newString + arr[i];
// }

// console.log(newString);
// console.log(arr);

// let arr = ['L', 'C', '1', '0', '1'];
// let newString = '';

// while (arr.length > 0){
//     newString += arr[0];
//     arr.shift();
// }
// console.log(newString);
// console.log(arr);

// function combineEntries(arrayName){
//     if (arrayName.length <= 1){
//         return arrayName[0];
//         //end recursion
//     } else {
//         return arrayName[0]+combineEntries(arrayName.slice(1));
//     }

// }
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
for (i = 0; i < cargoHold.length; i++) {
    if (i === "space suits") {
      cargoHold.splice(i, 1, 'halloween costume');
      return i;
    } else if (a[i] === "gold") {
      //cargoHold.splice(i, 1, 'halloween costume');
      return a[i];
    }
}
//cargoHold.splice(1, 1, 'halloween costume');
console.log(cargoHold);
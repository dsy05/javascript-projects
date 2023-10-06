// function removeI(arr) {
//     if (arr.indexOf('i') === -1 ){
//       return arr;
//     } else {
//       arr.splice(arr.indexOf('i'),1);
//       return removeI(arr);
//     }
// };

// let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

// console.log(removeI(arrayToChange));

let removeI = function removeI(arr) {
  if (arr.indexOf('i') === -1 ){
    return arr;
  } else {
    arrayToChange.splice(arr.indexOf('i'),1, 'help');
    return arr.splice(arr.indexOf('i'),1);
  }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));
console.log(arrayToChange);

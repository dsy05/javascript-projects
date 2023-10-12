// let a = 0;
// console.log(a);

// function coolFunction() {
//     let b = 2;
//     console.log(`a = ${a}, b = ${b}.`);
//     return a + b;
// }

// a += 1;
// console.log(a);

// coolFunction();
// console.log(b);

// let a = 0;

// function coolFunction() {
//     let b = 2;
//     return a + b;
// }

// function coolerFunction() {
//     let c = 5;
//     c += coolFunction();
//     return c;
// }

// console.log(coolFunction());
// console.log(coolerFunction());

function myFunction(n) {
    let a = 100;
    return a + n;
}

let x = 0;

x = myFunction(x);
console.log(x)
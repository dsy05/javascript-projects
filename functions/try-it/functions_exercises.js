const input = require('readline-sync');

function makeLine(size) {
    let printedLineSize = '';

    if (question.length === 1) {
        for (let i = 0; i < size; i++) {
            printedLineSize = question + printedLineSize;
        } 
    } else {
            for (let i = 0; i < size; i++) {
                printedLineSize = '#' + printedLineSize;
            }
        }
    return printedLineSize;
}

// function makeSquare(height) {
//     let printedSquare = '';
//     for (let i = 1; i <= height; i++) {
//         printedSquare = '\n' + makeLine(size) + printedSquare;
//     }
//     return printedSquare;
// }

// function makeRectangle(width, height) {
//     let printedRectangle = '';
//     for (let i = 0; i < height; i++) {
//         printedRectangle = printedRectangle + makeLine(width) + '\n';
//     }
//     return printedRectangle.slice(0, -1);
// }

// function makeDownwardStairs(height) {
//     let printedDownwardStairs = '';
//     for (let i = 0 ; i < height; i++) {
//         printedDownwardStairs = printedDownwardStairs + makeLine(i+1) + '\n';
//     }
//     return printedDownwardStairs;
// }

function makeSpaceLine(numSpaces, numChars) {
    let addedSpaces = makeLine(numChars);
    for (let i = 0 ; i < numSpaces; i++) {
         addedSpaces = ' ' + addedSpaces + ' ';
    }
    return addedSpaces;
}

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = '';
    for (let i = 0 ; i < height; i++) {
        isoscelesTriangle = isoscelesTriangle + '\n' + (makeSpaceLine(height-i+1, 2*i+1));
     }
     return isoscelesTriangle;
}

function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height) + '\n' + makeIsoscelesTriangle(height).split('').reverse().join('');
    return diamond;
}

let question = input.question(`\n What Character would you like to use? `);
//console.log(makeLine(5));
//console.log(makeSquare(5));
//console.log(makeRectangle(5, 3));
//console.log(makeDownwardStairs(5));
//console.log(makeSpaceLine(3, 5));
//console.log(makeIsoscelesTriangle(5));
console.log(makeDiamond(5));


const input = require('readline-sync');

function makeLine(size) {
    let printedLineSize = '';
    if (question.length === 1) {
        for (let i = 0; i < size; i++) {
            printedLineSize += question;
        } 
    } else {
            for (let i = 0; i < size; i++) {
                printedLineSize += '#';
            }
        }
    return printedLineSize;
}

// function makeSquare(size) {
//     let printedSquare = '';
//     for (let i = 0; i < size; i++) {
//         if (i === size - 1) {
//             printedSquare += makeLine(size) + '\n';
//         } else {
//            printedSquare += makeLine(size) + '\n';
//         }
//     }
//     return printedSquare.slice(0, -1);
// }

// function makeSquare(size) {
//     return makeRectangle (size, size);                       
// }

// function makeRectangle(width, height) {
//     let printedRectangle = '';
//     for (let i = 0; i < height; i++) {
//         printedRectangle += makeLine(width) + '\n';
//     }
//     return printedRectangle.slice(0, -1);
// }

// function makeDownwardStairs(height) {
//     let printedDownwardStairs = '';
//     for (let i = 0 ; i < height; i++) {
//         printedDownwardStairs += makeLine(i+1) + '\n';
//     }
//     return printedDownwardStairs.slice(0, -1);
// }

function makeSpaceLine(numSpaces, numChars) {
    //let addedSpaces = makeLine(numChars);
    let spaces = '';
    for (let i = 0 ; i < numSpaces; i++) {
         //addedSpaces = ' ' + addedSpaces + ' ';
         spaces += ' ';
    }
    let chars = makeLine(numChars);
    return `${spaces}${chars}${spaces}`;
}

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = '';
    for (let i = 0 ; i < height; i++) {
        isoscelesTriangle += `${makeSpaceLine(height-i-1, 2*i+1)}\n`;
     }
     return isoscelesTriangle.slice(0, -1);
}

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}
function makeDiamond(height) {
    //let diamond = makeIsoscelesTriangle(height) + '\n' + makeIsoscelesTriangle(height).split('').reverse().join('');
    let topHalf = makeIsoscelesTriangle(height);
    let bottomHalf = reverse(topHalf);

    return `${topHalf.slice(0, -(height * 2))}\n${bottomHalf.slice(height * 2)}`;
}

let question = input.question(`\n What Character would you like to use? `);
//console.log(makeLine(5));
//console.log(makeSquare(5));
//console.log(makeRectangle(5, 3));
//console.log(makeDownwardStairs(5));
//console.log(makeSpaceLine(3, 5));
//console.log(makeIsoscelesTriangle(5));
console.log(makeDiamond(8));


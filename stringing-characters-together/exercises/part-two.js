//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

console.log("First Print Current State: ");
console.log(dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

console.log("\nEnds Trimmed: ");
//console.log(dna.trim());
let dnaTrimmed = dna.trim();
console.log(dnaTrimmed.trim());

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log("\nAll letters UPPERCASE: ");
//console.log(dna.toUpperCase());
let dnaUpper = dna.toUpperCase();
console.log(dnaUpper.toUpperCase())

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

//dna = dna.trim() 
//dna = dna.toUpperCase();
dna = dna.trim().toUpperCase();
console.log("\nDNA trimmed and UPPERCASE: ");
console.log(dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.

let dnaTwoAlter = dnaTwo.replace("GCT", "AGG");
console.log("\nDNA Altered GCT to AGG: ")
console.log(dnaTwoAlter);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if (dnaTwo.indexOf('CAT') !== -1){
    console.log("\nCAT gene found");
}
    else {
        console.log("\nCAT gene not found");
    }
//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

console.log(dnaTwo.slice(16,19));

//4) Use a template literal to print, "The DNA strand is ___ characters long."

console.log(`\nThe DNA strand is ${dnaTwo.length} characters long.`);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.

//let taco = dnaTwo.slice(4,8).toLowerCase().replace("-", "o");
//let cat = dnaTwo.slice(40,43).toLowerCase();
//console.log(`Changed the DNA sequence to: ${taco} ${cat}, using methods and displaying using template literals.`);
console.log(`\nChanged the DNA sequence to: ${dnaTwo.slice(4,8).toLowerCase().replace("-", "o")} ${dnaTwo.slice(40,43).toLowerCase()}, 
using methods and displaying using template literals.`);

console.log(`\nChanged the DNA sequence to: ${dnaTwo.slice(4,7).toLowerCase()}o ${dnaTwo.slice(dnaTwo.indexOf('CAT'),dnaTwo.indexOf('CAT')+3).toLowerCase()}, 
using methods and displaying using template literals.`);

//console.log(dnaTwo.slice(dnaTwo.indexOf('CAT'),dnaTwo.indexOf('CAT')+3).toLowerCase());
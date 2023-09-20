let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];


	// console.log(strings);
	// console.log(strings[0].includes(','));
	// console.log(strings[1].includes(";"));
	// console.log(strings[2].includes(" "));
	// console.log(strings[3].includes(", "));
	// console.log(strings[0]);
	// console.log(strings[1]);
	// console.log(strings[2]);
	// console.log(strings[3]);


function reverseCommas(protoArray) {
	//TODO: 1. create and instantiate your variables.

	let check = protoArray.includes(",");
	let output;
	let convertedArray;
	//TODO: 2. write the code required for this step

	if (check) {
		convertedArray = (protoArray.split(",").reverse().join(","));
		output =convertedArray;
	} else {
	}
	
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash(protoArray) {

	let check = protoArray.includes(";");
	let output;
	let convertedArray;
	//TODO: write the code required for this step

	if (check) {
		convertedArray = (protoArray.split(';').sort().join('-'));
		output = convertedArray;
	} else {
	}
	  
	return output;
}

//4)
function reverseSpaces(protoArray) {

	let check = protoArray.includes(" ");
	let output;
	let convertedArray;
  //TODO: write the code required for this step

 	 if (check) {
		convertedArray = (protoArray.split(' ').sort().reverse().join(' '));
		output = convertedArray
		} else {
	check = false;
		}
		
	return output;
}

//5)
function commaSpace(protoArray) {

	let check = protoArray.includes(", ");
	let output;
	let convertedArray;
	//TODO: write the code required for this step

	if (check) {
		convertedArray = protoArray.split(', ').reverse().join(',');
		output = convertedArray;
		} else {
		}

	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};

// let emptyArray = [];
// console.log(emptyArray.length);

// let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
// console.log(programmingLanguages.length);

// //multi lines,

// // //let javaScriptFrameworks = [
// //     "React",
// //     "Angular",
// //     "Ember",
// //     "Vue"
// // ];

// let grabBag = ["A string value", true, 99, 105.5];
// console.log(grabBag.length);

// let classes = ["science", "computer", "art"];
// console.log(classes.length);

// let teachers = ["Jones", "Willoughby", "Rhodes"];
// console.log(teachers.length);

// let programmingLanguages2 = [
//     "JavaScript", // index 0
//     "Python",     // index 1
//     "Java",       // index 2
//     "C#"          // index 3
// ];
// console.log(programmingLanguages2[0]);
// console.log(programmingLanguages2[3]);

// // What will happen when index 4 is requested?, requestiong an index that does not contain an array
// console.log(programmingLanguages2[4]);
// console.log(programmingLanguages2[-1]);
// console.log(programmingLanguages2[100]);

// //mutable arrays
// let javaScriptFrameworks = ["React", "Angular", "Ember"];
// console.log(javaScriptFrameworks);

// // Set the value of index 2 to be "Vue"
// javaScriptFrameworks[2] = "Vue";

// // Notice the value at index 2 is now "Vue"
// console.log(javaScriptFrameworks);

// //array include example
// let charles = [1, 7, 5, 9, 5];
// let otherArr = ['hello', 'world!'];

// console.log(charles.includes(5));

// console.log(otherArr.includes('hi'));

// //index Of
// console.log(charles.indexOf(5));

// console.log(otherArr.indexOf('hi'))

// //reverse
// let arrWords = ['At', 'banana', 'orange', 'apple', 'zoo'];

// arrWords.reverse();
// console.log(arrWords);

// //order
// let letters = ['f', 'c', 'B', 'X', 'a'];

// letters.sort();
// console.log(letters);

// let mixed = ['a', 'A', 20, 40];

// mixed.sort();
// console.log(mixed);

// let numbers = [2, 8, 10, 400, 30];

// numbers.sort();
// console.log(numbers);

// //push and  pop
// //push adds one or more items to the END of an array and returns the new length
// // let arr = ['a', 'b', 'c'];

// // console.log(arr.push('d', 'f', 42));

// // console.log(arr);
// //pop removes and returns the LAST element in an array
// let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.pop();

// console.log(arr);

// //shift method removes and returns the FIRST element in an array
// arr.shift();

// console.log(arr);

// //unshift adds one or more items to the START of an array and returns the new length
// let arrUnshift = ['a', 'b', 'c'];

// arrUnshift.unshift('hello', 121);

// console.log(arrUnshift);

// //splice modifies one or more elements anywhere in the array. Entries can be added, removed, or changed. This method requires practice.
// //removing element
// let arrSpliceRem = ['a', 'b', 'c', 'd', 'e', 'f'];

// arrSpliceRem.splice(2);    //Everything from index 2 and beyond is removed.
// console.log(arrSpliceRem);

// let arrTwoArg = ['a', 'b', 'c', 'd', 'e', 'f'];

// arrTwoArg.splice(2,3);    //Start at index 2 and remove 3 total entries.
// console.log(arrTwoArg);

// arrTwoArg.splice(1,1);    //Start at index 1 and remove 1 entry.
// console.log(arrTwoArg);

// //adding
// let arrAdding = ['a', 'b', 'c', 'd', 'e', 'f'];

// arrAdding.splice(2,0,'hello');     //Start at index 2, remove 0 entries, and add 'hello'.
// console.log(arrAdding);

// //replace
// let arrReplace = ['a', 'b', 'c', 'd', 'e', 'f'];

// arrReplace.splice(2,3,'hello', 9);    //Start at index 2, replace 3 entries with 'hello' and 9.
// console.log(arrReplace);

// //creat new arrays
// //concat adds the elements of one array to the end of another. The new array must be stored in a variable or printed to the screen, because concat does NOT alter the original arrays
// let arrConcat = [1, 2, 3];
// let otherArray = ['M', 'F', 'E'];
// let newArray = [];

// newArray = arrConcat.concat(otherArray);
// console.log(newArray);

// newArray = otherArray.concat(arrConcat);
// console.log(newArray);

// console.log(arrConcat.concat(otherArray, arrConcat));

// console.log(arrConcat);

// //join combines all the elements of an array into a string. The connector determines the string that “glues” the array elements together.

// let arrJoin = [1, 2, 3, 4];
// let words = ['hello', 'world', '!'];
// let newString = '';

// newString = arrJoin.join(",");
// console.log(newString);

// newString = words.join("");
// console.log(newString);

// newString = words.join("_");
// console.log(newString);

// //slice copies a range of elements from one array into a new array. slice does NOT change the original array, but returns a new array.

// //The ending index is optional. If it is left out, slice returns a new array that includes everything from the starting index to the end of the original array.
// let arrSlice = ['a', 'b', 'c', 'd', 'e'];

// console.log(arrSlice.slice(2));

// //If both indices are used, the new array contains everything from the starting index up to, but NOT including the ending index.
// console.log(arrSlice.slice(1,4));

// console.log(arrSlice); // original not changed

// //split actually a string method, but it complements the array method join.

// //split divides a string into smaller pieces, which are stored in a new array. The delimiter argument determines how the string is broken apart.
// let numbersSplit = "1,2,3,4";
// let word = "Rutabaga";
// let phrase = "Bookkeeper of balloons."
// let arrSplit = [];

// arrSplit = numbersSplit.split(',');  //split the string at each comma.
// console.log(arrSplit);

// arrSplit = phrase.split(' ');   //split the string at each space.
// console.log(arrSplit);

// arrSplit = word.split('');      //split the string at each character.
// console.log(arrSplit);

// //example
// let charlesEx = ['coder', 'Tech', 47, 23, 350];
// charlesEx.sort();
// console.log(charlesEx);

// str = 'LaunchCode students rock!'
// console.log(str.split(" "));

// let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
// let selectedItems = [];

// selectedItems = groceryBag.slice(2, 5).sort();
// console.log(selectedItems);

// //two-dimentional arrays
// let shuttleCrews = [
//     ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
//     ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
//     ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
// ];

// console.log(shuttleCrews[0][2]);
// console.log(shuttleCrews[1][1]);
// console.log(shuttleCrews[2][1]);

// let shuttleCrews2 = [
//     ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
//     ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
//     ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
// ];

// let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// // Add a new crew array to the end of shuttleCrews
// shuttleCrews2.push(newCrew);
// console.log(shuttleCrews2[3][2]);

// // Reverse the order of the crew at index 1
// shuttleCrews2[1].reverse();
// console.log(shuttleCrews2[1]);

// let school = [
//     ["science", "computer", "art"],
//     ["Jones", "Willoughby", "Rhodes"]
// ];

// console.log(school[1][0]);

// //let newClass = ["dance"];
// school[0].push("dance");
// console.log(school[0]);

// school[1].unshift("Holmes");
// console.log(school[1]);


// // let phrase1 = "JavaScript rocks!";
// // console.log(phrase1[phrase1.length-1]);

// let myArray = ["Daniyal", "Tech", 36, false];

// console.log(myArray.push())

// let numbersSplit = "1,2,3,4";
// let word = "Rutabaga";
// let phrase = "Bookkeeper of balloons."
// let arrSplit = [];

// arrSplit = numbersSplit.split(',');  //split the string at each comma.
// console.log(arrSplit);

// arrSplit = phrase.split(' ');   //split the string at each space.
// console.log(arrSplit);

// arrSplit = word.split('');      //split the string at each character.
// console.log(arrSplit);


// let arrJoin = [1, 2, 3, 4];
// let words = ['hello', 'world', '!'];
// let newString = '';

// newString = arrJoin.join("+");
// console.log(newString);

// newString = words.join("");
// console.log(newString);

// newString = words.join("_");
// console.log(newString);

// let protoArray1 = "3,6,9,12";
// let protoArray2 = "A;C;M;E";
// let protoArray3 = "space delimited string";
// let protoArray4 = "Comma-spaces, might, require, typing, caution";

// let strings = [protoArray1, protoArray2, protoArray3, protoArray4];

// //1)

//     console.log(strings);
// 	console.log(strings[0].includes(','));
// 	console.log(strings[1].includes(";"));
// 	console.log(strings[2].includes(" "));
// 	console.log(strings[3].includes(", "));

//     console.log(strings[0].split(',').reverse().join(','));

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];


console.log(correctAnswers.join(",").toLowerCase().split(","));


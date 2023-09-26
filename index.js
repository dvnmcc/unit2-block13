// [Is Truthy]

//using if/else statements create a JS code that follows the rules:
// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

//  values to test : "I am a string", false, null, undefined, 0, and ""

// const value = "";

// if (value === "I am a string") {
//   console.log(true);
// }
// // what happens when the value = false
// else if (value === false) {
//   console.log("The boolean value false is falsy");
// }
// // what happens when value = null
// else if (value === null) {
//   console.log("The null value is falsy");
// }
// // what happens when the value = undefined
// else if (value === undefined) {
//   console.log("undefined is falsy");
// }
// // what happens when value = 0
// else if (value === 0) {
//   console.log("The number 0 is falsy (the only falsy number)");
// }
// // defining what happens when value = an empty string
// else if (value === "") {
//   console.log("The empty string is falsy(the only falsy string)");
// }

// [Number Line]

// using if/else write code that takes the sum of two numbers and prints the corresponding result
// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

// define the value of 1st and 2nd number
// define the value of "sum" as the sum of the numbers

// let num1 = -1;
// let num2 = -1000;
// let sum = num1 + num2;

// if (num1 + num2 > 100) {
//   console.log(sum + " is greater than 100");
// } else if (num1 + num2 < -1000) {
//   console.log(sum + " is less than -1000");
// } else if (num1 + num2 < 0) {
//   console.log(sum + " is a negative number");
// } else if (num1 + num2 === 0) {
//   console.log(sum + " is equal to 0");
// } else if (num1 + num2 > 0) {
//   console.log(sum + " is greater than 0");
// }

// [Greater than 5]

// using if/else write code that prints true if both parameters are greater or equal to 5

// if both 6 and 5 are greater or equal to 5 then print true
// 0 and 3 are not greater or equal to 5 so false would be printed

// let num1 = 5;
// let num2 = 5;

// if (num1 && num2 >= 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// [Pair and Compare]

// using if/else and strict equality operators, code a tag that compares two sets of two values
// print true if at least one of the pairs is truthy

// "cat" === "cat" would be truthy but 6 === "6" would be falsy; this would still print true as only One pair needs to be truthy

// let a = "eleven";
// let b = 11;
// let c = "four";
// let d = "for";

// if (a === b || c === d) {
//   console.log(true);
// } else {
//   console.log(false);
// }

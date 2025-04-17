var orangePrice = 20;
var chocolatePrice = 0.5;
var applePrice = parseInt('25.5'); // Converts a string into an integer
var applePrice = parseFloat('25.5'); // Converts a string into a floating-point number

console.log(orangePrice);
console.log(orangePrice + applePrice);

console.log(typeof orangePrice);
console.log(typeof applePrice);

var first = 0.1;
var second = 0.2;

var total = first + second;
console.log(total.toFixed(1)); // Returns a string representing a number in fixed-point notation.

const number1 = 50 / 0; // Positive infinity
console.log(number1);

const number2 = -50 / 0; // Negative infinity
console.log(number2);
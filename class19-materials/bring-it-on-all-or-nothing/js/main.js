// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const getThatBag = true;
alert(getThatBag);

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = 'black';
favColor = 'hot pink';
console.log(favColor);


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
const doStuffWithNumbers = (n1, n2, n3, n4) => (n1 + n2 + n3) / 4;

console.log(doStuffWithNumbers(24, 42, 69, 7));


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function logResult(n1, n2) {
  console.log(n1 ** n2);
}

logResult(2, 8);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
const showString = (bool, str) => bool ? alert(str) : console.log(str);

showString(true, 'i love cats');
showString(false, 'i still love cats');


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
}

fizzBuzz(30);

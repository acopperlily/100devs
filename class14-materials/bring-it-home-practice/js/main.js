// *Variables*
// Create a variable and console log the value
const someNumber = 42;
console.log(someNumber);

// Create a variable, add 10 to it, and alert the value
let nice = 59;
nice += 10;
alert(nice);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNums(n1, n2, n3, n4) {
  const difference = n1 - n2 - n3 - n4;
  alert(difference);
}

subtractFourNums(420, 69, 42, 7);

// Create a function that divides one number by another and returns the remainder
function getRemainder(n1, n2) {
  const remainder = n1 % n2;
  return remainder;
}

console.log(getRemainder(42, 12));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(n1, n2) {
  const sum = n1 + n2;
  if (sum > 50) alert('Jumanji');
}

addTwoNums(42, 9);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums(n1, n2, n3) {
  const product = n1 * n2 * n3;
  if (product % 3 === 0) alert('ZEBRA');
}

multiplyThreeNums(2, 15, 6);
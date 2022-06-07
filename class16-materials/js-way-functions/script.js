//  ==================================
//  Writing Functions
//  ==================================

// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

const fName = prompt('Enter first name:');
const lName = prompt('Enter last name:');

console.log(sayHello(fName, lName));

// Complete the following program so that the square1() and square2() functions work properly.

function square1(x) {
  return x * x;
}

const square2 = x => x * x;

[0, 2, 5].forEach(num => {
  console.log(square1(num));
  console.log(square2(num));
});

// Update the program so that it shows the square of every number between 0 and 10.

const square = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i * i);
  }
}

square();

// Complete the following program so that the min() function returns the minimum of its two received numbers.
const min = (a, b) => a < b ? a : b;

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1));

// Complete the following program so that it offers the four basic arithmetic operations.

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid input';
  }
}

console.log(calculate(4, '+', 6));
console.log(calculate(4, '-', 6));
console.log(calculate(2, '*', 0));
console.log(calculate(12, '/', 0));

// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

const getCircumference = radius => 2 * Math.PI * radius;

const getArea = radius => Math.PI * radius ** 2;

const r = Number(prompt('Please enter radius:'));

console.log('Circumference:', getCircumference(r));
console.log('Area', getArea(r));
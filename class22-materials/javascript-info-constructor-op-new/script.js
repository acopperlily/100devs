const prompt = require('prompt-sync')();

/* Two functions, one object
Is it possible to create functions A and B so that
new A() == new B() ? */
function A() {
  return A;
};
function B() {
  return A;
};

let a = new A;
let b = new B;

console.log(a);
console.log(b);

console.log(a == b); // ooh, i did it bih, but not like their solution lololol

/* Create new Calculator
Create a constructor function Calculator that creates
objects with 3 methods:
- read() asks for two values using prompt and remembers them in object properties
- sum() returns the sum of these properties
- mul() returns the product of these properties */

function Calculator() {
  this.read = function() {
    this.a = +prompt('Number: ');
    this.b = +prompt('Another number: ');
  };
  this.sum = () => this.a + this.b;
  this.mul = () => this.a * this.b;
}

let calculator = new Calculator();
calculator.read();
console.log('Sum = ' + calculator.sum());
console.log('Mul = ' + calculator.mul());

/* Create new Accumulator
Create a constructor function Accumulator(startingValue).
Object that it creates should:
- Store the "current value" in the property value. The starting value is set to the argument of the constructor startingValue
- The read() method should use prompt to read a new number and add it to value
In other words, the value property is the sum of all user-
entered values with the initial value startingValue. */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Enter a number: ');
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
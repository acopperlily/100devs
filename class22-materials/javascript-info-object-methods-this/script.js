const prompt = require('prompt-sync')();

/* Using "this" in object literal
Here the function makeUser returns an object.
What is the result of accessing its ref? Why? */
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this
//   };
// }

// let user = makeUser();
// console.log(user.ref.name); // What's the result?
// How about no? It's an error.

/* Create a calculator
Create an object calculator with three methods:
- read() prompts for 2 values and saves them as object properties with names a and b respectively
- sum() returns the sum of saved values
- mul() multiplies saved values and returns the result */
let calculator = {
  read() {
    this.a = +prompt('Enter a number: ');
    this.b = +prompt('Enter another number: ');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

/* Chaining
There's a ladder object that allows to go up and down: */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  }, 
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log(this.step);
    return this;
  }
};

/* Now if we need to make several calls in sequence, we 
can do it like this: */

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();

/* Modify the code of up, down, and showStep to make the
calls chainable, like this: */
ladder.up().up().down().showStep().down().showStep();
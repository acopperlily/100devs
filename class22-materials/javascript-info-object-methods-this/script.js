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
// How about no?

/* Create a calculator
Create an object calculator with three methods:
- read() prompts for 2 values and saves them as object properties with names a and b respectively
- sum() returns the sum of saved values
- mul() multiplies saved values and returns the result */
let calculator = {

}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
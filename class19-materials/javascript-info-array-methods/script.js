/* Write the function camelize(str) that changes
dash-separated words like "my-short-string" into
camel-cased "myShortString" */

function camelize(str) {
  let result = str.split('-');
  for (let i = 1, n = result.length; i < n; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }
  return result.join('');
}

// Test cases
['background-color', 'list-style-image', '-webkit-transition'].forEach(str => console.log(camelize(str)));

/* Write a function filterRange(arr, a, b) that gets
an array arr, looks for elements with values higher or
equal to a and lower or equal to b and return a result
as an array.
The function should not modify the array. It should
return the new array. */

const filterRange = (arr, a, b) => arr.filter(n => n >= a && n <= b);

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // [3, 1]
console.log(arr); // not modified

/* Write a function filterRangeInPlace(arr, a, b) that
gets an array arr and removes from it all values except
those that are between a and b. The test is:
a <= arr[i] <= b.
The function should only modify the array. It should not
return anything. */

const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((n, i) => {
    if (n < a || n > b) arr.splice(i, 1);
  });
}

filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]

// Sort in decreasing order

let arr1 = [5, 2, 1, -10, 8];

const decreaseSort = arr => arr.sort((a, b) => (b - a));

console.log(decreaseSort(arr1));

/* We have an array of strings arr. We'd like to have a
sorted copy of it, but keep arr unmodified. Create a
function copySorted(arr) that returns such a copy. */

let arr2 = ['HTML', 'JavaScript', 'CSS'];

const copySorted = arr => [...arr].sort();

let sorted = copySorted(arr2);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr2); // unmodified

/* Create a constructor function Calculator that creates
"extendable" calculator objects. The task consists of two
parts:

1. First, implement the method calculate(str) that takes 
a string like "1 + 2" in the format "NUMBER operator
NUMBER" and returns the result. Should understand plus +
and minus -.

2. Then add the method addMethod(name, func) that teaches
the calculator a new operation. It takes the operator
name and the two-argument function func(a,b) that
implements it.

No parentheses or complex expressions
Numbers and operator are delimited with exactly one space
Add error handling if you want */

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };

  this.calculate = function(str) {
    str = str.split(' ');
    const num1 = +str[0];
    const num2 = +str[2];
    const operator = str[1];
    return this.methods[operator](num1, num2);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }
}

let calc = new Calculator;
console.log(calc.calculate('3 + 7'));

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

console.log(powerCalc.calculate('4 * 20'));
console.log(powerCalc.calculate('42 / 2'));
console.log(powerCalc.calculate('2 ** 3'));

/* You have an array of user objects, each one has
user.name. Write the code that converts it into an array
of names. */

let john = { name: 'John', surname: 'Smith', id: 1, age: 25 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2, age: 30 };
let mary = { name: 'Mary', surname: 'Key', id: 3, age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);

console.log(names);

/* You have an array of user objects, each one has name,
surname and id. Write the code to create another array
from it, of objects with id and fullName, where fullName
is generated from name and surname. */

let usersMapped = users.map(user => {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  };
});

console.log(usersMapped);
console.log(usersMapped[0].id);
console.log(usersMapped[2].fullName);

/* Write the function sortByAge(users) that gets an array
of objects with the age property and sorts them by age. */

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(users));
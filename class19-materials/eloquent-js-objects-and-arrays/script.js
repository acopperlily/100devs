/* The Sum of a Range
Write a range function that takes two arguments, start
and end, and returns an array containing all the numbers
from start up to and including end.

Next, write a sum function that takes an array of numbers
and returns the sum of these numbers.

As a bonus, modify your range function to take an optional
third argument that indicates the "step" value used when
building the array. If no step is given, the elements go
up by increments of one. */

function range(start, end, step = 1) {
  const result = [];
  const descending = start > end;
  for (let i = start; ; i += step) {
    if (descending && i < end) break;
    if (!descending && i > end) break;
    result.push(i);
  }

  return result;
}

const sum = arr => arr.reduce((acc, c) => acc + c, 0);

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

/* Reversing an Array
Write two functions, reverseArray and reverseArrayInPlace.
The first takes an array as argument and produces a new
array that has the same elements in the inverse order. The
second does what the reverse method does: it modifies the
array given as argument by reversing its elements. Neither
may use the standard reverse method. */

function reverseArray(arr) {
  const reversed = [];
  for (let i = 0, n = arr.length; i < n; i++) reversed.unshift(arr[i]);
  return reversed;
}

function reverseArrayInPlace(arr) {
  const reversed = reverseArray(arr);
  for (let item in arr) {
    arr[item] = reversed[item];
  }
}

console.log(reverseArray(['A', 'B', 'C']));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/* A List
Write a function arrayToList that builds up a list
structure like the one shown when given [1, 2, 3] as
argument. Also write a listToArray function that produces
an array from a list. Then add a helper function prepend,
which takes an element and a list and creates a new list
that adds the element to the front of the input list, and
nth, which takes a list and a number and returns the
element at the given position in the list or undefined
when there is no such element. */

function arrayToList(arr) {
  let list = {
    value: arr.pop(),
    rest: null
  };

  while (arr.length > 0) {
    list = {
      value: arr.pop(),
      rest: list
    };
  }

  return list;
}

function listToArray(list) {
  const arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

let test = arrayToList([10, 20]);
console.log(test);
console.log(listToArray(arrayToList([10, 20, 30])));
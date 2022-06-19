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

function prepend(el, list) {
  list = {
    value: el,
    rest: list
  };
  return list;
}

function nth(list, pos) {
  for (let i = 0; i < pos; i++) {
    list = list.rest;
    if (list == null) return undefined;
  }
  return list.value;
}

function nthRecursive(list, pos) {
  if (list == null) return undefined;
  if (pos == 0) return list.value;
  return nthRecursive(list.rest, pos - 1);
}

console.log(arrayToList([1, 2, 3]));
let test = arrayToList([10, 20]);
console.log(test);
console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(5, test));
console.log(nth(test, 1));
console.log(nthRecursive(arrayToList([2, 8, 4, 3]), 0));
console.log(test, '\n');

/* Write a function deepEqual that takes two values and returns
true only if they are the same value or are objects with the
same properties, where the values of the properties are equal
when compared with a recursive call to deepEqual. */

/* Yeah, I haven't figured this one out yet, so I'm gonna
put it down for a while and revisit later. */

function isObject(obj) {
  return typeof obj == 'object' && typeof obj != null;
}

function deepEqual(val1, val2) {
  
  // Check for objects
  if (isObject(val1) && isObject(val2)) {
    let arr1 = Object.keys(val1);
    let arr2 = Object.keys(val2);
    console.log('length:', arr1.length === arr2.length);

    // Check for equal length
    // if (Object.keys(val1).length !== Object.keys(val2).length) return false;

    for (let i = 0; i < arr1.length; i++) {
      console.log('loop:', arr2.includes(arr1[i]) && arr1.includes(arr2[i]));

      // Check for equal keys
      // if (!arr2.includes(arr1[i]) || !arr1.includes(arr2[i])) return false;
    }

    Object.keys(val1).forEach((k) => {
      console.log('keys:', Object.keys(val2).includes(k));
    });

    Object.values(val1).forEach(v => {
      console.log('values:', Object.values(val2).includes(v));
      console.log('value:', v);
    });


    // console.log(arr1 == arr2);
  } else if (val1 !== val2) return false;
  return '';
}

let obj = {here: {is: 'an'}, object: 2};
let obj2 = {here: 1, object: 2};
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}), '\n');
console.log(deepEqual(obj, obj2));
console.log(deepEqual({here: {is: 'an'}, object: 2}, obj), '\n');
console.log(deepEqual(obj, {no: 1, yes: 12, maybe: 300}), '\n');
console.log(deepEqual({one: 1, two: 2}, {one: 1, two: 2}), '\n');
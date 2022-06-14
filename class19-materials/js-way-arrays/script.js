/* Write a program that:
- Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis"
- Shows each array element using a for loop
- Adds the "D'Artagnan" value to the array
- Shows each array element using the forEach() method
- Remove poor Aramis
- Shows each array element using a for-of loop */

const musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0, n = musketeers.length; i < n; i++) console.log(musketeers[i]);

musketeers.unshift("D'Artagnan");

musketeers.forEach(musketeer => console.log(musketeer));

musketeers.pop();

for (let musketeer of musketeers) console.log(musketeer);

/* Write a program that creates the following array, then
calculates and shows the sum of its values. */

const values = [3, 11, 7, 2, 9, 10];

const sum = values.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 42

/* Write a program that creates the following array, then
calculates and shows the array's max value. */

console.log(Math.max(...values)); // 11

/* Write a program that asks the user for a word until
the user types "stop". The program then shows each of
these words, except "stop". */

const words = [];
let word = '';
do {
  word = prompt('Type a word:');
  words.push(word);
} while (word != 'stop');

words.pop();

words.forEach(word => console.log(word));
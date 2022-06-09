/* Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

let hash = '#'
for (let i = 1; i <= 7; i++) {
  console.log(hash);
  hash += '#';
}

/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 and not 3 print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5. */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else (console.log(i));
}

/* Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. Passing this string to console.log should show something like this:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

let size = 8;
let board = '';
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((j+i) % 2 === 0) board += ' ';
    else board += '#';
  }
  board += '\n';
}
console.log(board);

/* Write a function min that takes two arguments and returns their minimums */

const min = (num1, num2) => num1 < num2 ? num1 : num2;

console.log(min(0, 10));
console.log(min(0, -10));

/* Define a recursive function isEven. The function should accept a single parameter (a positive, whole number) and return a Boolean. */

function isEven(n) {
  n = Math.abs(n);
  return n === 0 ? true : n === 1 ? false : isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/* Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted. Rewrite countBs to make use of this new function. */

function countBs(str) {
  let count = 0;
  for (let i = 0, n = str.length; i < n; i++) {
    if (str[i] === 'B') count++;
  }
  return count;
}

console.log(countBs('BBC'));

const countChar = (str, char) => {
  let count = 0;
  for (let i = 0, n = str.length; i < n; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

console.log(countChar('kakkerlak', 'k'));
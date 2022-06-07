//  ==================================
//  Repeat statements
//  ==================================

// Write a program that launches a carousel for 10 turns, showing the turn number each time. When it's done, improve it so that the number of turns is given by the user.

let turns = Number(prompt('Enter number of carousel turns:'));

for (let i = 1; i <= turns; i++) {
  console.log(`Carousel turn number ${i}`);
}

let count = 1;
while (count <= turns) {
  console.log(`Carousel turn number ${count}`)
  count++;
}

// Check the following program that shows even numbers between 1 and 10. Improve the program so that it also shows odd numbers. Improve it again to replace the initial 1 by a number given by the user.

let startNum = Number(prompt('Enter a start value:'));

for (let i = startNum; i < startNum + 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

let endNum = startNum + 10;
while (startNum < endNum) {
  if (startNum % 2 === 0) {
    console.log(`${startNum} is even`);
  } else {
    console.log(`${startNum} is odd`);
  }
  startNum++;
}

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100. Improve the program so that the terminating number is between 50 and 100.

let someNumber = 101;
while (someNumber > 100 || someNumber < 50) {
  someNumber = Number(prompt('Enter a number equal to or greater than 50 and equal to or under 100:'));
}

// Write a program that asks the user for a number, then shows the multiplication table for this number. Improve the program so it only accepts numbers between 2 and 9.

let multTable = 1;
while (multTable < 2 || multTable > 9) {
  multTable = Number(prompt('Enter a number between 2 and 9:'));
}

for (let i = 1; i <= 12; i++) {
  console.log(`${multTable} x ${i} = ${multTable * i}`);
}

let multCount = 1;
while (multCount <= 12) {
  console.log(`${multTable} x ${multCount} = ${multTable * multCount}`);
  multCount++;
}

// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let yesOrNo = '';
while (yesOrNo != 'yes' && yesOrNo != 'no') {
  yesOrNo = prompt('Type "yes" or "no" to stop this prompt:');
}

// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3
// It shows "Buzz" instead if the number is divisible by 5 and not by 3
// Improve the program so that it shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

let fizzCount = 1;
while (fizzCount <= 100) {
  if (fizzCount % 3 === 0 && fizzCount % 5 === 0) {
    console.log('FizzBuzz');
  } else if (fizzCount % 3 === 0) {
    console.log('Fizz');
  } else if (fizzCount % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(fizzCount);
  }
  fizzCount++;
}
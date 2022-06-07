//  ==================================
//  3, 2, 1 ... Code!
//  ==================================

// Write a program that displays your name and age.
console.log('April');
console.log(42);

// Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
console.log(6 + 3, 6 - 3, 6 * 3, 6 / 3);

// Observe the following program and try to predict the values it displays.
console.log(4 + 5); // 9
console.log("4 + 5"); // "4 + 5"
console.log("4" + "5"); // "45"


//  ==================================
//  Play with variables
//  ==================================

// Write a program that asks the user for his first and last name. The program then displays them in one sentence.

// const firstName = prompt('First name: ');
// const lastName = prompt('Last name: ');
// alert(`Hello, ${firstName} ${lastName}`);

// Observe the following program and try to predict the final values of its variables.
let a = 2;
a -= 1; // a = 1
a++; // a = 2
let b = 8;
b += 2; // b = 10
const c = a + b * b; // 10 * 10 = 100 + 2 = 102
const d = a * b + b; // 2 * 10 = 20 + 10 = 30
const e = a * (b + b); // 2 * 20 = 40
const f = a * b / a; // 2 * 10 = 20 / 2 = 10
const g = b / a * a; // 10 / 2 = 5 * 2 = 10
console.log(a, b, c, d, e, f, g);
// a = 2, b = 10, c = 102, d = 30, e = 40, f = 10, g = 10

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
// const rawPrice = Number(prompt('Enter price: '));
// const vatRate = 20.6;
// const finalPrice = rawPrice + rawPrice * vatRate / 100;
// console.log(finalPrice);

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit.
// const celsius = Number(prompt('Enter Celcius: '));
// const fahr = celsius * 9 / 5 + 32;
// console.log(fahr);

// Add the necessary code to swap the values of variables number1 and number2.
let number1 = 5;
let number2 = 3;
let temp = number1;
number1 = number2;
number2 = temp;
console.log(number1, number2);

//  ==================================
//  Add conditions
//  ==================================

// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// const day = prompt('What day is today? ').toLowerCase();
// switch (day) {
//   case 'monday':
//     alert('Tomorrow is Tuesday');
//     break;
//   case 'tuesday':
//     alert('Tomorrow is Wednesday');
//     break;
//   case 'wednesday':
//     alert('Tomorrow is Thursday');
//     break;
//   case 'thursday':
//     alert('Tomorrow is Friday');
//     break;
//   case 'friday':
//     alert('Tomorrow is Saturday');
//     break;
//   case 'saturday':
//     alert('Tomorrow is Sunday');
//     break;
//   case 'sunday':
//     alert('Tomorrow is Monday');
//     break;
//   default:
//     alert('Invalid input');
// }

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

// const num1 = prompt('Enter first number: ');
// const num2 = prompt('Enter second number: ');
// if (num1 > num2) {
//   console.log('First number is larger than second number');
// } else if (num2 > num1) {
//   console.log('Second number is larger than first number')
// } else {
//   console.log('Both numbers are equal');
// }

// Take a look at the following program and try to guess the final values of variables nb1, nb2, and nb3 depending on their initial values. 

// let nb1 = Number(prompt('Enter nb1: '));
// let nb2 = Number(prompt('Enter nb2: '));
// let nb3 = Number(prompt('Enter nb3: '));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);

// Complete the following table:

// nb1=nb2=nb3=4:       nb1=0 | nb2=4 | nb3=12
// nb1=4, nb2=3, nb3=2  nb1=4 | nb2=3 | nb3=2
// nb1=2, nb2=4, nb3=0  nb1=3 | nb2=4 | nb3=0

// Write a program that accepts a month number between 1 and 12, then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

// const month = Number(prompt('Enter month number:'));
// if (month >= 1 && month <= 12) {
//   switch (month) {
//     case 2:
//       alert(28);
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       alert(30);
//       break;
//     default:
//       alert(31);
//   }
// } else {
//   alert('Invalid input');
// }

// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s

// let hours = Number(prompt('Enter hours:'));
// let minutes = Number(prompt('Enter minutes:'));
// let seconds = Number(prompt('Enter seconds:'));

// if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59) && (seconds >= 0 && seconds <= 59)) { 

//   seconds++;
//   if (seconds == 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes == 60) {
//       minutes = 0;
//       hours++;
//       if (hours == 24) {
//         hours = 0;
//       }
//     }
//   }
//   console.log(`${hours}h${minutes}m${seconds}s`);
// } else {
//   console.log('Invalid input');
// }

//  ==================================
//  Repeat statements
//  ==================================

// Write a program that launches a carousel for 10 turns, showing the turn number each time. When it's done, improve it so that the number of turns is given by the user.

// let turns = Number(prompt('Enter number of carousel turns:'));

// for (let i = 1; i <= turns; i++) {
//   console.log(`Carousel turn number ${i}`);
// }

// let count = 1;
// while (count <= turns) {
//   console.log(`Carousel turn number ${count}`)
//   count++;
// }

// Check the following program that shows even numbers between 1 and 10. Improve the program so that it also shows odd numbers. Improve it again to replace the initial 1 by a number given by the user.

// let startNum = Number(prompt('Enter a start value:'));

// for (let i = startNum; i < startNum + 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// let endNum = startNum + 10;
// while (startNum < endNum) {
//   if (startNum % 2 === 0) {
//     console.log(`${startNum} is even`);
//   } else {
//     console.log(`${startNum} is odd`);
//   }
//   startNum++;
// }

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100. Improve the program so that the terminating number is between 50 and 100.

// let someNumber = 101;
// while (someNumber > 100 || someNumber < 50) {
//   someNumber = Number(prompt('Enter a number equal to or greater than 50 and equal to or under 100:'));
// }

// Write a program that asks the user for a number, then shows the multiplication table for this number. Improve the program so it only accepts numbers between 2 and 9.

let multTable = 1;
// while (multTable < 2 || multTable > 9) {
//   multTable = Number(prompt('Enter a number between 2 and 9:'));
// }

// for (let i = 1; i <= 12; i++) {
//   console.log(`${multTable} x ${i} = ${multTable * i}`);
// }

// let multCount = 1;
// while (multCount <= 12) {
//   console.log(`${multTable} x ${multCount} = ${multTable * multCount}`);
//   multCount++;
// }

// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// let yesOrNo = '';
// while (yesOrNo != 'yes' && yesOrNo != 'no') {
//   yesOrNo = prompt('Type "yes" or "no" to stop this prompt:');
// }

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
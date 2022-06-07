//  ==================================
//  Add conditions
//  ==================================

// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

const day = prompt('What day is today? ').toLowerCase();
switch (day) {
  case 'monday':
    alert('Tomorrow is Tuesday');
    break;
  case 'tuesday':
    alert('Tomorrow is Wednesday');
    break;
  case 'wednesday':
    alert('Tomorrow is Thursday');
    break;
  case 'thursday':
    alert('Tomorrow is Friday');
    break;
  case 'friday':
    alert('Tomorrow is Saturday');
    break;
  case 'saturday':
    alert('Tomorrow is Sunday');
    break;
  case 'sunday':
    alert('Tomorrow is Monday');
    break;
  default:
    alert('Invalid input');
}

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

const num1 = prompt('Enter first number: ');
const num2 = prompt('Enter second number: ');
if (num1 > num2) {
  console.log('First number is larger than second number');
} else if (num2 > num1) {
  console.log('Second number is larger than first number')
} else {
  console.log('Both numbers are equal');
}

// Take a look at the following program and try to guess the final values of variables nb1, nb2, and nb3 depending on their initial values. 

let nb1 = Number(prompt('Enter nb1: '));
let nb2 = Number(prompt('Enter nb2: '));
let nb3 = Number(prompt('Enter nb3: '));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

// Complete the following table:

// nb1=nb2=nb3=4:       nb1=0 | nb2=4 | nb3=12
// nb1=4, nb2=3, nb3=2  nb1=4 | nb2=3 | nb3=2
// nb1=2, nb2=4, nb3=0  nb1=3 | nb2=4 | nb3=0

// Write a program that accepts a month number between 1 and 12, then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const month = Number(prompt('Enter month number:'));
if (month >= 1 && month <= 12) {
  switch (month) {
    case 2:
      alert(28);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert(30);
      break;
    default:
      alert(31);
  }
} else {
  alert('Invalid input');
}

// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s

let hours = Number(prompt('Enter hours:'));
let minutes = Number(prompt('Enter minutes:'));
let seconds = Number(prompt('Enter seconds:'));

if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59) && (seconds >= 0 && seconds <= 59)) { 

  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
      if (hours == 24) {
        hours = 0;
      }
    }
  }
  console.log(`${hours}h${minutes}m${seconds}s`);
} else {
  console.log('Invalid input');
}


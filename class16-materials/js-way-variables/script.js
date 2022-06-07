//  ==================================
//  Play with variables
//  ==================================

// Write a program that asks the user for his first and last name. The program then displays them in one sentence.

const firstName = prompt('First name: ');
const lastName = prompt('Last name: ');
alert(`Hello, ${firstName} ${lastName}`);

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
const rawPrice = Number(prompt('Enter price: '));
const vatRate = 20.6;
const finalPrice = rawPrice + rawPrice * vatRate / 100;
console.log(finalPrice);

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit.
const celsius = Number(prompt('Enter Celcius: '));
const fahr = celsius * 9 / 5 + 32;
console.log(fahr);

// Add the necessary code to swap the values of variables number1 and number2.
let number1 = 5;
let number2 = 3;
let temp = number1;
number1 = number2;
number2 = temp;
console.log(number1, number2);

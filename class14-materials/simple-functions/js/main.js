//create a function that adds two numbers and alerts the sum

function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  alert(result);
  return result;
}

//create a function that multiplys three numbers and console logs the product
function multiplyThreeNumbers(num1, num2, num3) {
  const result = num1 * num2 * num3;
  console.log(result);
  return result;
}

//create a function that divides two numbers and returns the ??? QUOTIENT LOLOLOL

function divideTwoNumbers(num1, num2) {
  let result;
  if (num2 === 0) {
    result = "You've ruined everything!";
  } else {
    result = num1 / num2;
  }
  return result;
}

// Grab elements and display values on page
document.getElementById('in-alert').textContent = addTwoNumbers(42, 27);

document.getElementById('in-console').textContent = multiplyThreeNumbers(4, 5, 21);

document.getElementById('returned').textContent = divideTwoNumbers(420, 10);
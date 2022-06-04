// Write your pseudo code first! 

// Grab buttons
const scales = document.querySelectorAll('button');

// Attach smurfs
scales.forEach(scale => scale.addEventListener('click', getTemp));

// Grab display element
const x = document.getElementById('show-temp');

// Convert to Celsius
const getCelsius = temp => (temp - 32) * 5/9;

// Convert to Fahrenheit
const getFahrenheit = temp => temp * 9/5 + 32;

// Do stuff
function getTemp(e) {
  // Get value from input
  let temp = document.getElementById('temp').value;

  // Determine scale and convert
  if (e.path[0].id === 'celsius') {
    temp = getCelsius(temp);
  } else {
    temp = getFahrenheit(temp);
  }

  // Round to two decimal places
  temp = Math.round(temp * 100) / 100;

  // Display new value
  x.textContent = temp;
}
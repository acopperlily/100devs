document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  let result;

  if (day === 'tuesday' || day === 'thursday') {
    result = 'CLASS DAY!';
  } else if (day === 'saturday' || day === 'sunday') {
    result = 'Weekend!';
    if (day === 'sunday') {
      result += ' And we have OFFICE HOURS!';
    } else {
      result += ' Happy Caturday!';
    }
  } else {
    result = 'BORRRRINNNNNGGGGGG!!!';
  }

  const display = document.querySelector('#placeToSee');
  display.textContent = result;

}

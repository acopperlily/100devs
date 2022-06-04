document.querySelector('#yell').addEventListener('click', run);

function run() {
  const firstName = document.querySelector('#firstName').value.toUpperCase();
  const firstMiddle = document.querySelector('#firstMiddle').value.toUpperCase();
  const lastMiddle = document.querySelector('#lastMiddle').value.toUpperCase();
  const lastName = document.querySelector('#lastName').value.toUpperCase();

  document.querySelector('#placeToYell').textContent = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}!!!`;
}
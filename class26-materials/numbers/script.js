document.querySelector('button').addEventListener('click', makeFetchHappen);
// window.onload = makeFetchHappen;

function makeFetchHappen(e) {
  e.preventDefault();
  const val = document.querySelector('input').value;
  fetch(`http://numbersapi.com/${val || 'random'}?json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const p = document.querySelector('p');
      p.textContent = data.text;
      const num = data.number;
      console.log(num);
      const grid = document.getElementById('grid');
      clearGrid(grid);
      drawGrid(num, grid);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    });
}

function clearGrid(grid) {
  while (grid.firstElementChild) {
    grid.removeChild(grid.firstElementChild);
  }
}

function drawGrid(num, grid) {
  console.log(Math.sqrt(num));
  const square = Math.floor(Math.sqrt(num));
  console.log(square);
  const extra = num - (square ** 2);
  console.log(extra);
  for (let i = 0; i < square; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < square; j++) {
      const div = document.createElement('div');
      div.textContent = '.';
      row.appendChild(div);
    }
    grid.appendChild(row);
  }
}
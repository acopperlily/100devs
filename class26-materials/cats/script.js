document.querySelector('button').addEventListener('click', makeFetchHappen);
window.onload = makeFetchHappen;

function makeFetchHappen(e) {
  e.preventDefault();
  const text = document.querySelector('input').value;
  fetch(`https://cataas.com/cat/says/${text || ' '}?json=true`)
    .then(res => res.json())
    .then(data => {
      const photo = document.querySelector('img');
      let link = 'https://cataas.com' + data.url;
      photo.src = link;
    })
    .catch(err => {
      console.log(`error: ${err}`);
    });
}


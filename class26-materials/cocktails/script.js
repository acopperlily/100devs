const btn = document.querySelector('button');
btn.addEventListener('click', getDrink);

function getDrink() {
  let drink = document.querySelector('input').value;
  // Sanitize input
  drink = drink.toLowerCase().trim();

  // Deal with spaces
  drink = drink.split(' ').join('%20');

  // Make fetch happen
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const drinkName = document.querySelector('h2');
      drinkName.textContent = data.drinks[0].strDrink;
      const img = document.querySelector('img');
      img.src = data.drinks[0].strDrinkThumb;
      const instructions = document.querySelector('h3');
      instructions.textContent = data.drinks[0].strInstructions;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}


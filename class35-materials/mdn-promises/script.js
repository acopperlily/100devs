const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data[0].name);
  })
  .catch(error => {
    console.error(`Could not get products: ${error}`);
  });

console.log('Started request...');


// Promise.all()
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');

const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then(responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch(error => {
    console.error(`Failed to fetch: ${error}`)
  });


// Promise.any()
const fetchPromise4 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

const fetchPromise5 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');

const fetchPromise6 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise4, fetchPromise5, fetchPromise6])
  .then(response => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch(error => {
    console.error(`Failed to fetch: ${error}`);
  });


// async and await
async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data[0].name);
  }
  catch(error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
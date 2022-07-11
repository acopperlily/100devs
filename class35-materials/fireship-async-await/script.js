// L1
console.log('🥪 Synchronous 1');

// L2
setTimeout((_) => console.log('🍅 Timeout 2'), 0);

// L3
Promise.resolve().then((_) => console.log('🍍 Promise'));

// L4
console.log('🥪 Synchronous 4');

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
  .then(res => res.json())
  .then(user => {
    throw new Error('uh oh');
    return user;
  })
  .catch(err => console.log('😭', err));

console.log('🥪 Synchronous');

const tick = Date.now();
const log = v => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const codeBlocker = () => {
  // let i = 0;
  // while (i < 1000000000) i++;
  // return '🐷 billion loops done';

  // return new Promise((resolve, reject) => {
  //   let i = 0;
  //   while(i < 1000000000) i++;
  //   resolve('🐷 billion loops done');
  // });

  return Promise.resolve().then(v => {
    let i = 0;
    while (i < 1000000000) i++;
    return '🐷 billion loops done';
  });
};

log('🥪 Synchronous one');

codeBlocker().then(log);

log('🥪 Syncronous two');

const getFruit = async(name) => {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑',
    strawberry: '🍓'
  };
 
  return fruits[name];
};

getFruit('peach').then(console.log);

const makeSmoothie = async() => {
  const a = getFruit('pineapple');
  const b = getFruit('strawberry');

  // return Promise.all([a, b]);
  const smoothie = await Promise.all([a, b]);
  return smoothie;
};

makeSmoothie().then(console.log);

const badSmoothie = async() => {
  try {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');
    const smoothie = await Promise.all([a, b]);

    throw 'broken!';

    return smoothie;
  } catch(err) {
    console.log(err);
    return `😬 We are going to be fine...`;
    // throw `💩 It's broken!`;
  }
};

badSmoothie()
  .then(val => console.log({val}))
  .catch(err => console.log({err}));

const fruits = ['peach', 'pineapple', 'strawberry'];

// Don't do this:
// const smoothie = fruits.map(async v => {
//   const emoji = await getFruit(v);
//   log(emoji);
//   return emoji;
// });

// Do this instead:
const fruitLoop = async() => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

fruitLoop();

const fruitInspection = async () => {
  if (await getFruit('peach') === '🍑') {
    console.log('looks peachy!');
  }
};

fruitInspection();
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(console.log);

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/acopperlily',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));

let names = ['iliakan', 'remy', 'jeresig'];

let requests1 = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests1)
  .then(responses => {
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }

    return responses;
  })
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(users => users.forEach(user => console.log(user.name)));

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.log);


Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 1000)
  }),
  4,
  3
]).then(console.log);

let moreUrls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(moreUrls.map(url => fetch(url)))
  .then(results => {
    results.forEach((result, num) => {
      if (result.status == 'fulfilled') {
        console.log(`${moreUrls[num]}: ${result.value.status}`);
      } 
      if (result.status == 'rejected') {
        console.log(`${moreUrls[num]}: ${result.reason}`);
      }
    });
  });

if (!Promise.allSettled) {
  const rejectHandler = reason => ({status: 'rejected', reason});
  const resolveHandler = value => ({status: 'fulfilled', value});

  Promise.allSettled = function(promises) {
    const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
  };
}

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(10), 3000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('oops')), 4000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(30), 5000))
]).then(console.log); // 10

Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('shit')), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(11), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(33), 3000))
]).then(console.log);

Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('fuck')), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('goddammit')), 2000))
]).catch(error => {
  console.log(error.constructor.name);
  console.log(error.errors[0]);
  console.log(error.errors[1]);
});
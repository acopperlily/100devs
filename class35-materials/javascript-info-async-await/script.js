async function f() {
  return 1; // return Promise.resolve(1);
}

f().then(console.log);

async function f1() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise;

  console.log(result);
}

f1();

async function showAvatar() {

  // read our JSON
  let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = 'promise-avatar-example';
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();

(async () => {
  let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
  let user = await response.json();

  console.log(user);
})();

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);
    setTimeout(() => resolve(this.num * 2), 2000);
  }
}

async function f2() {
  let result = await new Thenable(1);
  console.log(result);
}

f2();

class Waiter {
  async wait() {
    return await Promise.resolve(10);
  }
}

new Waiter()
  .wait()
  .then(console.log);

async function f3() {
  await Promise.reject(new Error('Whoops!'));
  // same as:
  // throw new Error('Whoops!);
}

f3();

async function f4() {

  try {
    let response = await fetch('http://no-user-here');
    let user = await response.json();
  } catch(err) {
    console.log(err);
  }
}

f4();

/* Tasks
Rewrite using async/await
Rewrite this example code using async/await instead of
.then/catch: */

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(console.log);

async function loadJson1(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson1('https://javascript.info/no-such-user.json')
  .catch(console.log);

/* Rewrite "rethrow" with async/await
Below you can find the "rethrow" example. Rewrite it using
async/await instead of .then/catch.
And get rid of the recursion in favour of a loop in
demoGithubUser: with async/await that becomes easy to do. */

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson2(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

async function loadJson3(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new HttpError(response);
}

function demoGithubUser() {
  let name = prompt('Enter a name?', 'iliakan');

  return loadJson2(`https://api.github.com/users/${name}`)
    .then(user => {
      console.log(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log('No such user, please reenter.');
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();

async function demoGithubUser1() {
  let user;
  while(true) {
    let name = prompt('Enter a name?', 'iliakan');
    try {
      user = await loadJson3(`https://api.github.com/users/${name}`);
      break;
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log('No such user, please reenter');
      } else {
        throw err;
      }
    }
  }
  console.log(`Full name: ${user.name}`);
  return user;
}

demoGithubUser1();

/* Call async from non-async
We have a "regular" function called f. How can you call the
async function wait() and use its result inside of f? */

async function wait1() {
  await new Promise(resolve => setTimeout(resolve, 4000));

  return 100;
}

function f5() {
  wait1().then(result => console.log(result));
}

f5();
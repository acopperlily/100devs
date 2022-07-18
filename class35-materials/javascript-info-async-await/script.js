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
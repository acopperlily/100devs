new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result); // 1
  return result * 2;

}).then(function(result) {

  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4
  return result * 2;
});

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  console.log(result);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  console.log(result);
});

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

// loadScript('https://javascript.info/article/promise-chaining/one.js')
//   .then(function(script) {
//     return loadScript('https://javascript.info/article/promise-chaining/two.js');
//   })
//   .then(function(script) {
//     return loadScript('https://javascript.info/article/promise-chaining/three.js');
//   })
//   .then(function(script) {
//     one();
//     two();
//     three();
//   });

// Shorter version of above
loadScript('https://javascript.info/article/promise-chaining/one.js')
  .then((script) => loadScript('https://javascript.info/article/promise-chaining/two.js')
  )
  .then((script) => loadScript('https://javascript.info/article/promise-chaining/three.js'))
  .then(script => {
    one();
    two();
    three();
  });

// Thenables
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

new Promise(resolve => resolve(5))
  .then(result => {
    return new Thenable(result);
  })
  .then(console.log);


// Make fetch happen
fetch('https://javascript.info/article/promise-chaining/user.json')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log(text);
  });

// Above using arrow functions
fetch('https://javascript.info/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => alert(user.name));

// Make a request for user.json
fetch('https://javascript.info/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(gitHubUser => new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = gitHubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(gitHubUser);
  }, 3000);
  }))
  .then(gitHubUser => console.log(`Finished showing ${gitHubUser.name}`));

// Above with reusable functions
function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function loadGithubUser(name) {
  return loadJson(`https://api.github.com/users/${name}`);
}

function showAvatar(gitHubUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = gitHubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(gitHubUser);
    }, 3000);
  });
}

loadJson('https://javascript.info/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(gitHubUser => console.log(`Finished showing ${gitHubUser.name}`));

// Task
/* Promise: then versus catch
Are these code fragments equal? In other words, do they behave
the same way in any circumstances, for any handler function? */

/*
promise.then(f1).catch(f2); // error handled by catch

Versus:
promise.then(f1, f2); // error not handled here
*/
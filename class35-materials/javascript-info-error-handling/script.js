fetch('https://javascript.info/article/promise-chaining/user.json')
  .then((response) => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch((err) => console.log(err.message));

new Promise((resolve, reject) => {
  resolve('ok');
}).then((result) => {
  throw new Error('Whoops!');
}).catch(console.log);

new Promise((resolve, reject) => {
  resolve('ok');
}).then((result) => {
  blabla();
}).catch(console.log);

new Promise((resolve, reject) => {
  throw new Error('Whoops!');
}).catch(function(error) {
  console.log('The error is handled, continue normally');
}).then(() => console.log('Next successful hander runs'));

new Promise((resolve, reject) => {
  throw new Error('Oops');
}).catch(function(error) {
  if (error instanceof URIError) {

  } else {
    console.log("Can't handle such error");

    throw error;
  }
}).then(function() {

}).catch(error => {
  console.log(`The unknown error has occurred: ${error}`);
});

// Reference error:
// new Promise(function() {
//   noSuchFunction();
// })
//   .then(() => {

//   });

// More errors
// window.addEventListener('unhandledrejection', function(event) {
//   alert(event.promise);
//   alert(event.reason);
// });

// new Promise(function() {
//   throw new Error('oopsies');
// });

/* Task
Error in setTimeout
What do you think? Will the .catch trigger? Explain. */

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error('oopsie-daisy');
  }, 1000);
}).catch(alert);
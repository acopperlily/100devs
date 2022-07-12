let promise = new Promise(function(resolve, reject) {
  // setTimeout(() => resolve('done'), 1000);
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

promise.then(
  result => alert(result),
  error => alert(error)
);

new Promise((resolve, reject) => {
  setTimeout(() => resolve('value'), 2000);
})
  .finally(() => alert('Promise ready'))
  .then(result => alert(result));

new Promise((resolve, reject) => {
  throw new Error('error');
})
  .finally(() => alert('Promise ready'))
  .catch(err => alert(err));

  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;

      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));

      document.head.append(script);
    });
  }

let promiseScript = loadScript('https://cdnjs.cloudflare.comajax/libs/lodash.js/4.17.11/lodash.js');

promiseScript.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promiseScript.then(script => alert('Another handler...'));

/* Tasks
Re-resolve a promise?
What's the output of the code below? */

let promise1 = new Promise(function(resolve, reject) {
  resolve(1);
  // This gets ignored
  setTimeout(() => resolve(2), 1000);
});

promise1.then(alert); // 1

/* Delay with a promise
The built-in function setTimeout uses callbacks. Create a
promise-based alternative.

The function delay(ms) should return a promise. That promise
should resolve after ms milliseconds, so that we can add
.then to it, like this: */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

/* Animate circle with promise
Rewrite the showCircle function in the solution of the task
Animated circle with callback so that it returns a promise
instead of accepting a callback.

The new usage: */

// oof, what even is this

// showCircle(150, 150, 100).then(div => {
//   div.classList.add('message-ball');
//   div.append('Hello, world!');
// });

// Take the solution of the task as the base.
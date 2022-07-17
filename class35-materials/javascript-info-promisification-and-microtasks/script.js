// Promisification

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

let loadScriptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        if (err) {
          reject(err);
        } else {
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
}

// f = promisify(f, true);

// Microtasks

let promise = Promise.resolve();

promise.then(() => console.log('promise done!'));

console.log('code finished');

Promise.resolve()
  .then(() => console.log('second promise done!'))
  .then(() => console.log('second code finished'));

let promise1 = Promise.reject(new Error('Promise Failed!'));
promise1.catch(err => console.log('caught'));

window.addEventListener('unhandledrejection', event => console.log(event.reason)); // doesn't run the above, but runs the below

let promise2 = Promise.reject(new Error('Another promise fail!'));

let promise3 = Promise.reject(new Error('Yet another fail!'));
setTimeout(() => promise3.catch(err => console.log('gotcha')), 1000);
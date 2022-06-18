## How to prevent multiple requests from being sent repeatedly?
```
let count = 1;

const promiseFunction = () => new Promise(resolve => {
  window.setTimeout(() => resolve(count++));
});


function firstPromise(func) {
  return (...args) => {
    return func(...args);
  }
}

function firstPromise (func) {
  let promise = null;

  return (...args) => {
    if (promise) return promise;
    return promise = func
      .apply(this, args)
      .finally(() => (promise = null));
  };
}

let firstFn = firstPromise(promiseFunction)
firstFn().then(console.log) // 1
firstFn().then(console.log) // 1
firstFn().then(console.log) // 1
```

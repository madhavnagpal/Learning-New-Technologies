# Promises

## Defination

Promise is an object that is used as a placeholder for the future result of an asynchronous operation. (simply put - A container for a future value).

Example of future value- Response from AJAX call

## Usage of Promise

```
let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});
```

1. The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically.
2. Its (executor function's) arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.
3. When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- resolve(value) — if the job is finished successfully, with result value.
- reject(error) — if an error has occurred, error is the error object.

4. The executor should call only one resolve or one reject. Any state change is final.
   All further calls of resolve and reject are ignored:
   Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.

&nbsp;

## Promise Chaining

If a .then (or catch/finally) handler returns a promise, the rest of the chain waits until it settles. When it does, its result (or error) is passed further.

Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

```
promise.then(f1).catch(f2);
```

```
promise.then(f1, f2);
```

**no, they are not equal:**

.then passes results/errors to the next .then/catch. So in the first example, there’s a catch below, and in the second one there isn’t, so the error is unhandled.

&nbsp;

## Pros of using Promises

- No longer need to rely on events and callbacks passed into async funtions to handle async results
- Instead of nesting callbacks, we can **chain promises** for a sequence of async operations: **escaping callback hell**.

&nbsp;

## The Promise Lifecycle

1. **Pending** (Before the future value is available)

2. **Settled** (async task has finished)
   - **Fulfilled** (Success! The value in now available)
   - **Rejected** (An error happened)

&nbsp;

# Error handling with promises

Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice.

## Handling error for invalid response

If the remote server responds with error 404, or even error 500, then it’s considered a valid response.

What if the server returns a non-JSON page with error 500 in the line (\*)? What if there’s no such user, and GitHub returns a page with error 404 at (\*\*)?

```
fetch('no-such-user.json') // (*)
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`)) // (**)
  .then(response => response.json())
  .catch(alert); // SyntaxError: Unexpected token < in JSON at position 0

```

As of now, the code tries to load the response as JSON no matter what and dies with a syntax error.

That’s not good, because the error just falls through the chain, without details: what failed and where.

```
function loadJson(url) { // (2)
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}
```

## Error handling key points

- .catch handles promise rejections of all kinds: be it a reject() call, or an error thrown in a handler.
- We should place .catch exactly in places where we want to handle errors and know how to handle them. The handler should analyze errors (custom error classes help) and rethrow unknown ones.
- It’s ok not to use .catch at all, if there’s no way to recover from an error.
- In any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments), to track unhandled errors and inform the user (and probably our server) about the them, so that our app never “just dies”.

```
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});
```

### For more details, refer https://tr.javascript.info/promise-error-handling

&nbsp;

# Promise Combinators

1. Promise.all
2. Promise.race  
   // below are relatively newer one might have less browser support
3. Promise.allSettled
4. Promise.any

&nbsp;

## Promise.all

Promise.all is used when we want many promises to execute in parallel and wait until all of them are ready.

```
let promise = Promise.all(iterable);
```

- Promise.all takes an iterable (usually, an array of promises) and returns a new promise
- The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

```
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member
```

Please note that the order of the resulting array members is the same as in its source promises

**Better way to use Promise.all**

```
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));
```

**If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error and Promise.all gets short circuited (means don't care about other promises).**

## Promise.race

Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

```
let promise = Promise.race(iterable);
```

**After the first settled promise “wins the race”, all further results/errors are ignored.**

```
// if request takes more then timeout then our timeout rejects first
const timeout = (miliseconds) =>
  new Promise((_, reject) =>
    setTimeout(() => {
      reject(new Error("Request took too long!"));
    }, miliseconds)
  );

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 6000)),
  timeout(5000),
])
  .then(console.log)
  .catch(console.error);
```

## Promise.allSettled

**Promise.all** rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, when we need all results successful to proceed:

**Promise.allSettled** just waits for all promises to settle, regardless of the result. The resulting array has:

- {status:"fulfilled", value:result} for successful responses,
- {status:"rejected", reason:error} for errors.

For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.

**we can use Promise.allSettled to get the results of all given promises, even if some of them reject.**

```
Promise.allSettled([Promise.resolve("Success"), Promise.reject("Fail")])
  .then(console.log)  // [{}, {}]

Promise.all([Promise.resolve("Success"), Promise.reject("Fail")])
  .then(console.log)
  .catch(console.error);  // error will be logged
```

**Polyfill Promise.allSettled**

```
if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: 'rejected', reason });

  const resolveHandler = value => ({ status: 'fulfilled', value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
  };
}
```

## Promise.any

Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

# Promises

## Defination

Promise is an object that is used as a placeholder for the future result of an asynchronous operation. (simply put - A container for a future value).

Example of future value- Response from AJAX call

## Pros of using Promises

- No longer need to rely on events and callbacks passed into async funtions to handle async results
- Instead of nesting callbacks, we can **chain promises** for a sequence of async operations: **escaping callback hell**.

## The Promise Lifecycle

1. **Pending** (Before the future value is available)

2. **Settled** (async task has finished)
   - **Fulfilled** (Success! The value in now available)
   - **Rejected** (An error happened)

## Custom errors

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

## Error handling Summary

- .catch handles promise rejections of all kinds: be it a reject() call, or an error thrown in a handler.
- We should place .catch exactly in places where we want to handle errors and know how to handle them. The handler should analyze errors (custom error classes help) and rethrow unknown ones.
- It’s ok not to use .catch at all, if there’s no way to recover from an error.
- In any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments), to track unhandled errors and inform the user (and probably our server) about the them, so that our app never “just dies”.

## For more details, refer

https://tr.javascript.info/promise-error-handling

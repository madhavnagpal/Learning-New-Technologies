"use strict";

class PromiseSimple {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(handleSuccess) {
    console.log(handleSuccess, " handlesuceess in then");
    this.promiseChain = [...this.promiseChain, handleSuccess];
    return this;
  }

  catch(handleError) {
    this.handleError = handleError;
    return this;
  }

  onResolve(value) {
    let storedValue = value;
    console.log("on resolve function call");

    const arr = [...this.promiseChain];
    console.log(this, " this");
    console.log(this.promiseChain, " promisechain");
    console.log(arr, " arr");
    console.log(this.promiseChain?.["0"], " promise  chani 0 element");

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
        console.log(storedValue, " looping promise chain");
      });
    } catch (error) {
      console.log("catch block resolve");
      this.promiseChain = [];
      this.onReject(error);
    }
  }

  onReject(error) {
    console.log("on reject imp");
    this.handleError(error);
  }
}

const makeCall = () => {
  console.log("make call");
  return new PromiseSimple((resolve) => {
    console.log("promise execution function");
    resolve(33);
  });
};

makeCall()
  .then(() => {
    console.log("promise .then func ");
  })
  .catch(() => {
    console.log("in promise catch");
  });

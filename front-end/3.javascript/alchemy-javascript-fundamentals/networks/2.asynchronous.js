// NETWORKS
// ASYNCHRONOUS

// 1. run callback
/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
  return callbackFunction();
}

function callbackHi() {
  return 'hi';
}

console.log(runCallback(callbackHi));

// 2. run callback asynchronously
/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallbackAsync(callbackFunction) {
  setTimeout(() => {
    callbackFunction();
  }, 1000);
  return 'timer set';
}

function asyncHello() {
  console.log('async hello!');
  console.log('done');
}

console.log(runCallbackAsync(asyncHello));

// 3. dialog callback

class Dialog {
  onClose(callbackFunction) {
    // store the callback
    this.callbackFunction = callbackFunction;
  }

  close() {
    // invoke the callback
    this.callbackFunction();
  }
}

// 4. dialog callbacks

class DialogMultipleCallbacks {
  constructor() {
    this.callbacks = [];
  }
  onClose(callbackFunction) {
    // store the callbacks
    this.callbacks.push(callbackFunction);
  }
  close() {
    // invoke all callbacks
    this.callbacks.forEach(callback => {
      callback();
    });
  }
}

// 5. for each callback

function forEach(arr, callback) {
  // for each element in the arr, run the callback, passing in the element
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

forEach(['a','b','c'], (e,i) => {
  console.log(e,i);
});

// 6. map callback

function map(arr, callback) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i]));
  }

  return newArray;
}

const newArray = map([1,2,3], (x) => {
  return x * 2;
});

console.log(newArray); // [2,4,6]

// PROMISES

// 1. request order

class Task {
  constructor(order) {
      this.order = order;
      this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
      });
  }
}

const _tasks = [];
function _findTaskByOrder(order) {
  return _tasks.find(x => x.order.id === order.id);
}

function makeFood(order) {
  const task = new Task(order);
  _tasks.push(task);
  return task.promise;
}

function problem(order, err) {
  _findTaskByOrder(order).reject(err);
}

function finishFood(order) {
  _findTaskByOrder(order).resolve();
}

class Order {
  constructor() {
      this.isReady = false;
  }
  request(food) {
      const promise = makeFood(food);
      promise.then(() => {
        this.isReady = true;
      })
      .catch((error) => {
        this.error = error;
      });
  }
}

// 3. create a promise

function timer() {
  return new Promise(function(resolve, reject) {
    resolve();
  });

}

// 4 asynchronous timer

// timer resolves after one second
function asyncTimer() {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000);
  });
}

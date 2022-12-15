# event loop

- js has a runtime model based on an **event loop**
- model is different from languages like C and Java

the event loop
- executes code
- collects and processes events
- executes queued sub-tasks

- web APIs, message queue and the event loop are all features of the browser.

- the event loop adds the first call in the message queue and adds it on the stack as soon as its empty
- *run-to-completion* means if the call stack is executing code, the event loop is blocked and won't add messages from the queue until the stack is emptyy
- debouncing callbacks mean they will only be executed every x amount of ms


## runtime concepts

- theoretical model that engines implement and heavily optimized the semantics from this model (the event loop)

### stack

function calls from a stack of *frames*

```js
function simpleSum(b) {
  const a = 10;
  return a + b + 11;
}

function stacked(x) {
  const y = 3;
  return simpleSum(x * y);
}

const stackedCall = stacked(7); //assigns 42 to stackedCall
```

1. calling `stacked(7)` creates a frame containing references to `stacked`'s arguments and local variables
2. `stacked` calls `simpleSum` and creates a second frame pushed on top of the stack with references to `simpleSum` arguments and local variables. `simpleSum` argument is the result of evaluating `x` and `y` taking the values stored in the first frame.
3. `simpleSum` call returns, that frame is popped out of the stack leaving `stacked` frame left.
4. `stacked` returns and the stack is empty.

- arguments and local variables may continue to exist as they are stored outside of the stack
- stack is a container of frames inserted and removed according to last-in first-out principle
- the call stack is a mechanism that helps js interpreter to keep track of function invocations
- a function invocation pushes a frame on top of the stack.
- a function returning or reaching the end of the scope pops it from the stack.
- size of the stack ranges from 10 to 50 thousand calls.
- javascript only has one call stack
- APIs allow to handle code execution, not blocking the call stack.


### heap

- objects are allocated in heap, a name to denote a large region of memory (mostly unstructured)
- memory management, garbage collection is related to the heap

### queue

- a queue is a container of messages that uses FIFO principle. (first-in first-out)
- message queue, callback queue
- js runtime uses a `message queue`, a list of messages to be processed.
- each message has a function that handles the message
- calling a function always creates a new stack frame (execution context)
- processing of functions empties the stack, then the event loop proceeds to process the message in the queue.
- size of the queue varies depending on available memory and specific implementation of the queue. The queue can grow as long as there's memory to store the messages. 
- large message queues will introduce performance issues

### run to completion

- each message is processed completely before any other message is processed
- advantage of this is that once a function runs, it cannot be preempted or let other code run inbetween. C is different where a function can run in a thread but can still get stopped at any time to run some other code in another thread.
- disadvantage is that if a message takes too long to complete, the application is unable to process nothing else.

### adding messages

- messages are added anytime an event occurts and there's an event listener attached to it.
- without a listener, the event is lost.
- `setTimeout` is called with two arguments, a message to add to the stack and a time value. the time value represents the delay after which the message will be pushed into the queue.
- `setTimeout` has to wait if there are messages in the queue or the stack is not empty. 

### zero delays

zero milliseconds doesn't mean the callback will be trigerred after said time.

the execution depends on the number of waiting tasks in the queue.

delay is minimum time required for runtime to process the request, not guaranteed time.

### runtime communication

- a web worker or cross-origin `iframe` has its own stack, heap and message queue
- runtime environments can only communicate through sending messages via `postMessage`

### never blocking

- the event loop model is non-blocking
- handling I/O is performed via events and callbacks.
- while an application is waiting for something to return, it can still process other things like user input

### job queue and synchronous code

- the job queue exclusively accepts promises

**promises** 

- introduced in ES6 (EcmaScript 2015) but available in babel before.
- handle asynchronous code without using callbacks
- allow to chain asynchronous functions without overcomplex structures (callback hell, pyramid of doom)

```js
setTimeout(() => {
  console.log('print this and wait...');
  setTimeout(() => {
    console.log('do something else and wait...');
    setTimeout(() => {
      console.log('more stuff');
    }, 100);
  }, 100);
}, 100);

// promise

const timeout = (time) => new Promise(resolve => setTimeout(resolve, time));

timeout(1000)
  .then(() => {
    console.log('hi after 1 second');
    return timeout(1000);
  })
  .then(() => {
    console.log('hi after 2 seconds');
  });

// async await syntax

const logDelayedMessages = async () => {
  await timeout(1000);
  console.log('hi after 1 second');
  await timeout(1000);
  console.log('hi after 2 seconds');
}
```

- the job queue has priority over the callback queue even though both can be asynchronous.
- a `promise` will be process before a `setTimeout` call.

```js
console.log(a);

setTimeout(() => console.log('b'), 0);

new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
    console.log('c');
  });

console.log('d');

/* 
a
d
c
b
*/
```



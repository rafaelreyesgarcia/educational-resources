let counter = 0;
let instance;
// not a singleton as it can be instantiated more than once
class Counter {
  constructor() {
    if(instance) {
      throw new Error('only one instance allowed!');
    }
    instance = this;
  }
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
// const counter2 = new Counter();

// console.log(counter1.getInstance() === counter2.getInstance() );


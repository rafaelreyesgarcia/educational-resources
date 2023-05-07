import counter from './counterObject'

export default class SuperCounter {
  constructor() {
    this.count = 0;
  }

  increment() {
    counter.increment();
    return (this.count += 100);
  }

  decrement() {
    counter.decrement();
    return (this.count -= 100);
  }
}
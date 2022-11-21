// basic generator
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

let one = generator.next();

console.log(JSON.stringify(one));
console.log(JSON.stringify(one));

let two = generator.next();

console.log(JSON.stringify(two));

let three = generator.next();

console.log(JSON.stringify(three));


for(let value of generator) {
  console.log(value);
}

// spread syntax

let sequence = [0, ...generateSequence(), 4, 5, 6];

console.log(sequence);

let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log([...range]);

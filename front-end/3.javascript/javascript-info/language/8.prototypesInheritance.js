// __proto__
let animal = {
  name: 'animal',
  eats: true,
  walk() {
    console.log(`${this.name} is walking`);
  }
};

let rabbit = {
  name: 'rabbit',
  jumps: true
};

rabbit.__proto__ = animal;
// rabbit prototype is set to animal

console.log(rabbit.eats);
animal.walk();

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// assigning unique methods in the prototype chain
rabbit.walk = function() {
  console.log(`${this.name} is walking`);
}

rabbit.walk();

let user = {
  name: 'rafael',
  surName: 'reyes',

  set fullName(value) {
    [this.name, this.surName] = value.split(' ');

  },

  get fullName(){
    return `${this.name} ${this.surName}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName);

admin.fullName = 'kelley smith';

console.log(admin.fullName);
console.log(user.fullName);

let insect = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },

  sleep() {
    this.isSleeping = true;
  }
};

let cicada = {
  name: 'cicada',
  __proto__: insect
};

console.log(insect.isSleeping);
cicada.sleep();
console.log(cicada.isSleeping);

console.log(Object.keys(cicada));
for (let prop in cicada) console.log(prop);

for (let prop in cicada) {
let isOwn = cicada.hasOwnProperty(prop);

if (isOwn) {
  console.log(`our: ${prop}`);
} else {
  console.log(`inherited: ${prop}`);
}
}

// F.prototype
let bird = {
  eats: true
};

function Hummingbird(name) {
  this.name = name;
  console.log(name);
}

Hummingbird.prototype = bird;

let hummingbird = new Hummingbird('emerald hummingbird');

console.log(hummingbird.eats);

function BlueJay() {}
console.log(BlueJay.prototype.constructor == BlueJay);

let bluejay = new BlueJay();

console.log(bluejay.constructor == BlueJay);

let humming1 = new Hummingbird('emerald');
let humming2 = new Hummingbird('ruby');

// nothing above Object.prototype

console.log(Object.prototype.__proto__);

// implementing a polyfill in String.prototype

if (!String.prototype.repeat) {
  String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
  };
}

console.log('la'.repeat(3));

// borrowing from prototype

let objBorrow = {
  0: 'hello',
  1: 'world',
  length: 2
};

objBorrow.join = Array.prototype.join;
console.log(objBorrow.join(' '));

// internal algorithm of built-in join method only cares about indexes and length, doesn't check if the object is an array

// modern ways of setting/getting the prototype

let someAnimal = {
  eats: true
};

let someRabbit = Object.create(someAnimal);
// same as __proto__: animal

console.log(someRabbit.eats);

console.log(Object.getPrototypeOf(someRabbit) === someAnimal);
Object.setPrototypeOf(someRabbit, {});
// changes prototype of someRabbit to {}

let someRat = Object.create(someAnimal, {
  jumps: {
    value: true
  }
});

console.log(someRat.jumps);

// better object cloning with Object.create

let clone = Object.create(Object.getPrototypeOf(someRat), Object.getOwnPropertyDescriptors(someRat));

console.log(clone.jumps);

// using Map for storage instead of plain objects

let map = new Map();

let key = '__proto__';
map.set(key, 'some value');

console.log(map.get(key));

// associative array
let associativeArray = Object.create(null);

let associativeKey = '__proto__';
associativeArray[associativeKey] = 'some value';


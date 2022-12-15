const name = thisName.call({ name: 'Ted' }); 

console.log(name); // Ted

function thisName() {
  return this.name;
}

// binding this

function thisName() {
  return this.name;
}

const newFunction = thisName.bind({name: 'Bob'});
const result = newFunction();
console.log(result); // "Bob"

// solution

function thisNameSolution() {
  return this.name;
}

module.exports = thisNameSolution.bind({ name: 'Bob' });

const obj = {
  name: 'Bob',
  getName: function() {
    return this.name;
  }
}

const objName = obj.getName();

console.log(objName); // Bob

// unbound function

const celebrities = {
  'Will Smith': 51,
  'Matt Damon': 49,
}

function fetchAge(name, cb) {
  cb(celebrities[name]);
}

// const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, (age) => {
      this.age = age;
    });
}

// taking shape

/* 
store x and y arguments in an object 'position' on the instance (this)
*/
// Our Shape "Constructor"
function Shape(x, y) {
  // store x and y in this.position
  this.position = {x, y};
}

Shape.prototype.move = function(x, y) {
  this.position.x += x;
  this.position.y += y; 
}

const shape = new Shape(1, 1);

shape.move(1, 4);

console.log( shape.position.x ); // 2
console.log( shape.position.y ); // 5


// circle shape
/* 
pass arguments to shape via call
store radius on Circle instance
*/

function Circle(x, y, radius) {
  Shape.call(this, x, y /* pass arguments to shape */);
  // store radius on this
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

const circle = new Circle(5,10,15);

console.log(circle.position.x); // 5
console.log(circle.position.y); // 10
console.log(circle.radius); // 15

// create rectangle

function Rectangle(x, y, height, width) {
  Shape.call(this, x, y);

  this.height = height;
  this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.flip = function() {
  const width = this.width;

  this.width = this.height;
  this.height = width;
}

const rect = new Rectangle(10, 20, 20, 40);

console.log(rect.position.x, rect.position.y); // 0, 0
console.log(rect.height, rect.width); // 20, 40

rect.flip();

// CLASSES

// hero class

class Hero {
  constructor(health) {
    this.health = health;
  }
  takeDamage(num) {
    this.health -= num;
  }
}

const hero = new Hero();

console.log(hero.health); // 50

hero.takeDamage(5);

console.log(hero.health); // 45

// warrior subclass

class Warrior extends Hero {
  constructor(health) {
    super(health); 
    this.rage = 0;
  }
  takeDamage(damage) {
    super.takeDamage(damage);
    this.rage += 1;
  }

}

const warrior = new Warrior();

console.log(warrior.rage); // 0

console.log(warrior.health, warrior.rage); // 50, 0

warrior.takeDamage(10);

console.log(warrior.health, warrior.rage); // 40, 1


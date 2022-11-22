// create a basic javascript object

let dog = {
  name: 'hailey',
  numLegs: 4
};

// dot notation to access properties of an object

console.log(`${dog.name} ${dog.numLegs}`);

// create a method of an object

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};

duck.sayName();

dog.sayName = function() {return `the name of this dog is ${dog.name}.`}

console.log(dog.sayName());

// make code more reusable with this keyword

/* 
if variable name changes, code referencing original name would need to be updated as well
this keyword avoids this issue

here, this refers to the object that the method is associated with.
if variable name changes, behavior stays the same 
*/

let pig = {
  name: 'piggy',
  numLegs: 4,
  sayName: function() {return `the name of this animal is ${this.name}.`}
}

// define a constructor function

/* 
constructors are functions that create new objects

define properties and methods that will belong to a new object instance

blueprints to create new objects

constructors are defined with a capitalized name

constructors use this keyword to set properties of the objects they will create

constructors define properties and behavior instead of returning a value as other functions might
*/

function Bird() {
  this.name = 'albert';
  this.color = 'blue';
  this.numLegs = 2;
}

// use a constructor to create objects

/* 
this inside the constructor always refers to the object instance being created

new operator is used when calling a constructor

new operator tells javascript to create a new instance of Bird called blueBird

without new, this would not point to the newly created object.

*/

let blueBirt = new Bird();

// extend constructors to receive arguments

function Dog(name, color) {
  this.name = name;
  this.color = color;
  // this.numLegs = 4;
}

let terrier = new Dog('doggy', 'brown');

// verify an object's constructor with instanceof

/* 
an object created with a constructor, is an instance of its constructor

instanceof compares an object to a constructor returning a boolean validating whether it was created with the constructor

*/

console.log(terrier instanceof Dog);

let bulldog = {
  name: 'bully',
  color: 'white',
  numLegs: 4
}

console.log(bulldog instanceof Dog);

// understand own properties

/* 
own properties are defined directly on the instance object.

each instance has its own separate copy of these properties



push own properties to an array
*/

let ownProps = [];

for (let property in terrier) {
  if (terrier.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

let ownProps2 = [];

for (let property in bulldog) {
  if(bulldog.hasOwnProperty(property)) {
    ownProps2.push(property);
  }
}

console.log(ownProps2);

// prototype properties to reduce diplicate code

/* 
in previous examples, numLegs has been fixed
each instance would have a duplicate variable

prototype of a class fixes this

properties in the prototype are shared among all instances of a class

adding a property in a class prototype
*/

Dog.prototype.numLegs = 5;

console.log(terrier.numLegs);

let puggle = new Dog('peanut', 'brown');

console.log(puggle.numLegs);

// iterate over all properties

/* 

two kinds of properties ( own and prototype )

own are defined directly on the object instance itself

prototype properties are define on the prototype


adding own and prototype properties of the same instance to separate arrays
*/

let ownProperties = [];
let prototypeProperties = [];

for (let property in puggle) {
  if (puggle.hasOwnProperty(property)) {
    ownProperties.push(property);
  } else {
    prototypeProperties.push(property)
  }
}

console.log(ownProperties);
console.log(prototypeProperties);

// understand the constructor property

/* 
the constructor property is a reference to the constructor function that created the instance

it is possible to check for this property to find out what kind of object it is

the constructor property can be overwritten

*/

function joinDogFraternity(candidate) {
  let fraternity = [];
  if (candidate.constructor === Dog) {
    fraternity.push(candidate);
    return fraternity;
  } else {
    return false;
  }
}

console.log(joinDogFraternity(terrier));
console.log(joinDogFraternity(puggle));
console.log(joinDogFraternity(bulldog));

// change prototype to a new object

Bird.prototype.eat = function() {
  return `nom nom nom`;
}

Bird.prototype.describe = function() {
  return `my name is ${this.name}`;
}

/* 
this process of adding properties to the prototype one by one becomes tedious

is more efficient to set the prototype to a new object that already has those properties
*/

Dog.prototype = {
  // numLegs: 4,
  constructor: Dog,
  eat: function() {
    return `nom nom nom`;
  },
  describe: function() {
    return `my name is ${this.name}.`
  }
}

// set the constructor property when changing the prototype

/* 
manually setting the prototype to a new object erases the constructor property


*/
console.log(`constructor property`);
console.log(puggle.constructor === Dog);
console.log(puggle.constructor === Object);
console.log(puggle instanceof Dog);

/* 
adding constructor: Dog to the prototype manual object
*/

function Reptile(name, color) {
  this.name = name,
  this.color = color
}

let chameleon = new Reptile('camilo', 'green');

console.log(chameleon);
console.log(chameleon instanceof Reptile);

// Reptile.prototype = {
//   constructor: Reptile,
//   eat: function() {
//     return `nom nom nom`;
//   },
//   describe: function() {
//     return `my name is ${this.name}.`
//   }
// }

console.log(chameleon.constructor);
console.log(chameleon instanceof Reptile);
console.log(chameleon instanceof Object);

// understand where an object's prototype comes from

/* 
an object inherits its prototype directly from the constructor function that created it

*/

console.log(Reptile.prototype.isPrototypeOf(chameleon));
console.log(Dog.prototype.isPrototypeOf(puggle));

// understanding the prototype chain

/* 
all objects (few exceptions) have a prototype

an object's prototype is an object itself

because a prototype is an object, it can have a prototype

Class.prototype will have Object.prototype as prototype

hasOwnProperty method is defined in Object.prototype which can be accessed by Class.prototype

prototype chain
Reptile is the supertype of chameleon
chameleon is the subtype
Object is a supertype for both Reptile and chameleon

Object is a supertype for all objects in javascript

*/

console.log(typeof Reptile.prototype);
console.log(Object.prototype.isPrototypeOf(Reptile));

// use inheritance so you DRY

/* 
having repeated code means more work to maintain and more room for errors

*/

// ES6 Class syntax

class Rabbit {
  constructor(name, color) {
    this.name = name,
      this.color = color;
  }
  describe() {
    return `my name is ${this.name}`
  }
}

let bunny = new Rabbit('little one', 'white');

// prior ES6 class syntax

// Reptile.prototype.constructor = Reptile;

// packing all prototype properties in an object
Reptile.prototype = {
  constructor: Reptile,
  describe: function() {
    return `my name is $`
  }
}

console.log(`chameleon describe: ${chameleon.describe}`);

console.log(bunny.describe());

/* 

create a supertype (parent class) 

*/

function Animal() {
  species = human
};

Animal.prototype = {
  constructor: Animal,
  describe: function() {
    return `I am a ${Animal.species}`
  },
  eat() {
    return `nom nom nom`
  }
}

// inherit behaviors from a supertype

/* 
new constructor syntax has disadvantages for inheritance
Object.create(Supertype.prototype) is best practice (without any ES6 syntax)
*/

// let newAnimal = new Animal();


let animal = Object.create(Animal.prototype);

console.log(animal.eat());

// set the child's prototype to an instance of the parent

// ES6 CLASS SYNTAX 

class Fish {
  constructor(name, color) {
    this.name = name,
    this.color = color;
  }

  eat() {
    return `nom nom nom`
  }
}

let betta = new Fish('monja', 'red');

// Fish.prototype = Object.create(Animal.prototype);

console.log(betta.eat());

// ES5 SYNTAX
function Bats(name, color) {
  this.name = name,
  this.color = color
}

Bats.prototype = Object.create(Animal.prototype);

let bat = new Bats('zubat', 'purple');

console.log(bat.eat());

// resets an inherited constructor property

/* 
an object inheriting its prototype from another object also inherits the supertype's constructor property

*/
console.log(bat instanceof Bats);
console.log(bat instanceof Animal);

Bats.prototype.constructor = Bats;
let newBat = new Bats('batz', 'black');

console.log(newBat instanceof Animal);

// add methods after inheritance

/* 
constructor function that inherits its prototype object from a supertype can still have its own methods
*/

Fish.prototype.swim = function() {
  return `I'm swimming!`;
}

console.log(betta.swim());

/* 
function Animal() {}

Animal.prototype.eat = function() {console.log('nom nom nom');}

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
}

let beagle = new Dog();
*/

// override inherited methods

/* 

object can inherit behavior from another object by referencing its prototype object

ChildObject.prototype = Object.create(ParentObject.prototype);

ChildObject.prototype.methodName = function() {...}

overriding a method is done the same way by using the same method name of the parent

duck (instance of Bird) has eat() NO
Bird (subtype of Animal) has eat() YES, stop searching
Animal (supertype of Bird) has eat() YES, but JS stopped at Bird
Object (supertype of Animal) has eat() NO, but JS stopped at Bird
*/

// use a Mixin to add common behavior between unrelated objects

/* 

*/
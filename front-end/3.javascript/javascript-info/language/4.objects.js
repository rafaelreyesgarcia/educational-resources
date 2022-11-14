// square brackets

let user = {
  name: 'john',
  age: 30
}

let retrieveName = () => {
  return 'name';
};

let nameRetrieved = retrieveName();

console.log(user[nameRetrieved]);

// computed properties
let fruitFunction = (param) => {
  let fruitSelection = param;
  return fruitSelection;
}

let fruit = fruitFunction('apple');
let bag = {
  [fruit]: 5
};

console.log(bag.apple);

// the same as 
let fruitNormal = fruitFunction('apple');
let bagNormal = {};
bag[fruitNormal] = 5;

// in operator
let userName = {name: 'kelley', age: 23, bug: undefined,};
console.log('in operator');
console.log('name' in userName);
console.log('test' in userName);
console.log('bug' in userName);

console.log('undefined strict comparison')
console.log(userName.name === undefined);
console.log(userName.test === undefined);
console.log(URLSearchParams.bug === undefined);
// bug property would trigger a true, yet is not because is empty, 
// but because an empty value is explicitly assign to it

// for in loop
console.log('for in loop');
let userLoop = {
  name: 'John',
  age: 30,
  isAdmin: true
};

for (let key in userLoop) {
  console.log(key);
}

// OBJECT REFERENCES AND COPYING

/* 
copying a string
each are independent variables,
each stores the string hello
*/

let message = 'hello!';
let phrase = message;

/* 
copying an object
object is stored in memory
the variable has a reference to it
performing actions on the object, is done on the actual object,
when an object is copied,
the reference is copied but not the object itself
*/

let userCopy = {
  name: 'John',
};

/* 
two references, one object
*/

let userObj = {name: 'john'};
let adminObj = userObj;

adminObj.name = 'pete';

console.log(userObj.name);

/* 
empty objects aren't equal, as they don't reference the same existing object,
they are empty
*/

let a = {};
let b = {};

console.log(a == b);

/* 
cloning an object
*/

let userOrigin = {
name: 'rafael',
age: 29
};

let clone = {};

for (let key in userOrigin) {
  clone[key] = userOrigin[key];
}

clone.name = 'clone';

console.log(userOrigin.name);
console.log(clone.name);
console.log(clone.age);

/* 
merging multiple objects into one
*/
   
let userOriginMerge = {name: 'rafael'};
let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

Object.assign(userOriginMerge, permissions1, permissions2);

/* 
simple cloning
*/

let objectClone = Object.assign({}, userOriginMerge);

console.log(objectClone);

/* 
nested cloning
object properties referencing other objects
*/

let userNested = {
name: 'kelley',
sizes: {
  height: '176',
  width: 50
}
};

let cloneNested = structuredClone(userNested);

console.log(userNested === cloneNested.sizes);

/*
circular references properly cloned 
*/

let userCircular = {};

userCircular.me = userCircular;

let cloneCircular = structuredClone(userCircular);

console.log(cloneCircular === userCircular.me);

/* 
becoming unreachable
*/
   
let userUnreachable = {
  name: 'rafael'
};

console.log(userUnreachable);

userUnreachable = null;

console.log(userUnreachable);

/* 
function linking objects
*/
   
console.log('linking objects');

function marry(man, woman) {
  woman.husband = man,
  man.wife = woman

  return {
    father: man,
    mother: woman
  }
}

let man = {name: 'rafael'};
let woman = {name:'kelley'};
let family = marry(man, woman);

console.log(family);

/* 
shorthand syntax for adding a method to an object
does the same as:
userMethod = {
 sayHi: function() {
     console.log('hello');
 }
}
*/
   
userMethod = {
  sayHi() {
    console.log('hello!')
  }
};

console.log(userMethod.sayHi());

/* 
this keyword
*/

let userThis = {
 name: 'kelley',
 age: 23,

 sayHi() {
     console.log(this.name);
 }
};

console.log(`sayHi: ${userThis.sayHi()}`);

/* 
this is not bound
*/

let user1 = {name: 'rafael'};
let user2 = {name: 'kelley'};

function sayHello() {
  console.log(this.name);
}

user1.f = sayHello;
user2.f = sayHello;

console.log(user1.f());
console.log(user2['f']());

/* 
constructor function
*/
   
function UserConstructor(name) {
  this.name = name;
  this.isAdmin = false;
}  

let userNew = new UserConstructor();

/* 
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User(jack);

is the same as 

let user = {
  name: 'jack',
  isAdmin: false
}
*/

/* 
creating and calling the function at the same time
encapsulates code without further reuse
*/
   
let userOptimized = new function() {
 this.name = 'John';
 this.isAdmin = false;
}

/* 
optional chaining
*/

let userAdmin = {
  admin() {
    console.log('I am an admin');
  }
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.();

/* 
creating a symbol
*/
   
let id = Symbol('id');

let userSymbol = {
  name: 'rafael'
};

let idSymbol = Symbol('id');
userSymbol[idSymbol] = 1;
console.log(userSymbol[idSymbol]);
   
   
 
   
   


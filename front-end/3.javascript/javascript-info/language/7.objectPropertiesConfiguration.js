'use strict'

let someone = {
  name: 'john'
};

let someone_descriptor = Object.getOwnPropertyDescriptor(someone, 'name');

console.log(JSON.stringify(someone_descriptor, null, 2));

let someUser = {};

// writable property
Object.defineProperty(someUser, 'name', {
  value: 'rafael',
  writable: true
});

let someUser_descriptor = Object.getOwnPropertyDescriptor(someUser, 'name');
console.log(JSON.stringify(someUser_descriptor, null, 2));

// enumerable property
let aUser = {
  name: 'kelley',
  toString() {
    return this.name;
  }
};

for (let key in aUser) console.log(key);

console.log(Object.keys(aUser));

// non-enumerable property
Object.defineProperty(aUser, 'toString', {
  enumerable: false
});

for (let key in aUser) console.log(key);

// non-enumerable excluded 
console.log(Object.keys(aUser));

// non-configurable
let player = {
  name: 'gee'
};

Object.defineProperty(player, 'name', {
  configurable: false
});

player.name = 'man';
// delete player.name; not possible, throws error

// forever sealed constant 

let sealed = {
  name: 'irreversible'
};

Object.defineProperty(sealed, 'name', {
  writable: false,
  configurable: false
});

/* 
THROWS ERROR
sealed.name = 'anotherName';
delete sealed.name;
Object.defineProperty(sealed, 'name', {value: 'anotherName'});
*/

// Object.defineProperties
let npc = {};
Object.defineProperties(npc, {
  name: {value: 'mangee', writable: false},
  role: {value: 'villager', writable: true}
});

// all descriptors at once
let allDescriptorsOfNPC = Object.getOwnPropertyDescriptors(npc);

console.log(allDescriptorsOfNPC);

// combined with defineProperties, this is a technique to flag-aware clone an object

let sourceObject = {
  name: 'rafael',
  role: 'developer',
  sayHi() {
    console.log(`hi! my name is ${this.name}`);
  }
}

let cloneOfObject = Object.defineProperties({}, Object.getOwnPropertyDescriptors(sourceObject));

console.log(cloneOfObject);

/* 
cloning can be done by
for (let key in object) {
  clone[key] = object[key]
}
*/

// GETTERS SETTERS

let obj = {
  get propName() {
    console.log(`code executed on getting obj.propName`)
  },

  set propName(value) {
    consolel.log(`code executes on setting obj.propName = value`)
  }
}

// accessor property

let accessor = {
  name: 'rafael',
  surName: 'reyes',

  get fullName() { 
    return `${this.name} ${this.surName}`;
  },

  set fullName(value) {
    [this.name, this.surName] = value.split(' ');
  }
};

console.log(accessor.fullName);
// accessor property doesn't require to be called as it only reads the value the function returns

accessor.fullName = 'kelley smith'

console.log(accessor.fullName);

// create accessor with defineProperty as descriptors are different but process is the same
let user = {
  name: 'kelley',
  surName: 'smith'
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surName}`;
  },

  set(value) {
    [this.name, this.surName] = value,split(' ');
  }
});

let thisUser = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log('name is too short');
      return;
    }
    this._name = value;  
  }
};

thisUser.name = 'pete';
console.log(thisUser.name);
thisUser.name = 'e';

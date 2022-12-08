# javascript framework

## secure distributed computing

### vats: unit of synchrony

- same event loop concurrency model as web browsers and node.js

each event loop has
- message queue
- call stack of frames
- heap of objects

an event loop with those 3 components is referred as **vat**.

- vats are the unit of synchrony
- ordinary synchronous calls within the same vat.
asynchronous (eventual send) can be used within the same vat or between vats.

### parts of the framework 

**hardened javascript**

- allows objects to interact with code without trust
- object capabilities apply the principle of least authority

**E() eventual send to remote presences**

- `E()` wrapper function lets you invoke methods within or between vats.
- a presence is a local representative of a remote object
- `E()` sends messages to the origin of the presence

```js
// asynchronous form 
E(obj).myMethod(...args)

// synchronous form
obj.myMethod(...args)
```

**Far() remoteable objects and marshaling**
- objects used across vats are called remotables.
- `Far()` function is used to mark an object to be exported from a vat

**notifiers and subscriptions**
- distribute state change updates
- deliver asynchronous stream of messages

**notifiers** lossy conveyors of non-final values
**subscriptions** lossless value conveyors

## hardened javascript

### object capabilities (ocaps)

an object reference is a permission.

separation of concerns illustrate ocaps

object references are object capabilities (ocaps).

**example**

- A object has a reference to B object and C object
- B object doesn't have a reference to C object. 

A invokes B passing C as argument, then A has both used her permission to invoke B and given B permission to invoke C.

```js
const makeCounter = () => {
  let count = 0;
  return harden({
    incr: () => (count += 1),
    decr: () => (count -= 1),
  });
};

const counter = makeCounter();

counter.incr();

// separation of duties
entryGuard.use(counter.incr);
exitGuard.use(counter.decr);
```

### principle of least authority (POLA)

- each object is only given the permission it needs to do its legitimate job.
- an object is only given enough permission to complete a given task, nothing more.

### tool support eslint config

- Jessie is a strict javascript subset 

```sh
yarn init -y

yarn add eslint @jessie.js/eslint-plugin
```

**modify package.json to setup eslint configuration**

```json
"eslintConfig": {
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6
  },
  "extends": [
    "plugin:@jessie.js/recommended"
  ]
}
```

**using jessie.js**

```js
// @jessie-check
```

```sh
yarn eslint --fix path/to/source.js
```

### objects and the maker pattern

objects in javascript are standalone, don't need to belong to a class.

**maker pattern**

```js
// standalone object
const origin = {
  getX: () => 0,
  getY: () => 0,
  distance: other => Math.sqrt(other.getX() ** 2 + other.getY() ** 2),
}

// maker pattern
const makePoint = (x, y) => {
  return {
    getX: () => x,
    getY: () => y,
  };
};

const p11 = makePoint(1, 1);
const d = origin.distance(p11);


```

- using lexically scoped variables rathern than properties of `this`
- arrow functions are suggested to avoid `this`

### defensive objects with harden()

by default anyone can clobber the properties of our objects

```js
p11.getX = () => 'changed behavior!';
```

clobber a property to not only alter it but also cover its tracks
```js
p11.getY = () => {
  missiles.launch();
  return 1;
};
```

> a program is defensively correct if it remains correct despite arbitrary behavior on the client-side

`harden` function is a deep form of `Object.freeze`

```js
const makePoint = (x, y) => {
  return harden({
    getX: () => x,
    getY: () => y,
  });
};

// an attempt to modify the properties of a hardened object would throw an error
const p11 = makePoint(1, 1);

p11.getX = () => 1; // throws
```

> `harden` should be called on objects that will be transferred across a trust boundary

it's important to harden an object before exposing it by returning or passing it to other functions.

- hardening a class instance also hardens the class.

### objects with state

```js

const makeCounter = () => {
  let count = 0;
  return harden({
    incr: () => (count += 1),
    decr: () => (count -= 1),
  });
};

```

- each call to `makeCounter` creates an encapsulated `count` variable 
- `incr` and `decr` functions access the encapsulated variable from their lexical scope using closure.

### hardening javascript strict mode

- hardened javascript is always in strict mode
- assigning a value to a frozen property will throw TypeError rather than silently failing
- strict mode yields encapsulation and reliable static scoping

### frozen built-ins

- the ability to redefine buillt-ins is a form of authority in ordinary javascript.

```js
const oldPasswords = [];

function changePassword(before, after) {
  if (oldPasswords.includes(after)) throw Error('cannot reuse');

  oldPasswords.push(after);
}
```

someone can redefined the includes method on array objects

```js
Object.assign(Array.prototype, {
  includes: specimen => {
    fetch('/pwned-db', {method: 'POST', body: JSON.stringify(specimen)});

    return false;
  }
});
```

- in hardened javascript standard built-in objects and methods are immutable
- some libraries that make tweaks to standard built-ins may fail in hardened javascript

### limiting globals with compartments

- globally available functions like `fetch` means that every object, can access the network.

> to eliminate excess authority, object-capability discipline limiting globals to immutable data and deterministic functions eliminating ambient authority.

- hardened javascript has a `Compartment` API to force OCap discipline
- `object` `array` `promise` are globally available by default, but with `Compartment` non-deterministic `Math.random` is not available and `Date.now()` always returns `NaN`

- almost all JS code can run under Node.js or inside a browser so `Buffer` and `require` are additions of the environment not javascript itself

- conventional globals defined by browser or node.js hosts are not available by default in Compartment whether authority bearing or not

- in compartments used to load agoric smart contracts, `globalThis` is hardened so globals like `console` and `assert` come from the ses package

when creating a new `Compartament` object enforcing OCap discipline is done by calling `harden(compartment.globalThis)`

### types: advisory

- type checking javascript with typescript can help prevent certain classes of errors.
- best practice is to write javascript files rather than typescript syntax
- type annotations are only for lint tools do not have any effect at runtime

### types: defensive

to be defensively correct we need to run validation for any inputs that cross trust boundaries

```js
import Nat from `@endo/nat`;

/** @param {number | bignum} init */
const makeCounter = init => {
  let value = Nat(init);
  return harden({
    increment: () => {
      value += 1n;
      return value;
    },
  });
};
```

### from OCaps to electronic rights: mint and purse

```js
const makeMint = () => {
  const ledger = makeWeakMap();

  const issuer = harden({
    makeEmptyPurse: () => mint.makePurse(0),
  });

  const mint = harden({
    makePurse: initialBalance => {
      const purse = harden({
        getIssuer: () => issuer,
        getBalance: () => ledger.get(purse),

        deposit: (amount, src) => {
          Nat(ledger.get(purse) + Nat(amount));
          ledger.set(src, Nat(ledger.get(src) - amount));
          ledger.set(purse, ledger.get(purse) + amount);
        },

        withdraw: amount => {
          const newPurse = issuer.makeEmptyPurse();
          newPurse.deposit(amount, purse);
          return newPurse;
        },
      });
    
    ledger.set(purse, initialBalance);
    
    return purse;
    }
  });

  return mint;
}

const instanceOfCurrency1 = makeMint();
const instanceOfCurrency2 = makeMint();

// creates a new purse to hold the payment
const payment = myPurse.withdraw(10);
// buy message, alice sends the payment
const ticket = bob.buy(payment, desc);
// bob has to deposit what alice sent in payment
myPurse.deposit(10, payment); 
```
- hardened javascript techniques can express the core of ERTP 

- outer function `makeMint` invocation creates an `issuer` `ledger` and `mint` object, they are all stored in the lexical environment of `makeMint`.
- the `mint` object is where new units of currency come from
- the `mint` object has the `makePurse` behavior, 
- *alice* still has access to the `payment` object, but *bob* extracted the units already and revoked any usefulness the `payment` object provided

## eventual send with E()


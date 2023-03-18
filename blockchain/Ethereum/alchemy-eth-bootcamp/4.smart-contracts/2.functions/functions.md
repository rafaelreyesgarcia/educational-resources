# functions

**view** defines that no state will be altered,only read.

**pure** defines no state will be written to or read.

by reading state variables a function can return a newly computed value without changing the state variables.

a `view` function can't write to storage

a `pure` function wont read or write to a contract's state, instead it will perform independent operations.

implicit return is allowed

a function writes to storage altering state when not being `pure` or a `view` function

## visibility

`public` any contract or EOA can call the function

`external` only external contracts and EOAs can call, no internal calling

`internal` only current contract along with inheritance chain can call

`private` only this contract can use the function

state variables can also be declared with visibility specifiers

## 1. arguments

constructor is similar to constructor classes in object oriented languages.

invoked only oncne during contract's deployment.

variable shadowing is prevented by prefixing the constructor argument with an underscore `_`

variable shadowing can happen as `this` keyword is not used.

### variable shadowing

javascript variable scope...

`let` scope is block.

```js
if(true) {
  let a = 'rafael';
}

console.log(a); // ReferenceError
```

javascript shadowing

```js
let a = 'rafael';

if(true) {
  let a = 'notrafael';
}

console.log(a) //notrafael

class Food {
  constructor() {
    this.name = 'pizza';
  }

  changeName(name) {
    this.name = name;
  }
}
// not shadowed
```

`this` is used to refer to member variables within the class.

the member is prefixed with the `this` keyword


solidity shadowing
```
string public name;

constructor(string name) {
  // shadowing
}
```

shadowing will cause the compiler to throw an error

`MyContract.name = name` can overcome shadowing but is not best practice

`_variableName` is best practice

## 2. increment

contracts can defined functions that can be invoked by transactions or as queries.

**transactions** originate from **EOAs** a transaction's purpose is to modify state on the blockchain.

transactions incur a cost depending on how much gas is used.

broadcasted transactions can be signed if they include the `v` `r` `s` components of a digital signature that correspond to a public address.

`data` passes arguments to functions

a **query** doesn't incur any gas cost, don't modify state and will be run by the single node responding to it

the `view` and `pure` modifiers allow to define functions that will accept queries or transactions

available operands in solidity

- `-=`
- `*=`
- `/=`
- `%=`
- `|=`
- `&=`
- `^=`
- `++`
- `--`

## 3. view addition

> returning values is only useful for internal functions and blockchain queries.

queries and communicating between contract accounts require returned values

`eth_call` can directly call a function to get a direct response of the state of a contract

for contract communication, returning a value is crucial

when a transaction is broadcasted to ethereum, miners will add them to a local memory pool

they pick up some txs from this memory pool

generally done by `gasPrice` set on tx

transactions are asynchronously and occur in an unpredictable timeframe.

returned values are ephimeral and not stored to the blockchain.

lookup of values is done with `events`

the `returns` declaration helps the compiler check for compile-time errors but also generates ABI.

helps external programs to communicate with a contract

`view` will guarantee state won't be modified

`view` - read-only

## 4. pure functions

functions that won't read/write state

compiler throws an error if attempting to modify state in a pure function.

alternative syntax is to declare the returned variable in `returns` and simply assign an expression to it to implicitly return it

## 5. overloading functions

two functions can be declared with the same identifier(name) if they have different parameters.

solidity call function signatures that match the arguments provided.

solidity can return two values (tuple)

`returns` defines the two value types

wrap values in a parenthesis.


tuples are not an official data structure, are just used as a temporary structure to return values or do assignment destructuring

data types can be mixed in a tuple

assignment destructuring

```
(uint x, uint y) = addTwo(4, 8);

console.log(x) // 6

console.log(y) // 10




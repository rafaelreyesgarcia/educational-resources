# intro to solidity

solidity is object-oriented, high-level language

resembles c++, python, javascript

solidity is designed to be compiled and run on the EV.

- statically typed (variables must be defined at compile time)
- supports inheritance (inheritance chains)
- libraries
- complex user-defined types

a smart contract is a collection of functions (code, behavior) and state (data) that lives on an ethereum address

solidity compiles into bytecode in order to be EVM-compatible

// SPDX-License-Identifier: MIT

defines what license rules fall on a smart contract

`pragma` tells which version of solidity to compile the contract with

`contract` behaves similar to a `class`

solidity uses semantic versioning

`constructor()` is called during deployment. Used to define the initial state of the contract.

state variables are initialized to default values if no initialization is performed

a script deployment for a constructor

```js
const myContractInstance = await contract.deploy('0x38cE03CF394C349508fBcECf8e2c04c7c66D58CB', true)
```

making a variable `public` creates a getter function so the variable is accessible via a `get` call

state variables can be declared as `public`, `private` or `internal` not `external`

`uint` has no sign and `int` can be a signed integer.

`uint` is by default 256 bits.

## solidity datatypes

- boolean (bool)
- string (string)
- integers (uint or int)
- bytes
- enums
- arrays
- mappings
- structs
- address
- address payable

address holds a 20 byte value and an address payable has additional members `transfer` and `send`

addresses are first-class types so when passed to a function or cast from a contract, they have special attributes and methods

> smart contract's own balance -> address(this).balance

## smart contract context

when a smart contract function is called via a transaction, the called function gets info passed to it known as context variables

message context

`msg.sender` current tx sender add

`msg.value` `value` property of current tx

transaction context

`tx.gasLimit` returns `gasLimit` property of current tx

block context

`block.number`

`block.timestamp`

# basic data types

## booleans

state variables are stored in the persistent memory of the contract.

modifying a state variable, modifies it for everyone that interacts with the contract

data types have default values, boolean is false

the keyword function creates a `getter` function for the variable

the variable becomes accessible by invoking the variable `myVariable()`

### ABI validations

the ABI is an interface output from solidity compiler that provides information about the smart contract to an external observer.

## unsigned integers

integers include all positive and negative integers without fractions.

unsigned integer is an integer that has no sign

`uint8` means there's eight bits provided for the value

eight bits can range from `00000000` to `11111111` this range represents 256 unique values (0 to 255)

in decimal, unsigned value of `00000000` is `0` and `11111111` is `255`

### integer overflow / underflow

before v0.8.4 integer overflow could ocurr when a result went over its allocated memory range.

suming uint8 and uint8 where the value exceeds 255, then there would be overflow.

after v0.8.4 txs with integer overflow will fail, get a runtime exception

an integer could underflow and flip to the top side of its range

you can't store a value outside 0-255 in an `uint8`

the range for `uint16` is 0 to 65535

its valid to add `uint8` with a `uint16` and store them in a `uint256`

## signed integers

`int256` will store 256 bits of memory.

the range covers both negative and positive numbers

`int8` ranges from `-128` to `127`

## string literals

create strings of characters using double quotes

any fixed value is a literal.

a string literal can be stored in both `bytes` and `string` types

```
bytes msg1 = "rafael";
string msg2 = "rafael";
```

long human readable messages are better to store in `string` types

if string is shorter than 32 bytes, its efficient to store it in a fixed-size byte array (`bytes32`)

simplifies computation as memory is allocated ahead of time.

both bytes and strings will allocate memory dynamically depending on size of string.

many characters in UTF-8 encoding can be represented with 1 byte.

quite often long strings are stored separately on other distributed services.

a hash representation can be stored on the blockchain.

## enum type

```
enum Directions = {
  Up,
  Left,
  Down,
  Right
}

if (player.movement == Directions.Up) {

} else if (player.movement == Directions.Left) {

}

```

enum is a structure that other contracts can use to ensure uniformity

enum values are stored as uints if there's less than 256 values is stored as `uint8`

more than 256 values then its stored as `uint16`


# Language Description

## **solidity source file**

can contain
- contract definitions
- import
- pragma
- for directives
- struct, enum, function, error and constant variable definitions
  
### **SPDX license identifier**

the solidity compiler encourages the use of a machine-readable SPDX licence identifier

it doesn't validate the license is part of the SPDX whitelist, it supplies it in the bytecode metadata

solidity follows npm recommendation
- **UNLICENSED**
no usage allowed
- **UNLICENSE**
grants rights to everyone
  
### **pragmas**

pragma keyword enables compiler features or checks

pragma directive always local to the source file

version pragma should be annotated to reject compilation with future compilers that could introduce unwanted changes

`pragma solidity ^0.5.2;`
  
### **ABI coder pragma**

pragma abicoder v2 or v2

different implementations of the ABI encoder, decoder

**v2**
works arbitrarily on nested arrays and structs'
      
extensive validation and safety checks (higher gas cost, higher security)

### **experimental pragma**

enable features of the compiler or language that are not yet enabled

SMTChecker
  
### **importing source files**

import "filename";
    
**import path**

imports all global symbols from filename and symbols imported there, into current global scope

not recommended it unpredictably pollutes namespace
    
solidity inherits ES6 import/export syntax 

doesn't support default export

```js
import * as symbolName from "filename";
``` 

all global symbols become available through symbolName
```js

symbolName.symbol
    
import "filename" as symbolName 
  variant not present in ES6

import {symbol1 as alias, symbol2} from "filename";
```
### **import paths**

compiler abstracts away the details of filesystem where source files are stored to support reproducible builds on all platforms

compiler maintains an internal database (virtual filesystem) each source unit is assigned a name (opaque and unstructured identifier)

import path translates intoa source unit name used to find the corresponding source unit in the compiler's internal database

standard JSON API can provide the names and content of source files as part as the compiler input

### comments

```js
// single line
//
// multi-line
/* */
// NatSpec
/** 
 * */ 
// or 
///
// used directly above function declarations or statements
```
  
## **structure of a contract**

contracts are similar to classes in object-oriented languages

contracts can contain declarations of
- state variables
- functions
- function modifiers
- events
- errors
- struct types
- enum types
  
contracts support inheritance

contracts can be libraries and interfaces

### **state variables**

permanently stored in contract storage

uint storedData;

### **functions**

executable units of code

defined inside (most common) or outside of a contract

```sol
function bid() public payable {block};

function helper(uint x) pure returns (uint) {
  return x * 2;
}
```

function calls can happen internally or externally and have different levels of visibility

functions accept parameters and return variables to pass parameters and valus between them

### **function modifiers**

amend semantics of functions

modifiers can be overwritten

```sol
address public seller; 

modifier onlySeller() {
  require(
    msg.sender == seller,
    "only seller can call this."
  )
}
```

### **events**

convenience interfaces with the EVM logging facilities

```sol
event highestBidIncreased(address bidder, uint amount);

function bid() public payable {
  emit HighestBidIncreased(msg.sender, msg.value);
}
```
  
### **errors**

allow to define descriptive names and data when a task failed

can be used in revert statements

string descriptions are more costly than errors

erros allow you to encode data

NatSpec can describe the error

### **struct types**

custom defined types that can group several variables

```sol
contract ballow {
  struct Voter {
    uint weight;
    bool voted;
    address delegate;
    uint vode;
  }
}
```
  
### **enum types**

can be used to create custom type with a finite set of constant values

```sol
contract Purchase {
  enum State { Created, Locked, Inactive }
}
```

## **types**

static typed language

the type of each variable (state and local) needs to be declared

types can interact with each other in expressions with operators

undefined or null doesn't exist in solidity

newly declared variables have a default value depending on the type

revert function handles unexpected values

**valye types** are always copied when they are used as arguments or assignments

### **booleans**

constant true or false values 

operators
- ! logical negation
- && logical conjunction
- || logical disjunction
- == equality
- != inequality

### **integers**

signed (int) and unsigned (uint) of various sizes

uint8 uint256 in steps of 8 bits and int8 to int256

uint and int == uint256 int256

operators

- comparison <= < == != >= > evaluate to a boolean
- bit & | ^ (bitwise exclusive) ~ (bitwise negation)
- shift << >>
- arithmetic + - unary - for signed integers * / %  (modulo) ** (exponentiation)

uint32 is 0 up to 2**32 - 1

arithmetic is performed on integers unchecked or checked
    
**unchecked (wrapping) mode**
switch using unchecked { ... }

**checked mode**

default 

if result of an operation falls outside the value range of the type, the call is reverted through a failing assertion
    
**comparison**  
obtained by comparing integer values
    
**bit operations**  
performed on the two's complement representation of the number.
    
**shifts**    
type of the left hand, truncating the result to match the type.
    
**addition, substraction, multiplication**  

all arithmetic is checked for under or overflow by default

can be disabled with unchecked block
    
**division**  
in solidity division rounds towards zero
    
division on literals result in fractional values of arbitrary precision

division by zero causes a panic error

type(int).min / (-1) is the only case where a division causes overflow

**modulo**  
a % n yields the remainder r after the division of the operand a by n
    
**exponentiation**  
only available for unsigned types in the exponent

resulting type of an exponentiation is always equal to the type of the base

exp opcode is cheap

x**3 the expression x*x*x might be cheaper
    
### **fixed point numbers**

not fully supported. can be declared but can't be assigned to or from

fixed and ufixed keywords

- ufixedMxN fixedMxN
- M represents number of bits taken by the type
- N represents how many decimal points are available
- M must be divisible by 8 as it goes from 8-256
- N must be between 0-80 inclusive
- ufixed and fixed are aliases to ufixed128x18 and fixed128x18
  
### **address**

- address  
holds a 20 byte value   
can be a smart contract that doesn't accept ether  

- address payable   
has additional members transfer and send  
can send ether to  
    
difference introduced in 0.5.0
    
**type conversions**

- **implicit conversion**  
of address payable to address is allowed
address to payable must be explicit via payable(\<address>)  

- **explicit conversions**  
to and from address are allowed for 
  - uint160
  - integer literals
  - bytes20
  - contracts

only expressions of address and contract type can be converted to address payable via payable(...)

contracts need to be allowed to receive ether via receive or a payable fallback function to be converted to address payable

payable(0) exception

converting large byte size(byte32) to an address, would truncate the address. 
    
**members of addresses**
      
properties/methods of addresses 

`balance`
queries the balance of an address

`transfer`
sends ether in wei to a payable address   
fails if balance of contract is less than input  
`send`
low-level transfer  
current contract execution doesn't stop with an exception but returns false
      
`call`
`delegatecall`
the purpose of delegate call is to use library code that is stored in another contract

layout in storage in both contracts should be suitable

`staticcall`
same as call but it will revert if the called function modifies state.

take a single bytes memory parameter and returns
- success condition as boolean
- returned data (bytes memory)
      
call, delegatecall and staticcall are low-level and should only be used as last resort
  
### **contract types**

contracts define their own type

implicit conversion of contracts through inheritance

explicit convrsion to and from address payable if contract has a receive  or payable fallback funcion

before 0.5.0 contracts directly derived from the address type so there was no distinction between address and payable

contracts do not support any operators

members of contracts are external functions of the contract including public state variables

### ** fixed-size byte arrays**

bytes1, bytes2, bytes, ...bytes32

hold a sequence of bytes from one up to 32
    
**operators**

**comparison** <= < == != >= > evaluate to boolean

**bit operators** & | ^(bitwise exclusive or) ~(bitwise negation)

**shift operators << >>**

work wih uint as right operand and returns the type of the left operand

denotes the number of bits to shift by 

shifting by an int will produce a compilation error
      
index access

if x is bytesI

for 0 <= k < I 

returns the {k}-th byte (read-only)
  
### **dynamically-sized byte arrays**

- **bytes**
dynamically-sized byte array, not a value type

- **string**
dynamically-sized UTF-8 encoding string, not a value type
    
### **address literals**

hexadecimal literals that pass the address checksum test

some between 39 and 41 digits do not pass checksum test

prepend zero(for integer typep)

append zero for bytesNN types

### **rational and integer literals**

integer literals are formed from a sequence of digits in the range 0-9

octal literals do not exist in solidity 

decimal fractional literals are formed by a . 1.3

scientific notation like 2e10 is supported, the mantissa can be fractional but exponent has to be integer

literal MeE is equivalent to M * 10**E

123,000 literal can be written 
underscores 123_000 
hexadecimal 0x2eff_abde
scientific decimal 1_2e345_678

number literals retain arbitrary precision until converted to a non-literal type, computations do not overflow and divisions do not truncate in number literal expressions

(2\**800 + 1) - 2**800

results in 1 (type uint8)
    
most operators produce a literal expression except ternary operator and array subscript

255 + (true ? 1 : 0)   
255 + [1, 2, 3][0]  
should be 256  
but they are computed with uint8 so can overflow  
    
bitwise operations are not allowed if any of the two operands is fractional

exponentiation is not allowed if exponent is fractional 

shift and exponentiation with literals as base (left) and integer as exponent (right) are always performed in uint256 or int256 for negative literals
  
### **string literals and types**

string literals are written with double or single quotes

they are implicitly convertible to bytes1...32

string literals support escaoe characters
- \<newline>
- \\
- \'
- \"
- ...etc
    
string literals can only contain ASCII characters

bewteen 0x20 including 0x7E

### **unicode literals**

- prefixed with the word unicode
- can contain UTF-8 sequences
- support regular escape 

### **hexadecimal literals**

prefixed with the keyword hex

enclosed in single or double quotes
  
### **enums**

way to create user-defined types

explicitly convertible to and from all integer types

implicit conversion is not allowed

at runtime, explicit conversion checks if the value is inside the range of an enum, causes a panic error otherwise.

default value when declared is the first member

can't have more than 256 members

### **user defined value types**

similar to an alias but with stricter type requirements

type C is V  
C name of the new type  
V underlying built-in type  
C.wrap converts underlying to custom type  
C.unwrap convers from custom to underlying type  

### **function types**

variable function

function parameter

- **internal** 
can only be called inside the currenct contract, current code unit
- **external** 
consist of an address and a function signature can be passed and returned from external function calls
    
`function (<parameter types>) {internal|external} [pure|view|payable] [returns (<return types>)]`

return type can't be empty

if function should not return anything, the statement has to be omitted

functions are internal by default, internal keyword can be omitted

visibility has no default, has to be explicitly set

**conversions**

implicit conversion only if they both have identical
- parameter types
- return types 
- internal/external property
- and state mutability of A is more restrictive than B
      
> no other conversion is possible
    
if a function is payable, it also accepts a payment of zero ether.

non-payable function rejects ether sent to it, can't be converted to payable function.

if a function type variable is not initialised, calling it results in panic error, same if calling a recently deleted function.

an external function type used outside of solidity encodes the address and the function identifier in a single bytes24 type.

an internal function can be assigned to a variable of  an internal function regardless of where its defined, includes private, internal, public functions 

external functions are only compatible with public and external contract functions.

**members**

for external or public functions

`.address`
  returns address of the contract

`.selector`
  returns ABI function selector

  `.gas(uint)` and `.value(uint)` were removed in 0.7.0 now `{gas: ..., value: ...}` can be used

### **reference types**

value types you get an intependent copy whenever a variable is used

reference types can be modified through different names

- structs
- arrays
- mappings are reference types

always explicitly provide data area where the type is stored
- memory where lifetime is short
- storage for long term
    
### **data location**

data location is an additional annotation in reference types
    
three data locations
- **memory**
- **storage**
- **calldata**  
non-modifiable non-persistent where function arguments are stored, behaves like memory.  
it avoids copies and makes sure the data is immutable.  
arrays and structs with calldata can also be returned from functions.  
after 0.6.9 memory and calldata are allowed in functions regardless of their visibility.  

after 0.5.0 data location could be omitted, but now all complex types must give an explicit data location

assignments between storage and memory always create an independent copy

assignments from memory to memory only create references

changes to one memory variable are visible in other memory variables that refer to the same data

assignments from storage to local variable only assign a reference

other assignments to storage always copy

### **arrays**

can have a compile-time fixed size or can be dynamic

type of fixed array k and element type `T` is `T[k]`

array of dynamic size is `T[]`

an array of five dynamic arrays of uint 
`uint[][5]`
    
`X[3]`
array containing three elements of type `X`, even if `X` is an array (not like in C)
    
indices are zero-based

access is opposite direction of declaration
`uint[][5] memory x`

access seventh uint in the third dynamic array 
`x[2][6]`

to access third dynamic array
`x[2]`
    
`T[5] a` 
for a type `T`, then a[2] always has type `T`
    
> mappings can only be stored in storage

array elements can be any type

publicly visible functions need parameters that are ABI types.

possible to mark state variable arrays public and solidity create a getter, numeric index becomes a required parameter for the getter

**bytes and string as arrays**

bytes and string are special arrays

bytes is similar to bytes1[], packed tightly in calldata and memory.

string is equal to bytes but doesn't allow length or index access

solidity doesn't have built-in string manipulation functions but there are libraries.

strings can be compared using their keccak256-hash

`keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2))`
      
`bytes` are preferred over `bytes1[]`

`bytes1[]` has to be stored in memory, adds 31 padding bytes between elements

in storage, padding is absent

bytes are good for arbitrary-length raw byte data

string for arbitrary-length string UTF-8 data

if length can be limited to a certain number of bytes, bytes1...32 are cheaper

`byte.concat string.concat`

concatenate arbitrary number of string  and bytes values

return a single string memory or bytesmemory array containing arugments without padding

if parameters of other types have to be used, they need to be converted to either string or bytes first

bytes1...bytes32
    
**allocating memory arrays**

dynamic length arrays created using new operator

is not possible to resize memory arrays

push member function is not available
    
**array literals**

`[...]`
`[1, a, f(3)]`

it is statically-sized memory array whose length is the number of expressions

base type of the array is the type of the first expression on the list, other expressions are implicitly converted to it. Type error if implicit conversion can't be completed.

type of `[1, 2, 3]` is `uint8[3]` memory

the type of these constants is uint8

`[1, -1]` array literal is invalid because they can't implicitly convert to each other

fixed size memory arrays can't be assigned to dynamically sized memory arrays

**array members**

`length`
contains the number of elements
length of memory array is fixed, but dynamic can depend on runtime parameters

`push()`
member of dynamic storage arrays and bytes (not string), appends a zero-initialised element at the end of the array

returns a reference to the element

increasing the length of a storage array has constant gas costs

`push(x)`
dynamic storage arrays and bytes have it

function returns nothing

`pop()`
dynamic storage arrays and bytes have it

remove an element from the end of the array

implicitly calls delete on the removed element

returns nothing

decreasing the length has a cost depends on the size of the element being removed

**dangling references**

reference that point to something that no longer exists or has been moved without updating the reference

happens if an array element reference is stored in a variable and then later .pop() that element from the array source.

a `.push()` on a bytes array may switch from short to long layout in storage

dangling references must be avoided.
    
**array slices**

`x[start:end]`
start and end are expressions resulting in a uint256 type

first element is `x[start]`  
last element is `x[end-1]`

if start is greater than end or end greater than length of the array, an exception is thrown.

> unlike `array.slice()` in js for example, array slices in solidity are a type of array?

start defaults to 0 and end defaults to the length of the array

don't have any members

implicitly convertible to arrays
      
index access is relative to the start of the slice.

array slices don't have a type name.

only implemented for calldata arrays as of now

useful to decode secondary data passed in function parameters

### **structs**

define new types.

can be used inside mappings and arrays.

they can contain mappings and arrays.

a struct can't contain a member of its own type. So no nested structs.

the size of the struct has to be finite.

the struct can be the value type of a mapping member or can contain a dynamically-sized array of its type.

### **mapping types**

`mapping(keyType => valueType)`

variables of mapping type 

`mapping(keyType => ValueType) variableName`
    
keyType can be any built-in value type

complex types are not allowed (mappings, arrays, structs)

mappings are hash tables

virtually initialized so every possible key, is mapped to a value whose byte-representation is all zeros and a type's default value

only the keccak256 hash is used to lookup the value

keydata is not stored in a mapping

mappings don't have a length or a concept of a key or value being set

cannot be erased without extra information regarding the assigned keys

can only be located in storage

can't be used as parameters or return parameters

restrictions apply for arrays and structs that contain mapping

marking state variables of mapping type as public, solidity creates a getter for you

keyType becomes a parameter for the getter

iterable mappings

can't iterate over mappings, cant enumerate their keys

it is possible to create a data structure on top of mappings and iterate over that.

### **operators**

arithmetic and bit operators can be applied even if the operans don't have the same type

to determine what type the operation will use

- if the right operand type can be implicitly converted to the left, use left.

- if the left operand type can be implicitly converted to the right, use the right

- otherwise, operation is not allowed
    
a literal number is converted to its mobile type, smallest type that can hold the value 

if both are literal numbers, the operation will evaluate with as much precision as necessary

**ternary operator**

`<expression> ? <trueExpression> : <falseExpression>`
    
result type is not determined from the types of the operands
      
`255 + (true ? 1 : 0)` will revert due to arithmetic overflow

ternary operator is of uint8 type, and 256 exceeds that range

1.5 + 1.5 is fine (rational expression evaluated with unlimited precision)

1.5 + (true ? 1.5 : 2.5) involves converting a fractional rational number to an integer, which is not allowed
    
**compound increment/decrement operators**

if a is an LValue (something that can be assigned to)

- a += e
- a -= e
- a *= e
- a /= e
- a |= e

**delete**  
used on arrays can assign a dynamic array of length zero with all elements set to initial value

delete leaves an empty space in the array 
  
### **conversion between elementary types**

**implicity conversions**
automatically appliced by the compiler

possible between value types if it makes sense semantically and information is not lost

uint8 convertible to uint16, int128 but not to uint256

**explicit conversions**

may result in unexpected behavior and allows to bypass some security features of the compiler

if an integer is explicitly converted to a smaller type, higher-order bits are cut off.

if an integer is explicitly converted to a larger type, the result will compare equal to the original integer.

fixed-sized bytes convert to a smaller type will cut off the sequences of individual bytes 

fixed-sized bytes converted to a larger type, is padded on the right

explicit conversions between integers and fixed-size byte arrays are only allowed if both have the same size

bytes arrays and bytes calldata slices can be converted explicitly to fixed bytes types (`bytes1...bytes32`).

if array is longer than the target fixed bytes type, the array will be truncated

if array is shorter than the target type, it will be padded with zeros at the end
    
### **conversions between literals and elementary types**

- **integer types**
decimal and hexadecimal literals can be implicitly converted to any integer type large enough to represent the literals without truncation
    
- **fixed-size byte arrays**
decimal literals can't be implicitly converted to fixed-size byte arrays.  
hexadecimal literals can be implicitly converted only if the number fits the size of the bytes type exactly.

## **units and globally available variables**

### **ether units**

a literal number can have different suffixes
- wei
- gwei
- ether
    
a number without a postfix is assumed to be in wei denomination

finney and szabo denominations have been removed in version 0.7.0.

### **time units**

seconds, minutes, hours, days, weeks after literal numbers can specify units of time

1 == 1 seconds
1 minutes == 60 seconds
1 hours == 60 minutes
1 days == 24 hours
1 weeks == 7 days

due to the fact that leap seconds can't be predicted, an exact calendar library has to be updated by an external oracle

```sol
function f(uint start, uint daysAfter) public {
  if (block.timestamp >= start + daysAfter * 1 days){
    block of code
  }
}
```

### **special variables and functions**

exist in the global namespace and provide information about the blockchain.

**block and transaction properties**

`blockhash(uint blockNumber) returns (bytes32)`
hash of the given block when blockNumber is one of the 256 most recent blocks, returns 0 otherwise.

`block.basefee`
  uint, current block's base fee

`block.chainid`
  uint, current chain id

`block.coinbase`
  address payable, current block miner's address

`block.difficulty`
uint,  current block difficulty

`block.gaslimit`
uint, current block gaslimit

`block.number`
uint,

`block.timestamp`
uint, block timestamp as seconds since unix epoch

`gasleft() returns (uint256)`
remaining gas

`msg.data`
bytes  calldata, complete calldata

`msg.sender`
address, sender of the message (current call)

`msg.sig`
bytes4, first four bytes of the calldata(function identifier)

`msg.value`
uint, number of wei sent with the message

`tx.gasprice`
uint,

`tx.origin`
address, sender of the transaction

    
**ABI encoding and decoding functions**

`abi.decode(bytes memory encodedData, (...)) returns (...)`
ABI decodes given data while types are given as second argument

`(uint a, uint[2] memory b, bytes`  

`abi.encode(...) returns (bytes memory)`

`abi.encodePacked(...) returns (bytes memory)`
  
`abi.encodeWithSelector(bytes4 selector, ...) returns (bytes memory)`

abi encodes the given arguments from the second and preprends the given four-byte selector
    
**error handling**

`assert(bool condition)`
causes a panic error if condition is false
`require(bool condition)`
reverts if condition is not met

`require(bool condition string memory message)`
reverts if condition is not met

`revert()`
  abort execution and revert state changes

`revert(string memory reason)`
abort execution and revert state changes, providing explanatory string
    
**mathematical and cryptographic functions**

`addmod(uint x, uint y, uint k) returns (uint)`
compute (x + y) % k

`mulmod(uint x, uint y, uint k) returns (uint)`
compute (x * y) % k

`keccak256(bytes memory) returns (bytes32)`
compute keccak-256 hash of the input

`sha256(bytes memory) returns (bytes20)`  

`ripemd160(bytes memory) returns (bytes20)` 

`ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)`  
recovers address associated with public key from elliptic curve signature

returns address, not address payable

- ***r*** first 32 bytes
- ***s*** second 32 bytes 
- ***v*** final 1 byte of signature
      
when these functions are run on a private blockchain out-of-gas problem might happen, functions are implemented as precompiled contracts and only exist after they receive the first message, so first sind wei to each contract before you use them.
    
**contract related**

***this***
the current contract, explicitly convertible to address

selfdestruct(address payable recipient)

**type information**

`type(x)` retrieves information about the type x

x can be either a contract or integer type
    
**contracts**
- type(C).name
- type(C).creationCode
- type(C).runtimeCode
- type(C).interfaceId

**integers**
- type(T).min  
- type(T).max 

**members/methods**

**bytes**  
`bytes.concat(...) returns (bytes memory)`

concatenates variable number of `bytes` and `bytes1`...`bytes32` arguments to one byte array

**strings**  
`string.concat(...) returns (string memory)`

concatenates variable number of string arguments to one string array

**address**
`<address>.balance (uint26)`
balance of the address in wei

`<address>.code (bytes memory)`
code at the address, can be empty for EOA
        
`<address>.codehas (bytes32)`
code hash of address

`<address payable>.transfer (uint256 amount) `
send wei to address, reverts on failure, forwards 2300 gas stipend 

`<address payable>.send(uint256 amount) returns (bool)`
similar to `.transfer`
        
`<address>.call(bytes memory) returns (bool, bytes memory)`
issues a low-level CALL with given payload, returns success condition and return data, forwards all available gas, adjustable.

`<address>.delegatecall(bytes memory) returns (bool, bytes memory)`
issues low-level DELEGATECALL with given payload

`<address>.staticcall(bytes memory) returns (bool, bytes memory)`
issues low-level `STATICCALL`
  
### **expressions and control structures**

**control structures**

- if
- else
- while
- do
- for
- break
- continue
- return

usual semantics from C or javascript
    
exception handling can be done with try/catch statements, only for external function and contract creation calls

errors can be created with the revert statement

parentheses can't be ommitted for conditionals, but curly braces can in single-statement bodies

no type conversion from non-boolean to boolean types if (1) {then...} wouldn't work as 1 is an integer, a non-boolean

**function calls**

**internal**  
only functions of the same contract instance can be called internally

recursion has the effect of not clearing current memory  

every internal function call uses up at least one stack slot and there's only 1024 available

**external**  
`this.g(8)`  
`c.g(2)`  
`c` is a contract instance  

calling functions from other contracts, the wei sent with the call can be specified {value: 10, gas: 10000}
    
function calls with named parameters
    
ommited names in function definitions

name of parameters and return values in the declaration can be omitted.
    
creating contracts via new

a contract can create other contracts via new

full code has to be known when the creating contract is compiled

recursive creation-dependencies aren't possible

**salted contract creations**

when creating a contract, address of the contract is computed from the address of the creating contract 

salt a `bytes32` value the contract creation uses a different mechanism 

it computes the address from address of the creating contract, the given salt value, the bytecode of the created contract and constructor arguments

`nonce` is not used if `salt` is used

**order of evaluation of expressions**

destructuring assignments and returning multiple values

solidity allow tuple types (list of objects of different types whose number is a constant at compile time)

arrays and structs
    
**scoping and declarations**

a variable that is declared will have an initial default value whose byte representation is all zeros

default values of variables are typical zero-state

default of bool is false

default for uint or int is 0

statically-sized arrays and bytes1...bytes32 each element will be initialized to the default value of its type

dynamic-sized arrays, bytes and string, the default value is an empty array or string

for enum default value is the first member

scoping rules follow C99 

variables are visible from the point right after declaration until end of smallest block that contains it

variables declared in the initialization of a for-loop are only visible until the end of the for-loop
    
checked or unchecked arithmetic

overflow or underflow happens when the resulting value of an arithmetic operation, when executed on an unrestricted integer, falls outside the range of the result type

since 0.8.0 arithmetic operations rever on over and underflow by default making the use of libraries that introduce additional checks unnecessary

**error handling, assert, require, rever and exceptions**

state-reverting exceptions handle errors

when exception is in a sub-call, they bubble up, exception is rethrown unless caught in try/catch

assert and require can be used to check for conditions and throw an exception if the condition is not met

**assert function**
creates an error of type `Panic(uint256)`
        
should only be used to test internal errors and check invariants

proper code should never create a Panic

0x00 generic compiler inserted panics

0x01 if calling assert with an argument that evaluates to false ...etc

**require function**
creates an error without any data

or an error of type Error(string)
      
should only be used to ensure valid conditions that can't be detected until execution time
      
**revert statement**
takes a custom error as direct argument without parentheses

`revert CustomError(arg1, arg2);`
      
**revert() function**
causes a revert without any error data
  
  ## contracts

    
      









    
    

      




                                                                                                                                                                                                                                                                     















    


      
      
      















    






units and global variables
expressions and control structures
contracts
inline assembly
cheatsheet
language grammar


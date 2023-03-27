# arrays and structs

primitive data types
- uint / int
- boolean
- address
- enum
- bytes

a value (primitive) type stores its data directly in the variable.

reference-based data types
- arrays
- strings
- structs
- mappings

a reference type doesn't store values directly in the variable.

reference types hold a pointer to the address of the data location.

a pointer, points to the data location that holds the data value

## arrays

array is a data structure of a collection of elements.

each element is identified by an index.

arrays can be fixed or dynamic.

`dynamic array` sizes are not defined when declared.

during runtime the size is determined.

`fixed arrays` have a predefined size and quantity of elements should not exceed that size.

**storage arrays** are typically state variables can be both fixed or dynamic.

both have access to the `.length` member. returns how many values an array holds per index.

dynamic storage arrays have `.pop()` and `.push()`

iterating arrays can be costly, not recommended pattern for smart contract developers.

## structs

structs allow to deine your own custom data type

`memory` is required in solidity when using reference types as a parameter. either `memory` or `calldata`

to prevent anyone modifying a struct, it can hold an `address` property so only that address can modify it

it's important to understand
- data location (where the array is stored)
- memory allocation (whether fixed size or dynamically sized)

# arrays

## 1. fixed arrays

a fixed set of values at compile time.

can't grow or shrink in size.

storing less elements means the rest elements default to the default data type value (false for bool, 0 for uint, etc)

compile-time error if attempting to store more elements.

inside of a function, its necessary to define the data location of an array

`memory` defines that the data location is in memory, which is temporary as long as the transaction.

`calldata` is another data location for arguments.

`storage` for persistence.

### data location

three data locations in solidity
- memory (temporary data)
- storage (persistent data)
- calldata (external argument data)

**calldata**

broadcasting a tx from an EOA, the bytecode is included.

the bytecode is the `calldata` that includes an identifier for the targeted function and arguments being sent.

> taking an array as parameter in external function, must be labeled as `calldata`

read-only reference to the argument data.

it behaves like memory

**memory**

temporary data location to keep local variables.

only exist in memory for the length of transaction.

`memory` keyword

read and write to this location relatively cheaply compared to storage.

**storage**

data that gets stored on the blockchain

every full node client stores blockchain data on the machine.

every account has its own storage root (root hash of the patricia merkle storage trie) where solidity `storage` keyword refers to.

values can be copied.

a function labeled with `view` can prevent modifying state variables.

an array labeled with `storage` will contain a **reference** to the original array storage location.

equal references point to the same spot in memory.

### additional reading

https://docs.alchemy.com/docs/smart-contract-storage-layout

looping over an array has similar syntax like javascript and other c-family languages.

## 2. dynamically sized arrays

## 3. storage arrays

`push` and `pop` members are available for storage arrays.

## 4. memory arrays

> don't have a `push` member.

memory arrays can have dynamic size if the size is provided during initialization

memory arrays can't be resized.

during the transaction, the array will stay at the same length.

## 5. stack club

storage arrays have access to `pop` member

# structs

allow to build custom data types.

## 1. vote storage

struct initialization can be done with or without naming the properties.

naming the properties during initialing a struct improves readability but its more verbose.

## 2. structs in calldata and memory

the `ABIEncoderV2` allows to pass structs as calldata and return them in external functions.

`ABIEncoderV2` needs a new pragma statement

`pragma experimental ABIEncoderV2;`

tuples can be used in the ABI to describe structs

tuples are temporary groupings of potentially dissimilar data types used for destructuring and returning multiple function parameters.

`ABIEncoverV2` is no longer experimental since solidityV0.6.0

to parse structs, ABI maps them to tuple values.

## 3. struct arrays

create an array of struct types

## 4. choice lookup

take an address and find a vote in `hasVoted` and `findChoice` functions.

loop oveer votes.


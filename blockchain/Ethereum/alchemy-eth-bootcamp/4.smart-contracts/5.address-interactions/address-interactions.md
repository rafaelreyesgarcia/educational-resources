# calling EOAs

two types of addresses
- externally owned accounts, controlled by a private key
- smart contract deployed to the blockchain programmed to respond to different inputs

a **payable** function can receive ether.

call method is found on every address type.

you can send input data or ether to an address.

*message call*

a transaction is an object signed by the EOA.

`msg` is a global object in solidity and `tx` describing the original transaction sent by an EOA.

curly braces after a `call` method invocation allows to override `value`, `gas` parameters.

targeting a function on a contract the parenthesis that follows is where calldata is sent.

calldata defines the function to call and arguments to send.

sending ether to an account doesn't require calldata that's why the parenthesis can be send with an empty string `""`

`(bool success1, ) = a.call{value: msg.value}("")` the call method returns multiple values.

a transaction should fail if the message call fails, thus, having a conditional will help.

# accounts

every account on the EVM has a public address and a balance.

contracts store their bytecode internally

making a call from EOA to a contract account is important.

solidity deals with wiring up transaction data to the function defined in the contract.

`msg.sender` `msg.value` allow to access transaction parameters.

# sending ether

## 1. storing owner

`address` data type is a 160 bits long (40 character hexadecimal string)

### ethereum messages

EOAs can communicate with nodes by broadcasting transactions.

inside a transaction `data` is sent as bytecode intended to interact with the contract.

if no `data` is sent then there's no intention to interact with the EVM.

simple ether transfers don't require any data

data passed in a `message` is called `calldata`

everytime a contract account calls another contract, it forms a message.

the message includes
- sender address `msg.sender` `address`
- targeted function signature `msg.sig` `bytes4`
- amount of wei to send `msg.value` `uint`
- complete calldata `msg.data` `bytes`

signature is the first four bytes of the kecccak256 hash of the function signature.

uniquely identifies a function in a contract.

## 2. receive ether

in order for a contract to receive ether, there should be a `payable` function

`payable` is a modifier that affects function's mutability

`stateMutability` in the ABI can be
- view
- pure
- payable
- nonpayable

ether is stored in the contract's balance, no need for further logic.

attempting to send ether to a nonpayable function will cause the transaction to fail.

`receive()` allows to receive ether directly without needing a function.

`receive` is a special function that runs when a contract receives ether without any calldata.

receive must be `external` and `payable`, can't receive arguments and can't return anything

### external visibility

external visibility can only be called from EOAs.

can't be called internally by any contract or library.

`receive` is not meant to respond to internal messaging.

purpose is to provide a function body to write logic when ether is sent to the contract.

a fallback function is a backup function

with the wrong calldata, a function might not execute and will trigger the fallback function.

if the contract doesn't know how to respond to the data sent to it, it invokes the *fallback function*

`fallback` function can't accept arguments or return a value

fallback doesn't need to be payable

a payable fallback function can replace receive but this isn't best practice.

## 3. tip owner / transferring funds

any regular function can become `payable`

## 4. contract account

`this` can explicitly conver to an address

`this` gives access to the contract itself

call functions with dot notation.

this is the method to call libraries

## 5. self destruct

`SELFDESTRUCT` opcode will destroy the contract

refunds ether in order to incentivize cleaning up the blockchain from unusued contracts.

# reverting transactions

`REVERT` is an opcode in the EVM.

`revert` `require` and `asser` are all native features of the EVM to invoke `REVERT` opcode.

halt execution of transaction and remove all state changes.

transaction can still be included in a block and sender will have to pay for gas used.

`try/catch` blocks are used but not common

# learning revert

detect an error condition, immediately halt the contract code to stop further execution, refund remaining gas.

`require(boolean)`

`require(boolean, 'optional error message if boolean false')`

`revert` provides the same access to the opcode without a condition

```
if(!boolean) {
  revert CustomError();
}
```

`revert` is a statement and not a function since `0.8.0`

for backwards compatibility, revert can still be used as a function

```
revert("some error message")
```

`assert` `require` `revert` all communicate errors to the code by stopping execution and immediately handling control  with an error message.

`assert` function creates an error of `Panic(uint256)` should be used to check internal errors and function invariants.

an invariant is a term for a logical assertion that is held to be always true.

`assert(boolean)`

`revert` is used to check preconditions of a function

precondition is a condition a function expects to be true.

`require` is a function that takes a required boolean and a second optional argument to describe why it failed

second argument is an expression that evaluates to a string, so it can be written like this too

```
require(boolean, returnString());
```

some cases using `revert` is more readable than `require` in more complex boolean expressions

to use a custom error, `revert` is the only way

a custom error is cheaper than a string description as the name of the error can be used to describe, which is encoded in only four bytes.

https://docs.soliditylang.org/en/v0.8.4/control-structures.html#error-handling-assert-require-revert-and-exceptions

## 2. restricting by address

provide role to addresses

public function `withdraw` withdraws all funds from a contract and sends them to the deployer.

> the deployer of a contract is the `msg.sender` of the constructor.

only deployer of the contract can call this function.

## 3. function modifier

modifiers allow to run logic before and after the function's body

# calling contract addresses

`abi.encodeWithSignature` manually requires arugments to encode calldata

creates calldata in the same format as the data  field encoded in a tx.

make a message call from contract A to contract B passing calldata to target the `storeValue` function.

using contract definition solidity knows how to encoe calldata within solidity.

if you don't have access to the contract B definition (declaration) an interface can be used.

# sending data

when communicating with a smart contract, we send a transaction.

inside a transaction there's a `data` property which is the calldata.

format is the same for calling solidity functions from an EOA or a contract

`function approve(uint val) external`

target a function by taking its signature and hashing it with keccak256 then taking the 4 first bytes

keccak256("approve(uint256)")

first 4 bytes `0xb759f954`

if the `val` is 15 is `0xf` in hexadecimal.

pad the value out to 256bits or 64 hexadecimal characters

`000000000000000000000000000000000000000000000000000000000000000f`

combine it with the function signature

`0xb759f954000000000000000000000000000000000000000000000000000000000000000f`

## 1. call function

**interfaces**

interfaces define the contract you're interacting with

## 2. signature

to form calldata manually, take keccak256 hash of the function signature

take the keccak526 hash of `function()` and grab the first 4 bytes.

## 3. encode with signature

`abi.encodeWithSignature`

```
bytes4 memory payload = abi.encodedPacked(bytes4(keccak256("rumble()")));

(bool success, ) = hero.call(payload);

<!-- becomes -->
bytes memory payload = abi.encodedWithSignature("rumble()");

(bool success, ) = hero.call(payload);
```

if `rumble()` would take two arguments

```
bytes memory payload = abi.encodeWithSignature("rumble(uint 256, uint256)", 10, 5);
```

### encoding calldata

`abi.encodeWithSignature`

how arguments are encoded into callData
- takes keccac256 hash of the function signature `receiveData(uint256)`
- takes first 4 bytes of the hash
- append value 5 badded out to 256 bits

calldata becomes
`de947c85` 4 bytes of the signature plus
`0000000000000000000000000000000000000000000000000000000000000005` argument padded to 256 bits.

https://emn178.github.io/online-tools/keccak_256.html

a minor change in the input to the hash function and the result is completely different so its tricky.

typing function signature manually
- only include name (no visibility modifiers or other keywords)
- include all variables comma delimited without spaces.
- can't use aliases (uint or int)

## 4. arbitrary alert

arbitrary calldata can be passed along other contracts.

storing calldata for later use applies to DAOs and multi-signature wallets

## 5. fallback

calldata is sent to a contract, and the contract don't have a function signature to match the selector, a fallback function is triggered.

if the 4 bytes are not the first 4 of the hash, the calldata won't match the function signature and invoke a callback function


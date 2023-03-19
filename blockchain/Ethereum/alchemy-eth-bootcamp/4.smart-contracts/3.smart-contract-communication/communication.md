# compilation

a contract is 
- compiled
- deployed
- interacted with

the solidity compilation process produces two *artifacts*

`ABI` allows front-end libraries to communicate with the contract.

`bytecode` is deployed directly to the blockchain, stored in the contract's account state trie.

## ABI

**application binary interface** is an interface between two program modules.

an os communicates with a user program through an ABI.

ABI defines how data structures and functions are accessed in the machine code.

ABI primary way to encode/decode data in/out of machine

ABI communicates with smart contracts
- interacting with the contract via a dApp
- contract to contract interaction (JUMP to another contract)

ABI is used to encode contract calls and to read data out of transactions.

ABI purpose
- define functions in contracts that can be invoked
- describe how each function accepts arguments and return results

ABI is a human-readable representation of a code's interface.

ABI defines methods and structures used to interact with the machine code

indicates the caller of a function, how to encode the needed information (function signatures, variable declarations)

to interact with a contract you need
- the address
- the ABI

`Contract` is a class abstraction that allows to create programmatic instances of contracts

## bytecode

bytecode is the translation of solidity to code the EVM understands.

bytecode represents the instructions, operations and operands the EVM should execute, solidity is the high level language we use to operate the EVM, but the EVM actually uses bytecode to perform operations.

creation time bytecode is executed only once at deployment, contains the `constructor`

run time bytecode is stored on the blockchain as permanent executable.

## transaction receipt

once transaction is successfully sent and validated on the network a receipt is generated containing logs and any gas used.

## receipts trie

the receipt is stored in the receipt trie of that block.

trie contains
- post transaction state
- cumulative gas used
- logs created during execution
- bloom filter composed from logs


# contract interaction

create a contract instance passing ABI to understand contract methods/members

contructing the instance will dynamically add the methods defined in the ABI to the instance itself

## 2. transactions

a transaction that modifies contract storage and spends gas.

a dynamic function `change` provided dynamically by ethers.js sets the state variable to true and returns a transaction promise.

contract is linked to a signer.

a signer represents an EOA

with a signer, we can sign a transaction before broadcasting it.

## 3. multiple arguments

## 4. signer

signer represents an EOA we have control over.

used to sign transactions before having to broadcast them.

creating a contract instance requires connecting a signer to transact with the contract easily

also can connect contract with other signers when running the same transaction with different addresses

the function `connect` returns a new instance of a contract connected with a signer.

`createUser` is called per signer

`msg.sender` value inside contract will be address of these users

## 5. deposit

**overrides** object defines a **value** defining how much ether we are sending in a transaction

along with *value* you can also define
- gasLimit
- gasPrice
- nonce
- chainId

the overrides object should be passed in last after all other arguments



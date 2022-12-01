# Solidity

object-oriented

high-level language

smart contracts govern the behavior of accounts within the ethereum state

curly-bracket language that targets the EVM

influenced by
- C++
- Python
- JavaScript
  
statically typed

supports inheritance, libraries and custom-defined types

smart contract examples
- voting
- crowdfunding
- blind auctions
- multi-signature wallets
  
only latest version receives security fixes

0.y.z semantic versioning

## **introduction to smart contracts**

**simple contract**
  
**machine-readable license specifier**
states the source code is licensed under GPL version 3.0
  
**pragma solidity**
defines what version of solidity the source code is written in
  
ensures the contract is not compatible with a new compiler that could behave differently
  
pragmas are common instructions for compilers on how to treat source code.
  
**contract**
collection of behavior(functions) and data (state) that resides at a specific address on the ethereum blockchain

variables (data) in a contract are called members.
  
all identifiers (contract, function and variable names) are restricted to the ASCII character set.

UTF-8 encoding can be used in string variables

## **coin contract**

**address type**  
160-bit value

doesn't allow arithmetic operations

suitable for storing
- addresses of contracts
- hash of the public half of a keypair belonging to an external account
     
**public keyword**  
generates a function that allows to access the current value of the state variable from outside of the contract

without this keyword other contracts have no way to access.
    
**mapping type**  

maps addresses to unsigned integers

similar to a hash table

virtually initialized such that every possible key exists from the start and is mapped to a value whose byte-representation is all zeros
    
**event declaration**

ethereum clients can listen for events emitted on the blockchain

as soon as its emitted, the listener receives arguments 
    
**constructor**

special function executed during contract creation

can't be called afterwards

permanently stores the address that created the contract

**msg global variable**

contains properties that allows access to the blockchain

always the EOA that called the function
    
**require() statement**

mandatory statement in order to execute the body of the function
    
**revert() statement**

aborts and reverts all changes 

supplies additional data to the caller to debug why an action was reverted
    
**overflow**

arbitrary precision arithmetic can't be represented accurately larger than (2**256 - 1)
    
**errors**

provide more information to the caller about why a condition or operation failed

used together with the revert statement
    
### **blockchain basics**

internal structure of a blockchain, underlying technology principles

- hashing
- elliptic-curve cryptography
- peer-to-peer networks
    
**transactions**

blockchain is a globally shared transactional database

anyone can read entries in the database by participating in the network

a transaction writes an entry to the blockchain that has to be accepted (agreed upon others) by nodes

while the transaction is executing, nothing can alter it

a transaction is always cryptographically signed by the sender (creator of the tx)

cryptography is a guard access to specific modifications

a tx is a message sent from one account to another account

**payload**
the binary data a tx can include when being broadcasted
      
if the target account contains code, the code is executed and payload becomes input data to that code

if the target account isn't set (tx doesn't have a recipient or recipient is set to null) the tx creates a new contract

payload of a contract creation is EVM bytecode to execute, the output data of this execution is permanenly stored as the code of the contract

while a contract is being created, the code is empty,

best practice to avoid callback into the contract under construction


**blocks**

**double-spend**
two transactions that both want to update the state (of the database) in the same way

the one that is accepted first is the valid transaction to execute

first is not an objective term in peer-to-peer

transactions are bundled into blocks and executed and distributed among all participant nodes

blocks form a linear sequence in time, being added in regular intervals 

blocks can only be reverted at the tip of the chain

### **the ethereum virtual machine**

runtime environment for smart contracts in ethereum

sandboxed and completely isolated

has no access to network, filesystem or other processes
    
**accounts**

- **external accounts**  
controlled by public-private key pairs  
address determined from the public key of the pair
    
- **contract accounts**  
controlled by the code stored together with the account

address derived from the creator address and the # of tx sent (nonce).
      
- **storage**  
every account has a persistent key-value store mapping 256-bit words to 256-bit words 
      
- **balance**
every account has a balance in wei (1 ether == 10**18 wei)
    
**gas**

each tx is charged gas to be payed by the originator

`tx.origin`
originator of a transaction
      
if gas is depleted, an out-of--gas exception is triggered, ending execution and reverting all modifications made to the state in the current call frame.

this mechanism incentivizes economical use of EVM execution time and also compensates executors for their work

each block has a max amount og gas, so it limits the amount of work needed to validate a block.

storage memory and the stack

the EVM can store data in

- storage
- memory
- stack
      
**storage**

data area every account has 

persistent between function calls and transactions

key-value store that maps 256-bit words to 256-bit words

not possible to enumerate storage from within a contract

is costly to store data in storage

a contract can't read nor write to any storage but its own

derived calculations, caching, aggregates should be stored outside of the contract

**memory**

a contract obtains this data area for every message call

memory is linear and can be addressed at byte level

reads are limited to a width of 256 bits

writes can be either 8 bits or 256 bits wide
      
memory is expanded by a word when accessing a previously untouched memory word

expanding memory must be paid

memory scales quadratically

**stack**

EVM is not a register machine, is a stack machine

all computations are performed on the stack

has a max size of 1024 elements

contains words of 256 bits

it is possible to copy one of the topmost 16 elements

or swap one of the topmost elements with one of the 16 elements below it

**instruction set**

minimal to avoid incorrect or inconsistent implementations

all instructions operate on the basic data type of 256-bit words or on slices of memory

arithmetic, bit, logical comparison operations are present

conditional and unconditional jumps are possible
    
**message calls**

contracts can call other contracts or send ether to EOAs with message calls

message calls have
- source
- target
- data payload
- ether
- gas
- return data
      
every transaction consists of a message call, than can further create more message calls 

the called contract (can be the same as caller) receives a new instance of memory and has access to the call payload

**calldata**
separated area to provide the payload
      
when finished, the message call returns data to be stored in the caller's memory preallocated by the caller

calls are limited to a depth of 1024

loops should be preferred over recursive calls

in practice the real limit might be less than 1000
      
**delegateCall and libraries**

delegateCall variant of a message call

the code at the target address is executed in the context of the calling contract

`msg.sender` `msg.value` don't change their values
      
a contract can dynamically load code from a different address at runtime

only code is taking from the called address, storage, current address and balance still refer to the calling contract

**logs**

indexed data structure

implement events

contracts can't access log data after creation

some part of log data is stored in bloom filters
      
**create**
contracts can create other contracts using a special opcode
      
**deactivate and self-destruct**

only way to remove code is to perform selfdestruct operation

remaining ether stored at that address is sent to a designated target

the storage and code is removed from the state

if someone sends ether to removed contracts, ether is forever lost
      
delegatecall or callcode can still be used to perform selfdestruct in a contract that doesn't contain a call to selfdestruct

**precompiled contracts**

small set of contract addresses

range between 1 and including 8

their behavior is not defined by EVM code stored at that address, but implemented in the execution environment itself

### **installing the solidity compiler**

**versioning**
semantic versioning

**remix**
- quick IDE
- browser IDE
    
**npm / Node.js**

convenient way to install solcjs (solidity compiler)

npm install -g solc
    
**docker**

docker run ethereum/solc:stable --help  
or   
docker run ethereum/solc:0.5.4 --help  

**linux packages**

```sh
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install solc
``` 
**macOS**
```sh
brew update
brew upgrade
brew tap ethereum/ethereum
brew install solidity
```  
**static binaries**

https://github.com/ethereum/solc-bin/
    
**building from source**

**windows**
visual studio 2019 build tools
visual studio code IDE
      
helper script to install all external dependencies (boost, cmake)

scripts\install_deps.ps1

**clone source code**

```sh
git clone --recursive https://github.com/ethereum/solidity.git

cd solidity
```
 
**command-line build**

cache speeds up repeated builds

install external dependencies

```sh
mkdir build
cd build
cmake .. && make
```
linux and macOS

`./scripts/build.sh`
        
**windows**
```cmd
mkdir build
cd build
cmake -G "visual studio 16 2019" ..
```  




      






      


      





    




      

  



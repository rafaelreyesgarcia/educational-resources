# intro

can't store storage variables on libraries and ether can't be sent to them when a library is deployed on its own.

libraries can be deployed in two ways

1. deployed inline

functions are marked as internal

2. deployed separately

can help keep the smart contract below 24kb limit

can share on-chain library with other contracts

can be run as a logic contract in logic/proxy pattern

## library linking

https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-ethers#library-linking

https://docs.soliditylang.org/en/v0.8.17/using-the-compiler.html?highlight=linking#library-linking

libraries allow to share code between contracts

can store functions common to many contracts

- math functions
+ contract patterns
+ permissions
- reduce new code
- save development time
- secure contracts with best practices and standards
+ save gas on deployments

have same properties of contracts, types and syntax

have access to same global variables and opcodes

> libraries don't have state or can't receive ether

libraries share code

openzeppelin libraries
https://github.com/OpenZeppelin/openzeppelin-contracts

# 1. uint library

library functions are mostly pure (don't read/write state)

can only be called directly if marked as `pure` or `view`

library functions can run in the context of a contract

uses message data and has access to state variables on a contract

# 2. using library

can be called directly or are commonly imported into contracts

## library compilation and communication

1. if contract uses an internal library function, code will be copied into the contract itself and compiled with the contract

2. if contract uses an external or public function, the library must be deployed to its own address, then the contract is linked to the library. at runtime, contract creates a message using `delegatecall` to access the function

when library is imported, code is run in the same context as contract code.

context tells the current contract address, which account called the contract and how much ether was sent

contracts bytecode

```
608060405234801561001057600080fd5b5073__$ba528da1e2dc9d528a3d6faf88239359ae$__633ef7df506040518163ffffffff1660e01b815260040160206040518083038186803b15801561005557600080fd5b505af4158015610069573d6000803e3d6000fd5b505050506040513d602081101561007f57600080fd5b81019080805190602001909291905050506000819055506085806100a46000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80630c55699c14602d575b600080fd5b60336049565b6040518082815260200191505060405180910390f35b6000548156fea264697066735822122086180a06d1da4b2b704e3d89f6c825310e78b0304df1d268790893e24b9f206164736f6c63430006020033

```

`__$ba528da1e2dc9d528a3d6faf88239359ae$__`

link placeholder

# 3. console log

console.log can take 
- uint
- string
- bool
- address

## logging

hardhat task runner allows to log messages in solidity for debugging

`import 'hardhat/console.sol';`

https://hardhat.org/hardhat-network/reference/#console-log

# 4. base functions

create a public pure function on `Prime` library

# 5. building on functions

a prime number is a number that is only evenly divisible by 1 and itself

## prime strategy

any number larger than half of the number will not evenly divide it.

# 6. next prime

`block` global property describes information about current block where the transaction is being mined on

- block.coinbase the miner of this block's address
- block.difficulty
- block.gaslimit
- block.number
- block.timestamp

all are 256 bit unsigned integers except coinbase.


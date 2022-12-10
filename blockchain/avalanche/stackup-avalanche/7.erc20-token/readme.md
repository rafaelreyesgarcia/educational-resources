# ERC20 token project

## introduction to core

- non-custodial browser extension
- operating system for the browser to explore the avalanche ecosystem
- code can connect to other networks (ethereum, bitcoin other EVM compatible networks)

core features
- bridge (native bitcoin)
- swap (paraswap) 
- buy (moonpay)
- ledger enabled
- portfolio
- collectibles gallery
- subnets
- address book
- account switcher


## setting up a wallet in core

## hardhat development framework

helps developers to 
- test
- compile
- deploy
- debug 
decentralized applications on ethereum

hardhat has a pre-built local ethereum network 

## introduction to token standards

smart contract standards refer to a set of rules that a smart contract must comply in order to function properly and correct

token standards is a subset of smart contract standards

**ethereum request for comment (ERC)** set of technical documents containing guidelines on developing a smart contract

define specific set of functions for each token type

some token standards
- ERC-20
- ERC-721
- ERC-777
- ERC-1155

## erc-20 token standard

dictates rules an actions that a token or smart contract must follow

compliant tokens following ERC20 would implement these functions

- `totalSupply()` info about total supply
- `balanceOf()` account balance of owner's account
- `transfer()` executes transfers of a number of tokens to a specified address
- `transferFrom()` executes transfers from a specified address
- `approve()` allow a spender to withdraw from an account
- `allowance()` returns a set number of tokens from a spender to the owner

these functions should trigger two events
- `transfer` when a movement of tokens happens
- `approval/validation` whenever approval is needed

## understanding the ERC20 token

smart contract templates that follow the ERC20 token standard can be found at OpenZeppelin

**openzeppelin** is an open-source framework to build secure smart contracts

### token smart contract generator 

[smart contract wizard](https://wizard.openzeppelin.com/)

- erc20 should be selected (default option)
- import statement imports a smart contract template 
- contract inherits all properties from ERC20 that was imported

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {}
}
```

## editing the ERC20 token smart contract

add features

`Mintable` allows only privileged accounts to create more supply

- a new sc is imported
- a new property of `Ownable` is inherited
- a new function mint() has been added 

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor() ERC20("MyToken", "MTK") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

`Burnable` allows users to destroy tokens
- a new sc is imported
- a property of `ERC20Burnable` is inherited

## setting up an avalanche network

in the `bin` folder this command will change the command path of avalanche

```sh
export PATH=$PWD:$PATH

# check network status
avalanche network status

# if network is not live
avalanche network start
```

## creating and deploying local EVM subnet

`avalanche subnet create quest7`

`[v0.4.4] AvalancheGo@v1.9.2-v1.9.3 (Protocol Version: 19)`

latest subnet-EVM version uses protocol version 20, incompatible with avalanchego@v1.9.2-v1.9.3

`avalanche subnet deploy quest7`

## cloning project's repository

install yarn

`npm install -g yarn`

```sh
git clone -b avax-quest-7 https://github.com/stackup-dev/advancing-into-avalanche.git
```

important files 
- NewTestToken.sol
- hardhat.config.ts

configure hardhat framework to use our local subnet

`network` allows to choose between different networks to interact with

4 networks are configured
- hardhat
- local
- fuji
- mainnet

each network has their own configurations (url, chainid, etc)

repalce `url` and `accounts` value with subnet RPC URL and private key

## preparing ERC20 token smart contract

- replace `NewTestToken` in line 11 to your name
- `yarn` is similar to `npm install` 
- `yarn accounts --network local`
- the `--network local` flag tells hardhat to use the local network out of the 4 configured in `hardhat.config.ts`
- `yarn compile` to compile smart contract

## deploying a smart contract to a local subnet

`yarn deploy --network local` will deploy on the local subnet

any errors can be fixed checking the correct RPC URL and private key have been entered

- `yarn console --network local` will run the console

pass code into the console

```js
const Coin = await ethers.getContractFactory('NewTestToken');

const coin = await Coin.attach('0x52C84043CD9c865236f11d9Fc9F56aa003c1f922');

let accounts = await ethers.provider.listAccounts();

// get name of token 
await coin.name()

// number of decimals the token has
await coin.decimals()

// get the balance of an address
(await coin.balanceOf(accounts[0])).toString()

// mint 1 token
await coin.mint(accounts[0], 1)
```






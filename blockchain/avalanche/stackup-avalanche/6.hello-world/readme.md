# hello world project

## introduction to smart contracts

**smart contracts** are simple programs stored on the blockchain that are governed by code

### benefits of smart contracts

**speed efficiency and accuracy**

digital and automated execution, no paperwork to process or time wasted to manually fill information

**trust and transparency**

there's no third party involved, records are encrypted and shared across participants

**security**

records are encrypted, each record is connected to the previous and subsequent records on a ledger

**savings**

no intermediaries delays or fees

## introduction to decentralized apps

**decentralized applications** run on a decentralized computing system like a blockchain rather than a centralised server

- dApps are less prone to censorship and more secure against attackers
- dApps use smart contracts to execute operations on the blockchain

## creating a metamask wallet

## connecting to avalanche fuji testnet

add network with following details

- network name: Avalanche FUJI C-Chain
- new RPC URL: https://api.avax-test.network/ext/bc/C/rpc
- chain ID: 43113
- currency symbol: AVAX
- block explorer URL: https://testnet.snowtrace.io/

## introduction to remix IDE

**IDE** is software gui to build applications using developer tools

IDE consists of

- source editor
- debugger for testing programs
- local build compiler to build and package code before running it

remix IDE layout

- **icon panel** toggle between different plugins
- **side panel** GUI to the selected plugin
- **main panel** source editor
- **terminal**

## write a smart contract

```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
contract HelloWorld {
	function sayHelloWorld() public pure returns (string memory) {
  	return "Hello World";
	}
}
```

- SPDX license identifier
- pragma solidity version to use
- define a contract
- inside the contract a function `sayHelloWorld` doesn't have input parameters
- `public` and `pure` modifiers
- function returns a string stored in memory

## compiling the smart contract

- complier tab to compile `HelloWorld.sol` contract

## getting AVAX tesnet tokens

## deploy smart contract to avax fuji testnet

- deploy and run
- environment dropdown list use `injected provider metamask`

## inspect smart contract on snowtrace

- a block explorer is a visualization layer for blockchain acting as a search engine

block explorers can

- inspect tx issues
- assets created on blockchains
- etc

snowtrace is the avalanche c-chain block explorer

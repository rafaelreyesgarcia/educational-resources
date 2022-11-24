# ether.js

## **what is ether.js**

### **ethereum nodes**

node is any instance of ethereum client software that is connected to other nodes.

a client is an implementation of ethereum that verifies data against the protocol rules to keep the network secure.

it's a client that allows to establish a connection to the blockchain.

### **Ether.js**

library to connect with Ethereum Virtual Machine blockchains

the client establish a connection.

ether.js allows to use those connections to interact with and modify ethereum state.

interactions
- reading or writing smart contracts
- querying an address balance

ether.js connects to nodes by using third-party provider APIs 

## **signers and providers**

a signer is an abstraction of an ethereum account.

signers can sign messages and transactions.

provider is an abstraction of a connection to the network.

providers provide a concise and consistent interface to access ethereum node functionalities

signers are used when doing an operation that changes the sate of the blockchain.

a signer instance can be created

providers will be used when we want to read data from the blockchain

providers must be connected to the network as well as signers.

providers will be connected by default when first instantiated.

signers need to be paired with providers to be able to connect.

## **other libraries**

- web3.js  
JSON-RPC wrapper library for javascript, developed by Ethereum Foundation  
bigger bundle size  
simple abstractions of JSON-RPC calls

- walletConnect SDK  
mobile interactions, developed by TrustWallet

- wagmi.sh  
contains ether.js and walletConnectSDK for react.js

- go-ethereum (geth)  
geth is an ethereum node client and library for golang

- web3j  
library for java

- nethereum  
library for dotnet C#

- web3.py  
library for python

## **initialise node.js**

```sh
node -v # check node.js version

mkdir ethersjs
cd ethersjs

npm init --yes # initialises a node.js project

npm install ethers # installs ethers.js
```

## **quiz**

1. ether.js is used to create a node on a blockchain  
**false**

2. which one is not natively supported by ether.js: ethereum, zilliqa, polygon avalanche?  
**zilliqa**

3. a signer is an abstraction of an ethereum **address**

4. In ethers.js, a **signer** is often used for operations that involve state changes in the blockchain. On the other hand, a **provider** is often used when reading data from the blockchain. Separate each answer with a space.


5. Which of the following operations are not recommended to be done with a Signer instance?  
**Calling a read-only function of a deployed smart contract**

6. Since Providers mostly handle read-only operations, they do not need to be connected to the Ethereum network. True or false?  
**false**

7. Ethers.js is the only library that can be used to interact with the blockchain. True or false?  
**false**







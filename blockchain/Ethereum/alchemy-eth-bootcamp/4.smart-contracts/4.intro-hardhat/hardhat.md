# hardhat

overview so far
- blockchain and crypto fundamentals
- account tracking and blockchain storage
- JSON-RPC, ethers, alchemy SDK
- solidity syntax, smart contracts and *hardhat*

development environment to compile, deploy, test and debug ethereum contracts.

local testing (local network)

solidity compilation and error-checking

- `/contracts` are `.sol` files
- `/scripts` are `.js` files
- `/artifacts` are produced out of the compilation
- `/test` used for testing libraries
- `hardhat.config.js` project configurations

the ABI and bytecode are stored in an `/artifacts` folder

hardhat flow
- `mkdir hardhat-project`
- `npm init -y` to initialize a `package.json`
- `npm i hardhat dotenv`
- `npx hardhat` to initialize a hardhat project
- `require('dotenv').config() in `hardhat.config.js`
- `networks` flag to `hardhat.config.js` add alchemy RPC url under `url` and private key under `accounts`

# deploy a contract with ethers.js + hardhat

- acquire goerli ETH
- `mkdir contract-deployment`
- `npm init -y`
- `npm i --save-dev hardhat`
- `npm i @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers dotenv`
- `npx hardhat`
- `require('dotenv').config()` to `hardhat.config.js`
- configure `hardhat.config.js` adding networks
- `npx hardhat compile` will produce artifacts (ABI and bytecode)
- `npx hardhat run scripts/faucetDeploy.js --network goerli`


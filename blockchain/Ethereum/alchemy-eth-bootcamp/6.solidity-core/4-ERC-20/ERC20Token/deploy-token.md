# project setup

- npm init -y
- npm install dotenv
- npm install --save-dev hardhat
- npx hardhat
- npm install @nomicfoundation/hardhat-toolbox

# setup env

private key and alchemy http endpoint

load the env file in a script by placing `require('dotenv').config();` to have access to variables via `process.env`

`require('@nomicfoundation/hardhat-toolbox');` should also go in hardhat.config.js

configure hardhat.config.js `networks` field with an object with `url` and `accounts` field of the alchemy https endpoint and private key.

accounts field expects an array of accounts

url field expects an ethereum node endpoint

# setup contracts

- npm install @openzepellin/contracts
- create Contract.sol
- create deploy.js
- npx hardhat compile to create `artifacts` and `cache`

# deploy ERC-20 token

- npx hardhat run scripts/deploy.js --network goerli

Deploying contracts with the account: 0xfa7C399dF49B0b95CDfc610CEfcE0BF61267769b
Account balance: 0.135156399026998844
Token address: 0x81A4910e250b1DC815C48187BE30268Ee7E3234f


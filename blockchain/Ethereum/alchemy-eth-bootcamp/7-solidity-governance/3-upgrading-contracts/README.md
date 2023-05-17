# deploy upgradable contract

openZeppelin upgradeable package

openZeppelin hardhat upgrades plugin

## setup hardhat project structure

```
npm init -y

npm i -D hardhat

npm install @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle @openzeppelin/contracts-upgradeable @openzeppelin/hardhat-upgrades

verify the contract on etherscan

npm install @nomiclabs/hardhat-etherscan@3.0.1

npm i dotenv

initiate hardhat environment

npx hardhat

npm install @nomicfoundation/hardhat-toolbox@^2.0.0

```

## add environment variables

ALCHEMY_GOERLI_URL=
GOERLI_PRIVATE_KEY=
ETHERSCAN_KEY=

alchemy api key should be https url

## configure hardhat.config.js

```js
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};
```

## add smart contracts

the contract inherits from `Initializable` imported from open zeppelin

contract has no constructor, is replaced by the `initialize` function and `initializer` modifier

# deploy script

the contract is deployed with `numSodas` value as 100

# deploy and verify contracts

```
npx hardhat run scripts/deployProxy.js --network sepolia
```

deployed contracts

Proxy contract address: 0xaC8146EeBa5D399234218898D6552BF0dE420c73

Implementation contract address:0x771c8812aCba984ba0256f512a5468ff0F412345

## verify contract

```
npx hardhat verify --network sepolia implementation_address
```

# interact with VendingMachineV1 via proxy contract

EIP-1967 allows to interact with an implementation contract via the proxy

# upgrade to VendingMachineV2

there's no `withdrawProfis()` function

a mapping should keep track of how many sodas a user has purchased

there has to be a check that makes sure numSodas is not <= 0

there's no way to add new sodas

## add special upgrade script

add a script that changes the current Proxy pointer to a newly deployed VendingMachineV2

```
npx hardhat run scripts/upgradeProxy.js --network sepolia
```

V2 implementation address: 0x1a1EA65729D301d041F15B80EC28E0C7Bfa32EA0

verify the new implementation contract

```
npx hardhat verify --network sepolia V2_implementation_contract
```
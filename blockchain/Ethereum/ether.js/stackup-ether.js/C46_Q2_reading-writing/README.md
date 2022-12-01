# reading and writing smart contracts with Ethers.js

## **node providers**

when reading blockchain data we need to send a request to a blockchain node.

running our own node would allow us to send a request.

when you don't own a node, you will need to use a node provider.

provider is a party that runs blockchain nodes and provides a service to interact with the blockchain.

a node provider will provide us an RPC URL to act as endpoint so we can interact with the blockchain

JSON-RPC endpoint call is like an API call

**goerli testnet public RPC URL**

https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161

creating an account in alchemy or infura will get a unique RPC URL

## **reading on-chain data**

initialise a project repository and install ethers.js 

```sh
npm init --yes

npm install ethers
```

connect to an ethereum node to be able to interact with the blockchain.

create a provider instance using public RPC URL

```js
const { ethers } = require('ethers');

const readChainData = async () => {
  // creates a provider instance
  const provider = new ethers.providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
  );

  // get current block number
  const blockNumber = await provider.getBlockNumber();

  console.log('block number:', blockNumber);
}

readChainData();
```

after instantiating a provider we can call any method from the provider instance.

`getBlockNumber()` is called.

test script

```sh
node readChainData.js
```

## **reading on-chain data: get balance**

```js
// get ether balance for a specific wallet

  const balance = await provider.getBalance('0x0b0605d0D05552C02c9CE6C442e14d781DD65a84');

  const formattedBalance = ethers.utils.formatEther(balance);

  console.log('balance:', formattedBalance, "ether");
```
`getBalance` takes one parameter (a wallet address) 

function returns the result in a `BigNumber` format so `ethers.utils.formatEther()` converts it to an integer

when we call a provider instance methods we are making JSON-RPC calls to an ethereum node to get data.

eth_getBalance() is a JSON-RPC method 

reading data does not incur in fees

## **contract ABI**

interacting with smart contracts that have been deployed to the blockchain.

we need to prepare the **application binary interface ABI** to be able to interact with smart contracts

we need to send a request to a deployed contract

request must include 
- functions inside the smart contracts to be invoked
- what kind of arguments to pass to them
- data types of arguments
- etc

this information should be supplied in a *way* the EVM understands.

a contract ABI provides all this information in a way the EVM understands.

info about functions inside an ABI
- function name
- function type (function, constructor, fallback)
- arguments and data type
- output
- state mutability (pure, view, payable)

compiling smart contracts with tools like hardhat or remix IDE the contracts ABI is generated

ABI is generated in a JSON format

```JSON
{
  "inputs": [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  "name": "balanceOf",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
```

ethers.js allows to create human-readable ABIs

ABI representations that are more friendly to humans but that the EVM understands.

```js
const humanReadableABI = ["function balanceOf(address) view returns (uint256)" 
]
```

## **interacting with smart contracts: read functions**

deployed smart contract on goerli testnet

0xCC8048eF226eb2383B08949F752Cf31932d487cc

etherscan goerli explorer

https://goerli.etherscan.io/address/0xCC8048eF226eb2383B08949F752Cf31932d487cc

contract tab shows code in the smart contract

read-only functions inside smart contracts refer to functions that only return values without changing state in the blockchain

read-only functions are recognized by their state mutability.

it has the `view` and `returns` keyword 

```sol
function balanceOf(address account) public view virtual override returns (uint256) {
  return _balances[account];
}
```

**create contract's ABI in project repository**

ABI.js

```js
const { ethers } = require('ethers');

module.exports = {
  humanReadableABI: new ethers.utils.Interface([
    'function symbol() view returns(string)',
    'function balanceOf(address) view returns (uint256)',
    'function totalSupply() view returns (uint256)',
  ]),
};
```

create `callReadFunction.js` to interact with read functions

```js
const { ethers } = require('ethers');
const ABI = require('./ABI');

const callReadFunction = async() => {

  // create a provider instance
  const provider = new ethers.providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
  );

  // create contract instance and connect to provider
  const contract = new ethers.Contract(
    '0xCC8048eF226eb2383B08949F752Cf31932d487cc', 
    ABI.humanReadableABI,
    provider
  );

  // getting ERC20 token symbol

  const symbol = await contract.symbol();

  console.log('Symbol:', symbol);

  // getting ERC20 total supply value
  const totalSupply = await contract.totalSupply();

  const formattedTotalSupply = ethers.utils.formatUnits(totalSupply, 18);

  console.log('total supply:', formattedTotalSupply, symbol);

  // getting an ERC20 balance for specific wallet 
  const balance = await contract.balanceOf('0x351c63277629384DeEa2aed929001Bd8867568Cf');

  const formattedBalance = ethers.utils.formatUnits(balance, 18);

  console.log('token balance:', formattedBalance, symbol);
};

callReadFunction();
```

`ABI.js` is imported in the `ABI` variable. This is the contract's ABI.

created a provider instance.

created contract instance of a target contract by providing contract address and contract ABI

we can then call any read function of a target smart contract that we defined in ABI.js

read functions that are invoked 

- `symbol()`  
- `totalSupply()`
- `balanceOf()`

## **interacting with smart contracts: write function**

write functions involve changing state in a blockchain we need testnet eth to pay for gas fees.

create a script `callWriteFunction.js`

```js
const { ethers } = require('ethers');
const ABI = require('./ABI');

const callWriteFunction = async () => {
  // create a provider instance
  const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

  // create a wallet instance
  const wallet = new ethers.Wallet('INSERT_YOUR_PRIVATE_KEY_HERE', provider);

  // create contract instance and connect it to our wallet
  const contract = new ethers.Contract(
    '0xCC8048eF226eb2383B08949F752Cf31932d487cc',
    ABI.humanReadableABI,
    wallet
  );

  // get ERC20 token symbol
  const symbol = await contract.symbol();

  // call mint function from smart contract and mint 10 MOCK 
  try {
    await contract.mint(wallet.address, ethers.utils.parseUnits('10', 18));

    console.log('mint success!');

    // get balance of our wallet
    const balance = await contract.balanceOf(wallet.address);
    const formattedBalance = ethers.utils.formatUnits(balance, 18);

    console.log(
      `token balance of ${wallet.address}: ${formattedBalance} ${symbol}`
    );
  } catch (err) {
    console.log(err);
  }
};

callWriteFunction();
```

when instantiating the contract instance we pass in our wallet instance instead of the provider instance.

everytime we instantiate a contract object we need to provide it with the contract ABI

the ABI script should be updated to add the mint() function

`function mint(address, uint256)` should be added to the humanReadableABI.


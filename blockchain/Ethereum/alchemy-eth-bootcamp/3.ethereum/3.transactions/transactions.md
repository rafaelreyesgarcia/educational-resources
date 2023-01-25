# intro to transactions

nodes contain an JSON-RPC interface that allows to send JSON-RPC requests.

transactions are the only way to change the state of the ethereum computer...

ethereum is a transaction-based state machine...

transactions are collected into blocks, blocks are packages of data (transactions).

ethereum is a chain of states...

chain of blocks is a blockchain

a blockchain is a stack data structure of stacked state

the ethereum world state is a mapping between addresses and their account state.

conceptual vehicles to view ethereum
- mapping view (hashing table)
- table view (relational table)
- object view (ocaps)

## accounts refresher

accounts are ledger entries that are indexed via a public address.

querying the global state by providing an address, will return that address's account state (balance, nonce, smart contract and state if a contract address)

an EOA can't have EVM code and must be controlled by a private key

contract accounts doesn't have private keys and have storage and EVM code.

**storage hash** root hash of PMT that holds state (variable values, owners, etc)
**code hash** bytecode representation of code

if account is EOA, the public address is derived from private key.

if account is a contract, the public address is derived from deployer address and deployer nonce value.

the output is always 160 bits representing the public address.

an ethereum public address is typically 20bytes long with `0x` prefixed.

ethereum addresses are 40 characters long or 42 counting the prepended `0x`

## transactions and accounts

tx is a cryptographically signed instruction.

the owner of a private key wants to change the global state in one way or another.

reading data doesn't require an account.

all writing data requires a private key signature verification.

> an external actor sends a message (a signed transaction) containing instructions to change the ethereum's global state.

## types of transactions

**contract creation**

deploys a new smart contract instance creating a new entry in the global state.

**message call**

a tx initiated by an EOA interacts with another EOA or a smart contract.

message calls don't create new entries in the global state, it just updates an existing entry.

type 2 transactions are not legacy transactions pre EIP-1559.

type property of transaction type 0 or 2.

- **nonce** index, imcremented every time a transaction gets mined
- **recipient** receiving address, if EOA, transaction is a transfer, if a contract, transaction will execute contract code.
- **value** amount of ETH to transfer
- **yParity, r, s** signature components (digital signature)
- **init or data** referred as `calldata` or 0 if a typical ETH transfer.
- **gasLimit** max amount of gas units to consume
- **type** 0 or 2 (post EIP-1559)
- **maxPriorityFeePerGas** (miner tip) max amount of gas to be included as tip to the validator.
- **maxFeePerGas** max amount of gas willing to pay (includes `baseFeePerGas` and `maxPriorityFeePerGas`)
- **chainId** each tx must include a specific id per chain. Mainnet is 0, Goerli is 5, etc.

only a write request requires a digital signature.

blockchains are globally-shared decentralized databases.

3 routes to interact with the ethereum computer
- **contract creation** deploy a smart contract (special transaction, signed JSON-RPC request)
- **message call** transfer eth to EOAs or interact with smart contracts
- **inspection** anyone can create read queries to ethereum nodes without an account.

transaction object example

```js
{
  to: "0x2c8645BFE28BEEb6E19843eE9573b7539DD5B530", // Bob
  gasLimit: "21000",
  maxFeePerGas: "30", // 28 (base) + 2 (priorityFee)
  maxPriorityFeePerGas: "2", // minerTip
  nonce: "0",
  value: "100000000000000000", // 1 ether worth of wei
  data: '0x', // no data, we are not interacting with a contract
  type: 2, // this is not a legacy tx
  chainId: 4, // this is AU, we deal only in test networks! (Göerli)
}

// message call
{
  to: "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8", // smart contract address
  gasLimit: "36000",
  maxFeePerGas: "30", // 28 (base) + 2 (priorityFee)
  maxPriorityFeePerGas: "2", // minerTip
  nonce: "1", // this is Alice's second transaction, so the nonce has increased!
  value: "100000000000000000", // 1 ether worth of wei
  data: '0x7362377b0000000000000000000000000000000000000000000000000000000000000000', // this calldata tells the EVM what function to execute on the contract, contains parameter values here as well
  type: 2, // this is not a legacy tx
  chainId: 4, // this is AU, we deal only in test networks! (Göerli)    
}
```

specific information to be called is described in the `data` field of each transaction.

## manually construct calldata

- calling a function of a faucet smart contract
- alice must take the keccak256 hash of the function signature.

`7362377b8e2cc272f16ab5d5441f976bd53fd78ccd01e3c67a1f6b2efdae09e0`

- first 4 bytes (8 characters) of the hash output (`7362377b`)

- if the function doesn't take parameters no need to append parameter data, if it does take arguments, hash the entire function signature with the parameter type `helloWorld(uint256)`

- padd calldata construction out to 32 bytes
`0x7362377b0000000000000000000000000000000000000000000000000000000000000000`

# JSON-RPC Requests

## 1. current block number

**ganache core**

library that uses a version of the EVM written in javascript called ethereumjs-vm

ganache core wraps a JSON-RPC api around the VM to communicate with a remote ethereum node.

## 2. get balance

fill in two parameters

- `address`
- `block number or block tag`

## 3. get nonce

a nonce ensures no transaction is sent twice.

once a transaction is signed, is broadcasted to the network.

the account nonce is a counter of all transactions sent by an address.

the latest transaction count is signed as the nonce, so if someone wants to replay a transaction, they will have a different nonce and thus rejected by the network.

## 4. block transactions

blocks contain a list of transactions, can be empty or be as large as the gas limit allows.

a transaction has its own gas limit the owner is willing to spend on completing the transaction.

a transfer costs ~ 21,000 gas units

~ 714 transfer transactions could fit into a single block assuming 15,000,000 gas limit target.

retrieve a block, find total number of transactions inside and return it.

## 5. batch transactions

id is used when batching requests.

making multiple remote procedure calls can be done at once and receive multiple responses.

id will then identify which response correponds to which request.

```js
const request1 = {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_blockNumber",
}

const request2 = {
  jsonrpc: "2.0",
  id: 2,
  method: "net_version"
}

const responses = await provider.send([request1, request2]);

console.log(responses);
/*
  [
    { id: 1, jsonrpc: '2.0', result: '0x0' },
    { id: 2, jsonrpc: '2.0', result: '1612393685706' }
  ]
*/
```

# code a transaction

send a signed JSON-RPC request on goerli using alchemy SDK

make `sign-tx` directory and access it

`npm init -y`

`npm install dotenv`

`touch .env`
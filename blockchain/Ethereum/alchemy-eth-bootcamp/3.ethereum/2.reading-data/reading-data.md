# read requests

to communicate with ethereum we use the JSON-RPC protocol

to run an ethereum node, you must run an ethereum client implementation
- geth
- erigon
- nethermind

in order to run a node, setup and run the client.

JSON-RPC define methods like `eth_getBlockByNumber` compatible with any JSON-RPC compatible request.

## JSON-RPC

remote procedure call protocol that uses JSON to encode messages.

JSON-RPC is an API standard

similar standard to REST typically usefull for CRUD.

transports data in JSON syntax.

[reference of JSON-RPC interface methods](https://docs.alchemy.com/reference/ethereum-api-faq#what-methods-does-alchemy-support-for-the-ethereum-api)

## REST and JSON-RPC

rest flow
- client application sends a request (typically a CRUD operation)
- database, loaded with a REST API standard interface, accepts the request, updates the resource, sends back a success or fail response.

JSON-RPC flow

client sends a request and receives a response, the node acts as a listening server.

- a JSON-RPC request is submitted on the client (read/write methods)
- web3 wallet, acts as a provider that routes the request to the node is connected to.
- node receives request, runs the method and sends back a response containing the result of the method.

```json
// not valid json with comments but...!

// REQUEST
{
  "jsonrpc": "2.0", //version
  "method": "eth_getBalance", //method that is in the interface
  "params": [
    "0xd6992ba7b0d09dD088E3522743d890584A2F5ac4"
  ], // params relevant to the method invoked
  "id": 0 // arbitrary id of the request, only relevant for batched requests. Standalone requests 0.
}

// RESPONSE to eth_getBalance
{
  "jsonrpc": "2.0",
  "result": "0x7Cf7d425bb6a906", // hexadecimal representation of the wei balance
  "id": 0
}
```

https://dashboard.alchemy.com/composer

https://ethereum.stackexchange.com/questions/26710/why-is-ethereum-json-rpc-using-hexidecimal-for-numbers

every node contains a JSON-RPC interface to communicate with the blockchain.

signed JSON-RPC requests are transactions as they write on the global state of the blockchain.

# query ethereum

an alchemy accounts allows to
- create an HTTP URL to an ethereum node
- analytics for web3 dapp
- enhanced API and alchemy SDK

JSON-RPC request to an ethereum node, node acts as a server
```json
{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": [
    "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    "latest"
  ],
  "id": "0"
}
```

JSON-RPC request in your own command line

```sh
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}' https://eth-mainnet.alchemyapi.io/v2/gZgOOh1X3cpVWXeVR9EL51zC1vpbggIF
```

on windows single quotes can't be used and inner double quotes have to be escaped
```cmd
curl -X POST --data “{\“jsonrpc\”:\”2.0\”,\”method\”:\”eth_blockNumber\”,\”params\”:[],\”id\”:83}” https://eth-mainnet.alchemyapi.io/v2/gZgOOh1X3cpVWXeVR9EL51zC1vpbggIF
```

```json
{
    "jsonrpc": "2.0",
    "id": 83,
    "result": "0xc30ba7" // block number in hex format, 12782503
}
```

create a project structure
- mkdir and cd into `json-rpc-interactions`
- `npm init -y`
- `npm install axios`
- run `touch index.js`

axios is a library for making HTTP requests.

`eth_getBlockByNumber`

params
- `QUANTITY` - integer of a block number or string
- `boolean` - returns full tx objects if true, false only returns the hashes of txs.

```json
params : [
  "0x1b4",
  true
]
```

# batch transactions

`id` property in JSON-RPC requests is used to identify a request in a batch.

making several remote procedure calls can be done at once and receive responses for each one. `id` defines which response corresponds to which request.

```js
const request1 = {
  jsonrpc: '2.0',
  id: 1,
  method: 'eth_blockNumber',
}

const request2 = {
  jsonrpc: '2.0',
  id: 2,
  method: 'net_version'
}

const response = await axios.post(url, [request1, request2]);

console.log(response.data);
/*
  [
    { id: 1, jsonrpc: '2.0', result: '0x0' },
    { id: 2, jsonrpc: '2.0', result: '0xb1a2bc2ec50000' }
  ]
*/
```

# ethereum nodes

ethereum nodes maintain integrity of the network and its data.

full nodes store and validate all blocks and transactions locally. Ethereum full nodes execute all instructions.

alchemy provides indexed data from block 0 and latest data from most recent and pending block.

ethereum stores data in merkle patricia trees.

MPTs retain properties of a merkle tree.

root hash represents the entirety of its contents (if any data changes the root changes)

[patricia tree specification](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/)
[design rationale of PMTs](https://ethereumbuilders.gitbooks.io/guide/content/en/design_rationale.html)

4 tries are used to store data in ethereum

- state trie global state of ethereum network, only one state trie constantly updated by executed txs in mined blocks
- storage trie each account has a storage trie, keeps track of persistent variables within a contract account (storage).
- transaction trie one per block containing all transactions in a specific order determined by the validator.
- receipts trie - each tx has a receipt containing logs, gas used and post-transaction state.


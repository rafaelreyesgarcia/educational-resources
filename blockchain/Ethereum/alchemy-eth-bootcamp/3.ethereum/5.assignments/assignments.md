# build own block explorer

block explorers allow to view
- information about the network
- blocks in the blockchain
- transactions in a block
- accounts
- etc

https://github.com/alchemyplatform/blockexplorer

clone to get a starter template.

differences between ethers and alchemy SDK

```js
// ethers
const blockNumber = await provider.getBlockNumber();

const transcations = await provider.getBlockWithTransactions(SOME_BLOCK_NUMBER);

// alchemySDK
const blockNumber = await alchemy.core.getBlockNumber();

const transactions = await alchemy.core.getBlockWithTransactions(SOME_BLOCK_NUMBER);

// access provider directly
const ethersProvider = await alchemy.config.getProvider();
```
# week 3 recap

- ethereum is a censorship resistant and immutable computer with verifable computation.
- JSON-RPC is the API standard used by nodes to receive queries
- writing queries are transactions
- JSON-RPC is low-level protocol to communicate with ethereum.

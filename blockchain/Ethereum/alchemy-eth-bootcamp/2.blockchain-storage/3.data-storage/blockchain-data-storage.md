# blockchain data storage

## merkle trees in blockchains

merkle trees allow efficient data verification.

bitcoin uses merkle trees to store every mined tx on the network.

all of txs per block are arranged into a merkle tree. What's commited into the block is the merkle tree's root hash.

tx data can be stored off-chain (full nodes, tx records on a leveldb integrated in full nodes)

merkle trees allow to commit one piece of data instead of thounands of txs.

blockchains grow perpetually so efficient data storage goes a long way.

### merkle proofs

merkle tree design is a recursive hashing-based algorithm

a merkle proof confirms specific txs represented by a leaf or branch within the merkle hash root.

merkle trees are
- space and computationally efficient
- optimal for scalability and decentralization
- efficient as only committing a merkle root hash is necessary to verify multiple transactions.
- reduce memory needed to verify data and integrity.
- require less data to be broadcasted across the network.
- allow SPV, (simple pay verification)
- wallets are essentially light client nodes

to verify data in a merkle tree, there's a **prover** and a **verifier**.

**merkle tree** data structure to validate data

**merkle root** hash contained in the block header, derived from hashes of all txs in the block.

**merkle path** info the user needs to calculate the value of a merkle root from their own tx hash.

**merkle proof** proves existence of a specific tx in a specific block without the user needing to verify all txs in the block. includes merkle root and path.

merkle tree dara structure in blockchains have low-level implications in storage.

the less efficient use of data storage, the more expensive a program is to use.

## ethereum tries

bitcoin popularized merkle trees for scalable transaction inclusion.

ethereum data storage also needs **patricia merkle tries**

bitcoin blockchain architecture

Header
- version
-prevBlockHash
- merkleRootHash
- timestamp
- bits
- nonce

Transaction

primary ethereum block properties
-state root
- transaction toor
- receipt root
- merkleRootHash

transactions are static and immutable after being commited.

merkle hash root makes this possible.

building a merkle proof proves a transaction existed at a given block.

ethereum uses a `radix trie` or `Patricia trie`

trie comes from 'retrieval'

**radix trie**

tree data structure that allows to retrieve a string value by traversing down branches of nodes that store keys (references) that lead to the value that can be returned.

**merkle patricia trie**

stores key-value pairs just like a hash table.

group similar nodes together.

PMTs are efficient for both data storage and editing data

PATRICIA (practical algorithm to retrieve information coded in alhanumeric)

types of data

- **permanent** (once a tx occurs, the record is sealed forever, immutable)
- **ephemeral** nonce, balance, storageRoot, codeHash

merkle trees are perfect for permanent data. PMTs are perfert for ephemeral data

### block header

block header is the hash result of data elements contained in a block.

block header hashes all data properties of block
- state root (root hash of the state trie)
- transaction root (root hash of block's transactions)
- receipts root (root hash of receipts trie)

### state trie

state trie acts as a mapping between addresses and account states.

global state constantly being updated by tx executions.

the state trie is where all data about accounts is stored and retrieved by querying it.

address becomes the key and the acccount state as the value.

### transaction trie

tx trie records txs

> once the block is mined, the tx trie is never updated.

each tx has multiple properties

- from
- gas
- gasPrice
- hash
- input
- nonce
- to
- transactionIndex
- value
- v
- r
- s

`eth_getTransactionByHash` method.

### transaction receipt trie

records receipts (outcomes) of transactions.

## learn tries

pronounced try

comes from retrieval

ideal for storing strings.

### tries javascript implementation

Trie represents the entire data structure.

TrieNode each letter in the structure.

data for a branching node

```js
{
  key: "E",
  isWord: false,
  children: {
    'L': lNode,
    'R': rNode,
  }
}
```
## supplemental reading

[vitalik's merkling overview](https://blog.ethereum.org/2015/11/15/merkling-in-ethereum/)
[overview of patricia merkle trees](https://medium.com/shyft-network-media/understanding-trie-databases-in-ethereum-9f03d2c3325d)
[visuals](https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture/6413#6413)
[RLP](https://eth.wiki/en/fundamentals/rlp)

patricia merkle tries benefits
- efficient data verification
- complex light-client queries
- change values quickly and recompute a portion of tree. (this can prevent DDOS attack vectors).
- the depth of tree has a limit
- order of updates doesn't matter for the root hash

ethereum node maintain four tries

- state trie with information about ethereum accounts
- storage trie where we can write persistent data from smart contracts
- transactions trie that contain txs stored in a block
- receipts trie that contains information (log/events) from contracts
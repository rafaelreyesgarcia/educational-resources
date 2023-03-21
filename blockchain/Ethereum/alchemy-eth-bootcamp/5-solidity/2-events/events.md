# events

events provide logging functionality to write information to a data structure outside of a contract's storage variables.

events are an abstraction for `LOG0` `lOG4`

the opcode depends on the `topics`

the event declares the number of topics using the `indexed` keyword.

a topic is a variable to be included in an event and allows us to apply a filter on it

low-level logs are stored in the transaction receipt.

logs are written by the smart contract when the contract emit events, can't be read by the contract.

a variable not marked as `indexed` prevents adding a filter on the variables.

contracts can write events but not read them.

fix is to listen/write to code using a provider.

`eth_getLogs` also gets the same log data in a JSON-RPC connection.

https://docs.soliditylang.org/en/v0.8.17/contracts.html#events

https://www.evm.codes/#a0

https://www.evm.codes/#a1

https://www.evm.codes/#a2

https://www.evm.codes/#a3

events and logs are stored in transaction receipts

not requried for blockchain consensus

verified since hashes are stored in blocks.

LOG0 useful for logging/debugging while building contracts.

# hardhat challenges

`npx hardhat node` spins up a local persistent hardhat blockchain on port 8545

how to store values on transactions to then be accessed later?

## 1. emitting an event

declare events with `event`

events are typically UpperCamelCase and functions are lowerCamelCase

style choice (compiler doesn't care)

`emit` events

### retrieving event logs

`eth_getLogs` JSON-RPC method

request with any block range and a cap of 10k logs in the response

or 2k block range with no cap and 150MB limit on response size.

arguments
- block hash either a specific block or left blank to use `fromBlock` and `toBlock`
- address contract address or a list of addresses from which logs should originate
- fromBlock can be a block tag or a block number
- toBlock ... ...
- topics array of 32 bytes, each can be an array of DATA with or options.

returns a list of objects

the `topics`

events have at least one topic, this case the hash of the event signature.

keccak256 hash of  `Deployed(address)`

having the event as a topic allows to quickly filter for those events.

an **anonymous event** has no topic add the `anonymous` keyword to the event signature

saves gas but is difficult to distinguish events

https://docs.alchemy.com/docs/deep-dive-into-eth_getlogs

## 2. transfer

pass multiple arguments to an event

### named arguments

its optional to name arguments in events

the difference is in the ABI

## 3. block global variable

## 5. indexed

`indexed` keyword allows to filter on event arguments.

`event HighScore(address indexed player);`

### indexing

`LOGX` opcode is used where `x` is the number of topics.

any from 0 to 4

first topic is hash of the event signature.

`event Transfer(address indexed owner, address indexed beneficiary1, address indexed beneficiary2)`

the most topics allowed on any log are 4. 1st is (hash of the event signature)

specify topics on `eth_getLogs` JSON-RPC method to look for events involving a particular address.

know all `Transfer` events involving `0x7a580af1ca28d91c905e083071bb72b46c5dfc0d`


hash the event `Transfer` signature

````
keccak256("Transfer(address, address, address)");
```

the hash and the address become the parameters to `eth_getLogs`

```
params: [{
  "topics": [
    "0x3b5c651dbcca6f936576130d201fbc5f5a2c3568820a6d9b2987ea2b7fc91b32",
    "0x0000000000000000000000007a580af1ca28d91c905e083071bb72b46c5dfc0d"
  ]
}]
```

address is padded with zeroes.

topics are expected as 32 byte hexadecimal strings.

addresses are only 20 bytes long so padding them with zeroes fills the size to fit a 32 byte string.



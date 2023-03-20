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


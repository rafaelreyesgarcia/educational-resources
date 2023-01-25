# introduction to ethereum

ethereum is a deterministic but unbounded state machine consisting of a globally accessible singleton state and virtual machine that applies changes to that state.

uses blockchain to synchronize and store the system's state changes.

uses ether to meter and constrain execution resource costs.

ethereum is a computer that allows nodes to connect and rum the same computer program to set the consensus for how the nodes should communicate, store data, etc.

the caveat of a decentralized globally accesible computer is that computation is expensive.

## properties of ethereum

**truly global singleton**

first ever global singleton, not localized in a specific or defined location.

All computers until now have been local, physical servers and clients used to operate programs.

**censorship resistant**

no single authority can shut down, compromise, attack or ban this global singleton.

**ubiquitous and accessible**

the only dependency is the internet, then nothing prevents from interacting with this computer.

to write on the computer's state, you only need internet and ether.

**natively multi-user**

wide input range of keccack256 hash function there's a vast range possible for account creation.

https://www.youtube.com/watch?v=S9JGmA5_unY

**verifiable and auditable**

smart contracts inherit these properties from ethereum

the point of ethereum is not to be fast but to be trustworthy.

## ethereum vs bitcoin

ethereum has a virtual machine that supports turing-complete languages so arbitrary code can be programmed.

bitcoin's script language is purposefully restricted to simple boolean evaluations to determine if a certain UTXO can be spent. It doesn't allow loops.

the halting program of turing-complete languages.

```js
for (let i = 0; i >= 0; i++) {
  console.log(i);
}
```

in order to prevent loop attacks, ethereum designed its own virtual machine to run transactions within.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Ethereum</th>
      <th>Bitcoin</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th>consensus mechanism</th>
    <td>pos</td>
    <td>pow</td>
    </tr>
    <tr>
    <th>accounting system</th>
    <td>account</td>
    <td>UTXO</td>
    </tr>
    <tr>
    <th>public key cryptography</th>
    <td>secp256k1</td>
    <td>secp256k1</td>
    </tr>
    <tr>
    <th>stale/orphan blocks</th>
    <td>rewarded (ommer)</td>
    <td>not rewarded</td>
    </tr>
    <tr>
    <th>block time (approx)</th>
    <td>12s</td>
    <td>10min</td>
    </tr>
    <tr>
    <th>network difficulty</th>
    <td>adjusted every block</td>
    <td>adjusted every 2016 blocks</td>
    </tr>
    <tr>
    <th>language support</th>
    <td>turing complete</td>
    <td>non-turing complete</td>
    </tr>
  </tbody>
</table>

## EVM

a virtual machine is a program that emulates a particular environment for code to run in

Java virtual machine allows developers to write java code on different machines without worrying about underlying computer architecture.

### gas

measurement of the cost to each operation to write on the network state.

an operation in assembly code is lower level that describe a simple task (like storing or loading a value in memory)

operation codes (opcodes) execute a low level operation with a corresponding gas cost.

opcode categories

- arithmetic (`ADD` `DIV`)
- current context of tx (`TIMESTAMP`)
- interact with temporary memory (`MSTORE`, `PUSH32`)
- interact with persistent memory (`SSTORE`, `CREATE`)
- control flow operations (`JUMP`, `JUMPI`)

`BALANCE` requires a lookup in persistent memory and that's why its expensive (700 gas)

temporary memory only exists for the extent of the transaction.

persistent memory lives after the function call.

denial of service attacks can slow the network and deny users of the service by exploiting discrepancies between computationally expensive operations.

## forks

each update to ethereum is specified in an **Ethereum Improvement Proposal** (EIP).

updating the EVM requires forking the network.

the EVM is outlined in the yellow paper.

ethereum clients are EVM implementations in different languages that follow the EVM specification.

[tangerine whistle, DOS attack fork](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-608.md)

[list of hard forks](https://ethereum.stackexchange.com/questions/13014/summary-and-history-of-the-ethereum-hard-forks/13015#13015)


# proof of stake

the merge was ethereum's transition from POW to POS on sep 15th 2022

a miner has large energy requirements to compete profitable as a POW miner.

POS energy requirements are much lower.

validators require 32ETH to stake.

stake is used as collateral against bad actors.

validators don't compete, the network randomly selects them every 12 seconds to propose a new block.

**finality** in blocks refers to how confident you are a given block is immutable and can't be forked away.

older blocks have high finality.

block tags
- **earliest** lowest numbered block the client has available
- **finalized** most recent secured block that has been accepted by >2/3 of validators. A block finalizes in two epochs (64 blocks), unlikely to be re-orged.
- **safe** the latest secured block, safe in one epoch (32 blocks)
- **latest** most recent block in the canonical chain observed by client. can be reorged.
- **pending** contains txs from local mempool, these blocks haven't been mined yet.

some methods require a block number or block tag as parameters when querying data on-chain.

# gas on ethereum

## EIP-1559

**wei** 10^-18
**gwei** 10^-9

every block has a max gas that can be used within it.

this determines the number of txs included within a block.

every block has a capacity to use 30,000,000 gas but has a target of 15,000,000 total.

price of gas is determined by amount of demand for block space.

demand is measured by how filled previous block was relative to target gas.

base fee is burned instead of given to the miner.

[gas fee estimator](https://docs.alchemy.com/docs/how-to-build-a-gas-fee-estimator-using-eip-1559)

miners are incentivised with a tip now.

tip set to 1gwei but can fluctuate.

when setting the gas for a tx we're setting a `maxPriority Fee` equal to `max fee` + `tip`

# ethereum accounts

## externally owned accounts

**EOAs**

address and public key are associated to a private key via elliptic curve digital signature.

an address in ethereum is 40 character hexadecimal string and 26-36 alphanumeric string in bitcoin.

bitcoin addresses end in a checksum to ensure the address is typed properly.

EOAs have a balance so the global state of the blockchain tracks how much ether every active address on the network holds.

16^40 or 2^160 possible ethereum addresses that can be generated.

these addresses aren't included until they have interacted with blockchain.

## accounts vs UTXOs

the transferred amount is substracted from sender's address balance and added to recipient's address balance in the global state tree.

`BALANCE` opcode lets us lookup an address balance inside code.

ethereum addresses contain a nonce. the nonce keeps count of all txs sent from a particular address.

once a transaction is mined, the miners enforce a rule that the nonce of the next transaction should increment by 1.

ethereum accounts have a nonce that keeps count of txs

## contract accounts

a program that runs in the blockchain execution environment.

to deploy a contract an EOA needs to run a transaction with the bytecode of the compiled smart contract.

a contract has its own account with a balance and an address.

the address is held in storage and updated through transactions.

its possible to upgrade a system by deploying new contracts and running a transaction to update references to point to the new addresses.

# supplemental reading

https://ethereum.org/whitepaper/

https://ethereum.github.io/yellowpaper/paper.pdf

https://github.com/chronaeon/beigepaper

https://ethereum.org/en/

https://www.alchemy.com/overviews

https://www.alchemy.com/dapps

https://docs.alchemy.com/

https://github.com/crytic/evm-opcodes

https://vitalik.ca/general/2017/09/14/prehistory.html

https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/

https://github.com/ethereumbook/ethereumbook
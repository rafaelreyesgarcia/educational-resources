# introduction to avalanche ecosystem

goals
- web3 paradigm emergence
- key features of avalanche consensus model and snowman protocol
- P-chain X-chain and C-chain
- avalanche developer community

## web1 web2 and web3

- web1 read-only web with no interaction between users.
- web2 read-write web with user interaction.
- web3 read-write-own trustless, permissionless and decentralized web.

centralization made possible for billions of people to interact on the web.

'handful of companies control and influence major components on the web.

web3 operates on the premise that the internet should be built, maintained and operated by its users, as opposed to being monopolized by a few companies.

### web1 read-only

- tim berners around 1990 - 2004
- earliest iteration of the web.
- small content crateors wrote web pages for entire global web audience.
- focused on access to information through hyperlinks.
- lack of forms, visuals, interactivity of modern web.
- information is presented like a brocuher, text oriented, not much multimedia.

### web2 read-write

- social media take off
- content creators increased
- platforms started to develop **user generated content UGC**
- user-to-user interactions
- end-user experience improved

### web3 read-write-own

- web is centered around users trusting a handful of companies.
- web3 uses blockchain, cryptocurrencies and smart contracts to distribute ownership and reduce trust factor in the web.
- web3 is trustless. third party trust is replaced by economic incentives to validate data collectively.
- web3 is decentralized as ownership is distributed among builders, users instead of just c-suites and executives (waaaaay far from this)
- web3 native payments cryptocurrency doesn't rely on bank architecture or payment processors, relies on smart contracts that run on an execution environment secured by cryptography and blockchain

## blockchain

- blockchain is a decentralized digital ledger.
- collection of records linked to each other.
- every user (node) has a copy of the ledger.
- data is encrypted through cryptographic algorithms.
- data is immutable.
- different blockchains use different hashing algorithms to maintain consensus.

## avalanche network infrastructure

avalanche features three built-in blockchains
- exchange chain (X-chain)
- platform chain (P-chain)
- Contract chain (C-chain)

all blockchains are validated and secured by avalanche **validators** referred to as the **primary network**.

### Contract chain 

- default smart contract blockchain on avalanche running a EVM
- implements the snowman consensus protocol

### platform chain

- metadata blockchain on avalanche
- coordinates validators
- keeps track of active subnets
- enables creating subnets
- snowman consensus protocol

### exchange chain

- default asset blockchain
- enables creation of assets
- exchange assets and cross-subnet transfers
- implements the avalanche consensus protocol.

## differences between the chains

### c-chain
- uses ethereum 0x address
- compatible with metamask

### x-chain
- sending and receiving funds
- cannot be used with metamask
- X-avax prefix instead of 0x prefix of c-chain addresses

### p-chain
- allows users to stake AVAX and become a validator.
- P-avax prefix

## consensus mechanism

- avalanche consensus protocol
- snowman protocol

## avalanche consensus protocol

a blockchain is a decentralized distributed ledger used to record transactions.

transactions are blocks of data.

consensus is a procedure in which a network reaches agreement about the current state of the data in the network.

through a consensus mechanism a blockchain stablishes reliability and trust.

- consensus is the means by which validators come to an agreement about a decision. They decide the state of the data on a blockchain.

- each validator is independent. 

- a validator hears a transaction and independently votes to accept or reject a tx.

- a validator makes an initial decision, then collaborates with the rest of the network to agree 

- a validator randomly selects other validators to ask about agreement or rejection until enough data is built to determine the accuracy of the agreement

### snowman protocol

- chain-optimized protocol that allows for high-throughput.
- snowman establishes a totally ordered timeline.
- both p-chain and c-chain implement the snowman consensus protocol.
- snowman is avalanche consensus protocol but applied to a linear chain rather than a DAG.

## avalanche developer resources

- [developer documentation](https://docs.avax.network/)
- [avalanche support](https://support.avax.network/en/)
- [avalanche smart contract tutorials](https://docs.avax.network/dapps/smart-contracts)
- [avalanche community tutorial contests](https://docs.avax.network/community/tutorials-contest/2022)
- [avalanche whitepapers](https://www.avalabs.org/whitepapers)

## quiz

1. Which of the following are characteristics of Web3?
> decentralized, facilitates participation without needing authorization
2. Which of the following are characteristics of a public blockchain?
> decentralized network, permissionless, immutable
3. How many built-in blockchains does Avalanche have?
> 3
4. Which blockchain facilitates the creation of Ethereum-compatible smart contracts?
> c-chain (contract chain)
5. Which of the following about the P-Chain is false?
> allow trading of assets (done on the x-chain)
6. The **x-chain** handles assets on Avalanche, e.g. creating and exchanging of assets.
7. Which two blockchains make use of the Snowman Consensus protocol?
> platform and contract chain, exchange chain uses avalanche protocol.
8. The C-Chain differs from the other two blockchains in terms of address format as it follows ethereum style addresses.
9. Snowman is the Avalanche consensus protocol, but applied to a linear chain instead of a DAG.
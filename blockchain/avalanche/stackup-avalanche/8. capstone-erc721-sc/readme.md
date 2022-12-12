# capstone project ERC721 smart contract

goals 
- describe an NFT
- explain concept of decentralized storage
- ERC721 token standard
- create an ERC721 smart contract
- deploy an ERC721 to avalanche fuji testnet using hardhat

## introduction to NFTs

- cryptographic assets on the blockchain
- non-fungible means the assets are unique and have unique identifiers and metadata 
- once an NFT is minted it cannot be altered proving that ownership of the asset is held by the correct valid keypair.
- NFTs are unique assets owned by a specific address
- NFT's can be exchanged but can't be divided
- each NFT contains unique metadata 
- records are stored on the blockchain

## introduction to decentralized storage

- only metadata is stored on the blockchain
- metadata is data that describes the NFT, the name of the author, date of creation, etc.
- actual assets are stored off-chain in a decentralized storage hosting site.
- smart contracts contain off-chain location of where the assets are stored.
- images, videos, audio files require a lot of storage space and storage space is expensive
- IPFS most common storage solution, distributed network
- the traditional internet works off a location-based addressing where users visit URL and the URL points to servers in certain locations. decentralized platforms like IPFS don't rely on specific locations to serve clients, nodes are distributed.
- decentralized storage is data stored on a distributed network across multiple nodes
- retrieval of data is handle by nearby peers.
- centralized storage systems result in network bottlenecks if traffic is larger than what the network can handle.
- decentralized storage copies data on multiple nodes so it can be retrieved from any of them

### decentralized storage 

**centralized storage** is possible with
- physical media like HDDS or SSDs, USBs, etc
- centralized cloud storage hosted on a central cloud operated by a company

via the internet, users upload and download files from a server which forwards/receives data from multiple servers

having multiple servers running allows to keep data available even during maintenance 

when files are in transit from the PC to the server they are encrypted with 128-bit SSL technology

once on the servers, 256-bit encryption is used to encrypt the information, only the storage platform holds the encryption key not you

problems with centralized storage
- data breaches
- data outages
- rising storage cost
- lack of ownership
- censorship and monitoring

**decentralized storage** means files are stored on multiple nodes

- requesting files is done by downloading fragments of that file from nodes until the full file is downloaded
- decentralized storage encrypts files guaranteeing only the keypair holder can read and write
- sharding allows to prevent a single node to have the entirety of your file

benefits of decentralized storage
- low storage cost
- fair market prices
- faster speeds
- greater security and privacy
- minimal file loss

decentralized storage solutions

**IPFS**

interplanetary file system

protocol delivers information based on what is it instead of where is it. ICO in 2017 still waiting for a finished product

**storj (tardigrade)** 

built on ethereum designed for storage scenarios. 

splits and encrypts files on the client before distributing across nodes.

storj is open sourced with storage being decentralized while the settlement and indexing are centralized

**PPIO**

same group that created PPTV

developing application layer and support for video-on-demand live streaming solutions

**sia**

came out of a HackMIT 2013 hackathon

**maidsafe**

13 years in the making

files uploaded to the SAFE network are fully encrypted

files are not stored on any servers.

alpha launched in 2017

**swarm**

based on ethereum

**burst**

first proof of capacity coin

first blockchain to implement turing complete smart contracts

works on plotting hard drive space

potential disadvantages of decentralized storage

- consensus proofs are complicated to implement
- business lacks legal accountability if files are lost or breached
- performance issues compared to centralized solutions

## ERC721 token standard

a token standard used for NTFs

`tokenId` and `address` are mandatory NFT variables

methods and events that are implemented by an ERC721 smart contract

- `ownerOf` gets the owner of a specific token
- `balanceOf` gets the current token balance
- `getApproved` approving an amount of token from an account
- `transferFrom` transferring tokens from one account to another

### [ERC7-21](https://decrypt.co/resources/erc-721-ethereum-nft-token-standard)

ERC-20 allowed ICOs to launch in 2017

ERC-721 allowed the NFT boom of 2021

a template, format for developers to follow

standards make code 
- easier to read
- more predictable
- reusable

the standard was proposed by Dieter Shirley as an EIP and co-authored by william entriken, jacob evans and nastassia sachs

once a proposal is submitted is reviewd and revisioned before accepted

once accepted, it moves to an ethereum request for comments ERC 

history of the standard
- sep 17 - proposal is introduced
- dec 17 - cryptokitties launches and congests the network
- dec 17 - opensea launches
- jun 18 - accepted as final

ERC-721 are also known as deeds because possesing an ERC-721 means you own the rights to whatever the token represents.

deeds are associated with property and NFTs go beyond the scope of property thus 'non-fungible token' is a more fitting term

## get core wallet recovery phrase

retrieve recovery phrase from core wallet

## requirements

- git

## project setup

clone repository

```sh
git clone -b avax-quest-8 https://github.com/stackup-dev/advancing-into-avalanche.git

# access directory

cd advancing-into-avalanche
```

`ButterflyToken.sol` is the ERC-721 smart contract located in the contracts directory

two variables declared: `tokenCounter` and `MAX_TOKENS`

variables in solidity are declared using this syntax

`type visibility-modifiers variable-name`

`tokenCounter` used to keep track of the number of tokens minted

`MAX_TOKENS` max supply that can be created

### `mint` function

```
require(tokenCounter < MAX_TOKENS, "ERC721: Max supply");
```

`require` keyword makes sure that the tokens minted must be less than the max supply before proceeding

```
_safeMint(msg.sender, tokenCounter); 
_setTokenURI(tokenCounter, _tokenUri); 
tokenCounter = tokenCounter + 1;
```

`_safeMint()` and `_setTokenURI()` come from the library we imported in line 4

`_safeMint()` takes in `msg.sender` and `tokenCounter` as parameters. when called, it will mint a token and transfer it to the wallet address

`msg.sender` refers to the wallet address calling the function

`_setTokenURI()` takes a `tokenId` and `uri` as parameters. the function sets token metadata such as description, name, image url, etc

## solidity concepts - value types and visibility modifiers

- boolean
- unsigned integer from 8 bits to 256. 256 uint is the same as uint
- address designed to hold up to 20 bytes of data

visibility modifiers
- `external` called by other contracts, can't be used for internal calls. state variables can't be marked as external
- `public` can be used both externally and internally
- `internal` can only be used internally or by derived contracts
- `private` can only be used internally and not by derived contracts

## preparing deployment

hardhat.config.ts replace private key in line 6 with core wallet recovery phrase

- `deploy_butterfly_token.ts` file is used to deploy the s mart contract using hardhat
- `contractFactory` in ethers.js is a factory pattern (class) to instantiate smart contracts
- calling `deploy()` on a `contractFactory` starts the deployment

## deploy

```
npx hardhat run scripts/deploy_butterfly_token.ts --network avalanche_fuji
```

deployed contract address
`0x0dd943252F037Cc84beeeAF1Df1d8Fdcf709C914`

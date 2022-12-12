# capstone project - NFT marketplace front end

## setting up a second account

create a second wallet in core for the bidder wallet as the auction creator can't bid 

## requirements

- git

## project setup

clone repository

```sh
git clone -b avax-quest-11 https://github.com/stackup-dev/advancing-into-avalanche.git

# install dependencies
npm install

# deploy the frontend

npm start
```

## connecting to deployed smart contracts

NFT address

`0x0dd943252F037Cc84beeeAF1Df1d8Fdcf709C914`

auction manager smart contract address

`0xBc49c7c183e61Df3abD426231290153f96e243eB`

to initialize a contract object, you need 
- contract address
- contract ABI
- wallet signer object

## getting the NFTs

```js
const walletAddress = await this.signer.getAddress(); 
let tokenOwner = null; 
let counter = 0; 
const NFTIds = []; 
do { 
 try { 
  tokenOwner = await this._nft.ownerOf(counter); 
  if (tokenOwner === walletAddress) { 
   NFTIds.push(counter); 
  } 
  counter++; 
 } catch (error) { 
  tokenOwner = null;  } 
 
} while (tokenOwner != null); 
this.setState({ myItems: NFTIds });
```

`_nft.approve()` requires the address to send the NFT to and the token id, this function transfers the NFT to the auction contract where it will be held until auction is over

`approve` function output is null, the contract object itself will produce a an output

after `approve` we wait until tx is published hence `.waitForTransaction()` 

`ethers.utils.parseEther` formats the string value into a big number instance of the amount of wei

## creating an auction

```js
let { hash: allowance_hash } = await this._nft.approve( 
 	AUCTIONMANAGER_ADDRESS, 
 	this.state.newAuction.tokenId 
	);  
console.log("Approve Transaction sent! Hash:", allowance_hash); 
await this.provider.waitForTransaction(allowance_hash);  console.log("Transaction mined!"); 
  
let { hash } = await this._auctionManager.createAuction( 
 	this.state.newAuction.endTime * 60,  
 	ethers.utils.parseEther(this.state.newAuction.minIncrement.toString()),  
 	ethers.utils.parseEther(this.state.newAuction.directBuyPrice.toString()),  
 	ethers.utils.parseEther(this.state.newAuction.startPrice.toString()),     
 	NFT_ADDRESS,  
 	this.state.newAuction.tokenId  
	); 
console.log("Transaction sent! Hash:", hash); 
await this.provider.waitForTransaction(hash);   
console.log("Transaction mined!"); 
alert(`Transaction sent! Hash: ${hash}`);
```

`approve` function allows to transfer the NFT to the auction contract until auction is over

`createAuction()` expects 6 parameters

time is stored in seconds so value has to be multiplied by 60

## getting the auctions

```js
let auctionsAddresses = await this._auctionManager.getAuctions();  
let auctions = await this._auctionManager.getAuctionInfo(auctionsAddresses);  
  
let new_auctions = []; 
 
for (let i = 0; i < auctions.endTime.length; i++) { 
 	let endTime = auctions.endTime[i].toNumber(); 
 	let tokenId = auctions.tokenIds[i].toNumber(); 
 	let auctionState = auctions.auctionState[i].toNumber(); 
  
 	let startPrice = ethers.utils.formatEther(auctions.startPrice[i]); 
 	let directBuyPrice = ethers.utils.formatEther(auctions.directBuy[i]); 
 	let highestBid = ethers.utils.formatEther(auctions.highestBid[i]); 
  
 	let owner = auctions.owner[i]; 
  
 	let newAuction = { 
  	endTime: endTime, 
  	startPrice: startPrice, 
  	owner: owner, 
  	directBuyPrice: directBuyPrice, 
  	tokenId: tokenId, 
  	highestBid: highestBid, 
  	auctionState: auctionState, 
  	auctionAddress: auctionsAddresses[i], 
 	}; 
 	new_auctions.push(newAuction); 
	} 
this.setState({ auctions: new_auctions }); // Update the state
```

`getAuctions()` doesn't require an input as its a getter function (reads, looksup a value)

returns a list of auction contract addresses

`getAuctionInfo()` takes a list of contract addresses and outputs a variety of arrays with a certain index corresponding to a contract

looping through the list, formatting each value 

append each `newAuction` item to an array `new_auctions` and save it in state with `setState()`

## midway check

parameters to test
- start price 0.1 
- token id 1
- minimum increment 0.001
- direct buy price 1
- duration in minutes 30

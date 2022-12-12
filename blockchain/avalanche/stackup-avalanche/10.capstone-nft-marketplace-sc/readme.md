# capstone project - NFT marketplace SC

## introduction to decentralized finance

defi allows people or businesses to conduct financial transactions
- lending
- trading
- making payments

in centralized finance, banks act as the third party to facilitate money transfers between parties charging a fee for this service

defi providdes security and transparency

in defi you can check all accounts, liquidity, positions and liabilities of an organization or individual as all this information lives on-chain

cefi is opaque and all the information above is not all available

- defi eliminates intermediaries by allowing people, merchants and businesses to conduct financial transactions
- defi enables any two parties to directly negotiate 

## requirements

- git

## project setup

clone the repository

```sh
git clone -b avax-quest-10 https://github.com/stackup-dev/advancing-into-avalanche.git

# install dependencies locally

npm install
```

## Auction.sol: variables & constructor()

`Auction.sol` 

`endTime` end timestamp of the auction, auction ends if current timestamp is equal or greater than `endTime`

`startTime` timestamp that marks the start

`maxBid` refers to the current max bid amount

`creator` address of the auction creator

`bids` array of collection of bids

`tokenId` id of the token that has been auctioned

`isCancelled` true if the auction has been cancelled

`isDirectBuy` true if someone placed a bid with a higher or equal value than direct buy price

`minIncrement` min increment of the bid

`directBuyPrice` price for a direct buy

`startPrice` starting price of the auction

`nftAddress` address of the NFT contract

`_nft` refers to the NFT token

`AuctionState` is of type `enum` with four different auction states
- `OPEN`
- `CANCELLED`
- `ENDED`
- `DIRECT_BUY`

enums restrict a variable to have onlly one defined value

using enums reduces the chances of bugs 

`struct` object `Bid` contains the bidder and the amount the user bids

`struct` allows to create a custom data type 

`constructor()` function is declared inside the smart contract invoked only once when the contrac tis deployed, it initialises contract states

## Auction.sol allBids()

`allBids` retrieves a list of all current bid amounts and the addresses of the bidders.

has `external` (can be called by other contracts) and `view` (only retrieves a value) visibility modifiers

`addrs` and `bidPrice` arrays are initialized in the body of the function

size of the array is dynamic (based on current number of bids)

current number of bids is retrieved using the `.length` function

a `for` loop is used to assign values from `bids` array to `addrs` and `bidPrice`

## Auction.sol placeBid()

`placeBid()` allows the user to place bids in auctions

`require` keyword is used to set initial requirements to be able to place a bid
- can't be more than 5 bidders 
- auction creator can't place a bid
- auction state needs to be opened before a bid can be placed
- bid submitted must be larger than starting price
- bid submitted must be higher than last bid and 

after all requirements are met, the contract retrieves `lastHighestBidder` and `lastHighestBid`

the previous bid is refunded to the outbid bidder

a `require` is done to check if current bid is more than or equals to `directBuyPrice` if this condition is fulfilled. `isDirectBuy` is set to true and the auction ends

the contract adds a new bid to a list of existing bids

`NewBid` event is emmitted a boolean value is returned as the bid is successfully placed

## Auction.sol - withdrawToken()

check if the auction has ended or if direct buy is triggered

this code calls `getAuctionState()` to check the current state of the auction to ensure that the auction has ended or a direct buy was triggered

another `require` checks that only the highest bidder can withdraw the token

after those conditions pass, then the token is transferred to the highest bidder based on token id using `transferFrom()` 

## Auction.sol - withdrawFunds()

instead of transferring tokens to the auction creator, this transfers the tokens to the bid creator

## Auction.sol - cancelAuction()

`cancelAuction` cancels an existing auction

conditions need to me be met before proceeding cancelling the auction

## Auction.sol - getAuctionState()

returns auction's state based on the variables defined

solidity allows for single line if statements

## AuctionManager.sol

used to list all auctions and to create new auctions

`Auction.sol` is imported

two variables are declared `_auctionIdCounter` gets the number of auctions created and assigns a new id

`mapping` is a table of keys and values similar to arrays but with different syntax

mappings act like a hashtable or dictionary in other programming languages (objects)

`auctions` variable has a key of `uint` type and a value pointing to an `Auction` 

`Auction` variable references the variables in the `Auction.sol` file

## AuctionManager.sol - createAuction()

`createAuction` takes 6 parameters
- `_nftAddress` of type `address`
- other variables are of the type `uint`
- `auctionId` variable is used as an identifier for each auction
- the auction counter is used to count and keep track of the number of auctions created
- then counter gets incremented
- create an Auction contract instance using the parameters
- `Auction` references the constructor() function in Auction.sol

## AuctionManager.sol - getAuctions()

- `_auctions` array is instantiated with a length equal to current value of counter
- for loop iterates over auctions mapping to populate `_auctions` 
- the function returns this array

## AuctionManager.sol - getAuctionInfo()

- function takes one argument `_auctionList` array of addresses
- function returns information regarding an auction
- array variables are declared.
- `owner` is of type `address` while the rest are type `uint`

## compiling and deploying AuctionManager.sol

compiling 
```sh
npx hardhat run scripts/deploy.ts --network fuji
```

Auction Manager deployed to: 
`0xBc49c7c183e61Df3abD426231290153f96e243eB`
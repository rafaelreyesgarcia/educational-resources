# capstone project - game frontend with ERC-721

## setting up pinata account

**pinata** is an IPFS platforms that allows storage of image and image metadata

- has a ready made API server to store and retrieve data from IPFS
- once image is uploaded, images are retrieved with URLs

[pinata free account](https://app.pinata.cloud/register)

- generate an API key
- enable `pinFileToIPFS` under `pinning` section

enabling `pinFileToIPFS` allows to use the pinata API endpoint to upload and store images

creating the API key generates
- API key
- API secret
- JWT 

JSON Web Token is an open industry standard RCC 7519 to represent claims between two parties

## requirements

- git

## project setup

clone project

```sh
git clone -b avax-quest-9 https://github.com/stackup-dev/advancing-into-avalanche.git
```

`npm start` to install dependencies

contract address generated on quest 8

`0x0dd943252F037Cc84beeeAF1Df1d8Fdcf709C914`

copy and paste Pinata API key and secret in `src/util/PinataConnection.js`

`npm start` will deploy the react front-end 

## connecting our wallet

ethers.js functions are found in `src/util/EtherJSFunctions.js`

`connectWallet()` allows wallet connectivity

```js
/* 
start connection to the network 
the connection is set 
*/
const provider = new ethers.providers.Web3Provider(window.ethereum); 

// triggers the core wallet to confirm the connection
await provider.send("eth_requestAccounts", []); 

// return the signer object that contains the wallet details
return provider.getSigner();
```

in `App.js` the `useEffect` hook is used in line 126

trigerred everytime the page is rendered or re-rendered

the `useEffect` hook is set to only trigger once 

by checking the `signer` object for the `address` property is a way to verify if there's a successful connection 

## creating the contract object

`getContract()` creates the contract object used to interact with ERC721 contract

```js
const contractAddress = "INSERT_YOUR_CONTRACT_ADDRESS_HERE"; 
return new ethers.Contract(contractAddress, abi, signer);
```

use contract address generated in quest 8

return the result of the call of `ethers.Contract` which is the contract object. Parameters needed are the `contract address` `application binary interface (abi)` and the `signer` object

`abi` provides specifications that allow communication with external applications and other smart contracts. 

`abi` defines details like
- expected inputs
- expected outputs

> calling a function listed on the ABi will trigger a tx to the smart contract.

## using the contract object to mint an NFT

add code into the `mintNFT()` function

```js
const tx = await contract.mint(stringURI); 
console.log("transaction:>> ", tx); 
await tx.wait(); 
return tx;
```

`mint()` takes in `tokenURI` in the form of a string

a **token URI** is the metadata of an image such as the name, description and link to the image and a link to the image which would be a pinata IPFS URL

the ERC-721 smart contract doesn't return an output but the contract object returns the tx details of calling `mint`

`await tx.wait()` waits until the block where the tx is in has been published on the testnet

time to create a block depends on block size and interval set by the configuration

in the `App.js` the `mintNFT` function is called when matching pairs are found, takes in two parameters `tokenURI` (generated based on image metadata) and `contract` (state variable which is the contract object)

once the NFT is minted `updatedNFTList` array is updated stored in the state variable `mintedNFT`

the data of this array is displayed on the page




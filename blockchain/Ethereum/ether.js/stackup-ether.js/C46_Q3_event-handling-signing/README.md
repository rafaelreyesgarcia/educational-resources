# event handling and signatures with ethers.js

## events 

native functionalities in solidity.

two steps
- define an event
- emit an event

defining an event using the `event` keyword

```sol
event Minted(address indexed minter, uint256 amount)
```

emitting an event using the `emit` keyword

```sol
emit Minted(msg.sender, 10);
```

event only are defined once and used multiple times, (like function declarations)

## purpose of events

- events serve data from smart contracts to off-chain applications  

functions manipulate state variables and return values at the same time.

the call will be submitted as a transaction when using a web3 library.

we receive a tx receipt (tx hash, block number, confirmation, etc) as the returned value from this call not the returned value from the function.

events can read the transaction log and read the actual returned value of a function.

- cheaper form of storage

events can be used to store data inside transaction logs instead of using storage so its a cheaper alternative.

- trigger an action in off-chain application.

## common event methods

create a provider instance to access event methods.

```js
// creates an event listener
provider.on(EVENT_NAME, LISTENER_FUNCTION)
```
`LISTENER_FUNCTION` executes when `EVENT_NAME` is emitted

```js
provider.once(EVENT_NAME, LISTENER_FUNCTION)
```
event listener that will only execute once

```js
provider.off(EVENT_NAME, LISTENER_FUNCTION)
```

removes a specific event listener.

```js
provider.removeAllListeners(EVENT_NAME)
```
removes all event listeners.

## listening to events

write a script to listen to events on the blockchain

backend that listens to single ERC20 transfer event that is being broadcasted live on goerli

```js
const { ethers } = require("ethers");

const eventListener = () => {
  // creates a provider instance 
  const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

  const topicSetsFilter = [
    ethers.utils.id("Transfer(address,address,uint256)"),
  ];

  provider.on(topicSetsFilter, (res) => {
    console.log(res);
  });
};

eventListener();
```
a topic-set is an array of topics.

a topic is an identifier that describes what goes on in an event.

the first topic of the array describes the name of the event and the data types of its arguments.

these are hashed with keccak256 using ethers.utils.id()

after creating the filter we can start listening with `provider.on`

a transaction log is returned from listening to an event.

**transaction log**

***address***
the address of the smart contract that emitted the event

***data*** 
value of the non-indexed event arguments

***topic[0]***
keccak256 representation of the event name and its arguments

***topic[1]***
value of the first indeed argument from the event

***topic[2]***
value of the second argument from the event

a smart contract event can be filtered by event name but also by contract address or indexed arguments.

topic set filter filters by topic (event name and indexed arguments)

```js
// event Transfer(address indexed from, address indexed to, uint256 value)

const filter = [
  ethers.utils.id("Transfer(address,address,uint256)"),
  ADDRESS_FROM,
  ADDRESS_TO,
];

provider.on(filter, (res) => {
  console.log(res);
});
```

log filter to filter by contract address and topic

```js
const filter = {
  address: CONTRACT_ADDRESS,
  topic: [
    ethers.utils.id("Transfer(address,address,uint256)"),
    ADDRESS_FROM,
    ADDRESS_TO,
  ];
};

provider.on(filter, (res) => {
  console.log(res);
});
```

Ethers.js provides contract event methods.

```js
const contract = new ethers.Contract(
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
  ETHERS_PROVIDER_INSTANCE
);

const filter = contract.filter.Transfer(ADDRESS_FROM, ADDRESS_TO);

contract.on(filter, (args1, args2, args3, txnLog) => {
  console.log([args1, args2, args3, txnLog]);
});
```
## signatures

cryptographic signatures are used to prove ownership of a message.

can be used to provide evidence that someone owns something.

signatures are used to broadcast transactions, this is to prove that the sender does indeed own the private key.

ethers.js allows to manually create a raw transaction, sign it and submit it.

```js
const tx = {
  to: "0xRecipient",
  from: "0xSender",
  value: utils.parseEther("1.0"),
};

// after creating the tx, simply sign it

const signedTx = signer.signTransaction(tx);
```

## signing a message

sign messages to verify users SIWE (sign in with ethereum)

websites using SIWE usually store data such as user profiles to require verification in case the data wants to be modified.

```js

const { ethers } = require("ethers");

const signMessage = async () => {

  const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

  const wallet = new ethers.Wallet(
    "0x999cdfc447ae64af13413525f02cfc82a13d1ee40ecc3acf9978d290f8b10515",
    provider
  );

  const message = "ethers.js is a powerful library";

 // Sign the message
 const output = await wallet.signMessage(message); // INSERT METHOD HERE
 console.log("signature of message:", output);
};

signMessage();
```
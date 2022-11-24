# getting started

## **install agoric SDK**
  
### **prerequisites** 
- node.js
- yarn package manager
- git
    
### **clone agoric sdk**

```sh
node --version # 14.15.0 or higher

npm install --global yarn


git clone - community-dev https://github.com/Agoric/agoric-sdk # "community-dev" branch

cd agoric-sdk

yarn install # this installs dependencies

yarn build # builds the packages

# installs agoric CLI in a convenient place in our $PATH
yarn link-cli ~/bin/agoric 
# creates an agoric directory to reference

# running echo $PATH checks current PATH
echo $PATH

agoric --version
```

initialize "dappName" from dapp template

```sh
cd $HOME
agoric init dappName
cd dappName
agoric install
agoric start --verbose
```

### **second terminal agoric wallet and REPL**

```sh
cd demo

agoric open --repl

Launching wallet...

# http://127.0.0.1:8000#accessToken=zedQIcKbw1z-K8oBkKgGywOqAzn_Dx9hfmtdhxW30f9hOq5EG7k9CZUsGpZcq_VI
```
**access token**

zedQIcKbw1z-K8oBkKgGywOqAzn_Dx9hfmtdhxW30f9hOq5EG7k9CZUsGpZcq_VI
  
### **deploy contract and API**

```sh
agoric deploy ./contract/deploy.js
agoric deploy ./api/deploy.js

# start dapp user interface
cd ui && yarn start
```

### **connect dapp to agoric wallet**

http://127.0.0.1:8000 accepts dapp request to connect

### **use dap to collect simulated tokens**

mint fungible tokens
http://localhost:3000
 
approve the offer and collect tokens
http://127.0.0.1:8000

## **deploying smart contracts**

```sh
agoric deploy 
```
  
can deploy smart contract source code onto the blockchain
  
deploy and setup an application program to a local server running an agoric process

dapp has three subdirectories 
- contract/  
files defining on-chain contract

- api/  
enables UI front end to communicate via HTTP/WebSocket to on-chain backend contract instance 

- ui/  
contains files related to contract's browser user interface
  
deployment happens via the local running agoric process (Agoric VM or local server)

```sh
ag-solo
```
  
### ag-solo

connects with either a locally running or remote chain

local process has a home object

home object contain references to services on-chain that can be used 
  
each deploy.js runs its own temporary process connected to ag-solo

### contract/deploy.js

bundles up contract's source code

installs it on the blockchain as source code using Zoe

this doesn't execute contract code, makes code available on-chain

### zoe.install()

install contract source code on-chain

returns installation associated with source code
    
### agoric init 

dapp by default gets the dapp-fungible-faucet contract/deploy.js file 
  
some dapps use a **singleton** contract, is installed once and serves all customers 
  
singletons may need to be
- instantiated
- connect to on-chain resources such as issuers
- create new on-chain resources
- create new purses for the application to use
- seed on-chain contract instance 

## **ERTP**

electronic rights transfer protocol

agoric's token standard for digital assets in javascript

allows to create digital assets 

ERTP uses object capabilities to enforce access control

if a program has a reference to an object it can call its method

accessing mint lets you create more digital assets of a certain kind (type)


assets can be stored in
- payment  
assets to move between purses

- purse  
store assets until withdrawn into a payment for use
    
### send assets 

withdraw from purse creates a payment

send a payment to a recipient object as a message

### receive assets

create purse for the asset kind youll receive 

receive message with the payment and deposit payment in your purse
  
### security properties

a purse has a deposit() method that takes payment as argument

checks the payment is genuine and same asset kind as the purse (an individual purse or payment can only hold one kind of asset set on creation)

### ERTP guarantees
      
the payment is consumed and unavailable for later use

the purse contains the total of what it held + payment's full content
    
when deposit() call goes wrong, it throws an error, both purse and payment keep the state before the call
    
### **issuers and mints**

**mints**  
digital assets as a new payment

can only make one kind of asset

**brand**  
is the currency of a mint  
      
only mints can issue new digital assets

to mint a particular asset you need to have a reference to that kind's mint

a mint associated with a brand, can only create new currency, is the only mint that can create that currency
    
**issuer**  

create empty purses 

manipulate and operate on payments

verify and move digital assets 

an issuer is a mint, has a one-to-one relationship

having a reference to an issuer, you can check the validity of a payment, validating the kind of payment

an issuer associated with a brand can only operate on that currency brand asset holders, also the only issuer that can operate on "x" brand asset holders

**amounts**  

describe digital assets without having any value of their own

**brand**  
unforgeable object identity for the digital asset's kind

**value**  
quantity of the asset

**fungible**   
natural represented as BigInts

**non-fungible**
strings or objects representing attributes of an asset

**AmountMath**

issuers must be able to deposit and withdraw assets from a purse

AmountMath functions check on arguments brands throwing an error if the wrong brand is used

## **ZOE**

agoric's smart contract framework

run code on-chain

mint new digital assets

creadibly trade assets

relies on ERTP

safer guaranteeing that you get as expected or a full refund even if a contract is buggy or malicious

zoe contracts are written in a secure subset of javascript

zoe automatically escrows user digital assets and handles payout
  
### **invitations**

a zoe invitation to a sepcific contract instance is needed to join and participate in it.

in ethereum, a developer must guard against malicious calls and store internal access control to check if the message sender is allowed to send such a message.

> zoe's object capability security model is safer and easier

```js
const invitationDetails = await E(zoe).getInvitationDetails(invitation);

const { installation, asset, price } = invitationDetails;
```

`E() `  
part of agoric platform

used to call methods on remote objects and receive a promise for the result.

code on agoric is put on separate environments called vats for security purposes.

zoe is a remote object in its own vat so E() must be used

invitations include information about contract's installation (source code).

people can use zoe to create and run instances of a contract. 

a contract stores logic, instructions, behavior, data

instances are specific parameters to run that logic

object identity comparison checks if the contract installation matches the properties of the source code

```js
const isCorrectCode = installation === atomicSwapInstallation;
```

inspect code directly

```js
const bundledCode = await E(installation).getBundle();
```

bundle contains a base64-encoded zip 
    
contracts add specific information (descriptions) to invitations.

the atomic swap contract adds the asset amount and price amount. 
  
### **making an offer**

an offer has three required parts

- zoe invitation
- proposal
- payment

**proposal**

states what you want, and what you will give in return

invariant known as offer safety

```js
const proposal = {
  want: { Asset: asset },
  give: { Price: price },
};
```

proposals use keywrods which are identifier properties that start with uppercase letter, contain no non-ASCII

```js
const currencyPayment = await E(purse).withdraw(price);
const payments = { Price: currencyPayment };
``` 

harden the proposal and payments object

freezing the object 

```js
harden(proposal);
harden(payments);
```
    
### **make the offer**

```js
const userSeat = await E(zoe).offer(invitation, proposal, payments);
```

making an offer as a user returns a UserSeat representing your position in the ongoing contract instance

       
    






    







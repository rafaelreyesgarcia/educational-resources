# introduction to libraries

dapps frequently use web3.js or ethers.js to interact with ethereum or EVM-compatibe blockchains the using JSON-RPC protocol

Alchemy SDK is a superset of Ethers.js to easily integrate alchemy's custom endpoints.

alchemy's features include
- NFT API
- enhanced websockets
- transact features
- token API

# advantages of ethers.js

ethers can do everything that web3.js does as well as

- being available under MIT license to allow developers to freely use the code and modify it.

(LGPL-3.0 web3 uses also allows this but forces to release source code containing modifications)

- smaller size (77kb compressed 284kb uncompressed)
- ENS compatible
- well tested and robust

a dapp uses a front end library that connects to an ethereum node through JSON-RPC.

# intro to ethers.js

there's 2 ways to instantiate a wallet
- private key
- mnemonic phrase
- (also from an encrypted JSON wallet)

invoke the wallet constructor passing a private key or a mnemonic using the `.fromMnemonic` method.

`Wallet`

class that manages a private/public key pair and provides methds for signing and sending transactions.

## 1. making wallets

### private key

256-bit value used to authenticate a user on the network.

creating an account on ethereum is done by generating a private key.

plug private key into a hash function to get a public key.

the public key is hashed and the last 20 characters are used as the address.

address is stored in ethereum account state along with balance and account nonce.

**collision** when distinct hash inputs produce identical outputs.

with a correct source of randomness, the odds for collision (someone else generates a private key for an address) are incredibly low.

private key is 64 character hexadecimal string

> an ethereum address is 160 bits.

> 2^160 represents total number of distinct addresses.

incredibly large number.

a private key gives access to a single address

### mnemonic

human readable string of words.

seedphrase.

represents a private key.

easier to write down.

the words are stored in a wordlist to avoid spelling mistakes.

in bitcoin improvement proposals BIP-039 and BIP-044 are related to mnemonics.

039 is about how words are chosen for mnemonic phrases.

044 is about the path standarization to allow a mnemonic phrase to handle many addresses across multiple chains.

a mnemonic phrase can give access to many addresses.

## 2. sign a transaction

signing a transaction authenticates the user on the network.

a transaction is signed using a private key.

`0xf86b80843b9aca0082520894dd0dc6fb59e100ee4fa9900c2088053bbe14de92880de0b6b3a7640000801ba0f503c1f50c6d97c0b34dd39b87c59d32934a1f0422ffe5d430730ea27a323e9ba02711bd4be63bfd78a74d5a5fd77aaa6d66a8b0415cb60326f21e2821232dd7a4`

raw encoded transaction.

- `0x` - prefix representing the message is hexidecimal
- `f86b` - RLP encoding indicating a list of 107 bytes is coming up next.
- `80` is nonce value encoded in RLP
- `84` - RLP encoding a string of length 4 is coming next
- `3b9aca00` - `gasPrice` sender is willing to pay 1,000,000,000 wei or 1 gwei
- `82` - RLP encoding that a string of length 2 is coming next
- `5208` - `gasLimit` of the tx (max amount of gas to be paid 21,000 wei)
- `94` - RLP encoding that a string of length 20 is coming next
- `dd0dc6fb59e100ee4fa9900c2088053bbe14de92` `to` address a string of 20 hexadecimal characters
- 88 - RLP encoding that a string of length 8 is coming next.
- `0de0b6b3a7640000` - amount in wei being sent over (1,000,000,000,000,000,000 in decimal)
- `80` - indicates that no data is being sent on this tx. a value transfer not a contract call. a contract call would use the field to invoke methods on the contract with parameters.
-`1b` - indicates if the public key is on the positive side of the y-axis or negative. referred as the `v` value of the signature. makes signature recovery easier. The secp256k1 elliptic curve is symmetrical over the y-axis. value can also indicate the chain.
- `a0` - RLP encoding that a string of 32 length is coming next
- `f503c1f50c6d97c0b34dd39b87c59d32934a1f0422ffe5d430730ea27a323e9b` - a coordinate of digital signature known as `r`
- `a0` - RLP encoding saying that a string of length 32 is coming up.
- `2711bd4be63bfd78a74d5a5fd77aaa6d66a8b0415cb60326f21e2821232dd7a4` - another coordinate of the digital signature known as `s`.

this is a transaction sending 1 ether (1,000,000,000,000,000,000 1 quintillion of Wei 10^18) to address `0xdd0dc6fb59e100ee4fa9900c2088053bbe14de92`.

we can recover the public key and address using the components of the digital signature (v, r, s).

an ethereum client understands raw encoded transactions.

`wallet.sign` in ethers.js creates a digital signature from the private key and appends the components (v, r, s) to the raw transaction.

### ethers parsing methods

default denomination is wei.

ethers provides with utilities for parsing different values

the `eq` method is available on the `BigNumber` object in the ethers library.

`parseUnits` returns a `BigNumber`

`parseEther` is a shortcut for `parseUnits(value, 'ether')`

`baseFeePerGas` is a new term of ethereum POS, but for backwards compatibility this property is still named `gasPrice` in front end libraries.

`baseFeePerGas` is max amount of gwei required per unit of gas used for the transaction to be included in next block.

dynamic value that moves up and down depending on demand.

21,000 gas units * `baseFeePerGas`

this is calculated by the network itself, should not be set by developer in almost all cases.

to create a dynamic fee, leave this field emtpy and set `maxPriorityFeePerGas` and `maxFeePerGas`

## 3. connect to ethereum

### provider

a provider is an object that acts as a connection to the ethereum blockchain.

once you connect to a provider, you can interac with its methods.

this is an abstraction, as the connection details are abstracted away.

a provider can get information about
- account
- blockchain

a provider connects to a JSON-RPC endpoint.

## 4. account nonce

nonce should be included in a transaction.

`provider.getTransactionCount` could find the current transaction count and add a `nonce` parameter to signed transaction.

or use `wallet.sendTransaction` can sign the transaction and use the provider to fill in missing properties.

connect wallet to provider

```js
const wallet = new Wallet(PRIVATE_KEY, provider);
```

now `sendTransaction` method can replace `wallet.signTransaction` and `provider.sendTransaction`

### double spend

`sendTransaction` adds a nonce if it wasn't provided

```js
if (transaction.nonce == null) {
    transaction = properties_1.shallowCopy(transaction); // so the method doesn't alter the original transaction object.
    transaction.nonce = this.getTransactionCount("pending"); // gets the nonce and counts transactions in the pool.
}

// sendTransaction calls populateTransaction

if (tx.to != null) {
    // will resolve ENS names like vitalik.eth
    tx.to = provider.resolveName(tx.to);
}
if (tx.gasPrice == null) {
    // for JSON-RPC providers, this calls eth_gasPrice
    tx.gasPrice = provider.getGasPrice();
}
if (tx.nonce == null) {
    // for JSON-RPC providers, this calls eth_gettransactioncount
    tx.nonce = provider.getTransactionCount(from);
}
if (tx.gasLimit == null) {
    // for JSON-RPC providers, this calls eth_estimategas
    var estimate = properties_1.shallowCopy(tx);
    estimate.from = from;
    tx.gasLimit = provider.estimateGas(estimate);
}
if (tx.chainId == null) {
    // if not provided during construction,
    // this will call net_version on JSON-RPC 
    tx.chainId = provider.getNetwork().then(function (network) { 
        return network.chainId; 
    });
}
```

`sendTransaction` calls `wallet.sign` after populating remaining properties before publishing tx on the network.

```js
return transaction_1.populateTransaction(transaction, this.provider, this.address)
    .then(function (tx) {
        return _this.sign(tx).then(function (signedTransaction) {
            return _this.provider.sendTransaction(signedTransaction);
        });
    });
```

its useful to have the `sign` method as sometimes is useful to sign a transaction to be sent later, when batching JSON-RPC calls or when signing a tx on an airgap device.


# where is the ether?



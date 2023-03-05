# making wallets

two methods to instantiate wallet

- private key
- mnemonic phrase

```js
const signaturePromise = wallet.signTransaction({
  value: utils.parseUnits('1', 'ether'),
  to: '0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92',
  gasLimit: 21000,
  gasPrice: utils.parseUnits('1', 'gwei')
})
```

handles the digital signature of a transaction

object passed has 4 properties
- value
- to
- gasLimit
- gasPrice

**value**

the value property is in wei value

convert wei to ether using `utils.parseUnits('1', 'ether')`

> wei denomination allows precise transactions and calculations on the network

calculates fees for computational resources in transactions.

gas is a measurement of the amount of computational work required to execute a transaction on the EVM

`parseUnits` returns a `BigNumber`

`BigNumber` object that safely allows mathematical operations on numbers of any magnitude.

**to**

a hexadecimal string 40 characters

`0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92`

**gasLimit**

amount of gas units in a transfer is 21,000 wei.

calculate cost of transaction

`21000 * (gwei_market_rate)`

if gas is set higher than this, leftover gas is refunded.

if execution of tx requires more gas than the `gasLimit` the transaction will stop and be reverted.

**gasPrice**

based on the congestion of the network.

minimum gwei price should be according to demand.

`gasPrice: utils.parseUnits('1', 'gwei')`

signing a transaction is a way to authenticate yourself to the network.

encoded transaction after signing a transaction with private key

`0xf86b80843b9aca0082520894dd0dc6fb59e100ee4fa9900c2088053bbe14de92880de0b6b3a7640000801ba0f503c1f50c6d97c0b34dd39b87c59d32934a1f0422ffe5d430730ea27a323e9ba02711bd4be63bfd78a74d5a5fd77aaa6d66a8b0415cb60326f21e2821232dd7a4`

`0x` - prefix representing the string is in hexadecimal

`f86b` - RLP encoding indicates a list of 107 bytes is coming up next

`80` nonce value (0) encoded in RLP

`84` RLP encoding a string of length 4 is coming up

`3b9aca00` gasPrice sender is willing to pay

`82` RLP encoding string of length 2 is coming

`5208` gasLimit of tx max is 21000

`94` RLP encoding a string of 20 length is coming

`dd0dc6…14de92` to address which is a string of 20 hex characters

`88` RLP encoding a string length 8 is coming

`0de0b6b3a7640000` amount of wei being sent over the transaction

`80` indicates no data is being sent, value transfer not a contract call

`1b` indicates public key is on the positive side of y axis or negative often referred to `v`.

value makes signature recovery possible since secp256k1 elliptic curve is symmetrical over y-axis

`a0` rlp encoding string length 30 coming

`f503c1f…a323e9b` coordinates of digital signature `r`

`a0` RLP string length 30 coming

`2711bd…32dd7a4` coordinates of digital signature `s`

`wallet.sign` in ethers.js creates a digital signature from private key and append `v` `r` and `s` to rwa transaction


# connect to ethereum

the way to connect to ethereum is abstracted in the `provider` object of most libraries.

# account nonce

`sentEther` function broadcasts a tx to network through a provider.

after successsfully sending a tx, the nonce has to be incremented each time.

the nonce protects from double spending a tx

2 ways to do this

`provider.getTransactionCount` to find current tx count and add a `nonce` parameter to a signed tx

`wallet.sendTransaction` can sign the tx and use the provider to fill missing properties.

the provider can be a second parameter when instantiating a wallet

`new Wallet(PRIVATE_KEY, provider)`

`wallet.sendTransaction` can replace both

- `wallet.signTransaction`
- `provider.sendTransaction`

provide tx parameters directly to `sendTransaction` that returns a promise

`sendTransaction` by default adds a nonce if none is provided

```js
if (transaction.nonce == null) {
  transaction = properties_1.shallowCopy(transaction);
  transaction.nonce = this.getTransactionCount("pending");
}
```

by using `pending` it will count any txs already in the tx pool

a shallow copy makes sure there's no changes made to the object by not modifying the reference shared.

`sendTransaction` calls `populateTransaction` that attempts to fill additional properties

```js
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

at the end, `wallet.sign` is called before publishing the tx to the newtork

```js
return transaction_1.populateTransaction(transaction, this.provider, this.address)
    .then(function (tx) {
        return _this.sign(tx).then(function (signedTransaction) {
            return _this.provider.sendTransaction(signedTransaction);
        });
    });
```

in some cases is useful to sign a tx to be sent later or if you want to batch JSON-RPC calls or signing a tx on an airgap device. These are the usecases for `wallet.signTransaction` 

# find balance

given a `privateKey` return a promise that resolves with the balance of the address associated with it



# avalanche JS

avalancheJS is a javascript library to interact with the avalanche platform

built using typescript and intended to support both browser and node.js

avalancheJS allows one to issue commands to the avalanche node APIs

functionalities of avalancheJS

- locally manage private keys
- retrieve balances on addresses
- issue signed transactions to X-chain, P-chain C-chain on the primary network
- create a subnetwork
- swap AVAX and assets between X, P and C chain

## when to use avalancheJS

APIs supported by avalancheJS allows to interact with a node on avalanche

avalancheJS is not used when wanting to interact with EVM on c-chain (issuing tx or writing functions to interact with deployed smart contracts)

using web3.js or ethers.js built specifically for EVM interaction is best practice

## requirements

- node version 14.18.0 or higher to compile
- both node and NPM
- git

## cloning the project

```sh
# clone project
git clone -b avax-quest-5 https://github.com/stackup-dev/advancing-into-avalanche.git

# enter directory
cd advancing-into-avalanche

# install dependencies
npm install

# run app
npm run start

# Please change the step variable to either 6, 10 or 11!
```

## creating the keypair

- `src` folder, open `index.ts`

avalancheJS comes with its own AVM keychain, used in functions of the API

the keychain enables functions to sign using keys it has registered.

```ts
const keychain: Keychain = xchain.keyChain();
```

the `keyChain` is accessed through `xchain` and referenced through `keychain`

the keychain can create new keypairs (a pair of private and public key)

```ts
const keypair: KeyPair = keychain.makeKey();
```

creates a new keypair (wallet) and references it with `keypair`

in the `KeyPair` object returned from the `keychain.makeKey` call we can extract useful information like `address` `private key` `public key`

```ts
const keypair: KeyPair = keychain.makeKey();
// address
console.log(keypair.getAddressString());
// public key
console.log(keypair.getPublicKeyString());
// private key
console.log(keypair.getPrivateKeyString());
```

creating another `KeyPair` instance through `keychain`, referencing it through `receiverKeyPair`

```ts
const receiverKeypair: KeyPair = keychain.makeKey();
```

change `step` variable value to `6` and save script. auto-save is good to turn off when learning step by step

if there's an openssl error

```js
{
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

change hash function in configuration??
`output.hashFunction: "xxhash64"`

export environmental variable
`export NODE_OPTIONS=--openssl-legacy-provider`

- copy the generated senders address, public and private key in line 25 to 27
- line 30 for receivers address

```ts
const senderKeys: KeyInfo = {
  address: "X-fuji1e07qzswkpsh947443uyd0r9x9a0ds33hl7g5wy",
  publicKey: "5xoqZ7sXy4TeY8jV6Qug5jUupdxFkXPWz6ZWXRTLuZViKJJvYE",
  privateKey: "private-key",
};
const assetID = "insert-assetID";

const friendsAddress = "X-fuji1xrr4mccsl0qhxaqn4ww48aeh9qlxgzs3fxtuu5";
```

## importing keypair to avalanche wallet

- add AVAX testnet tokens to sender wallet
- transactions will be executed on the x-chain so gas fees will be paid in AVAX

avalanche wallet allows to transfer avax tokens around the 3 built-in blockchains on avalanche's primary network

[avalanche wallet](https://wallet.avax.network/)

avalanche wallet provides an easy way to swap tokens from c-chain to x-chain.

the faucet to receive free testnet avax is on the c-chain, the script runs on the x-chain

- import generated sender's private key to avalanche wallet

[avalanche faucet](https://faucet.avax.network/)

## swap AVAX tokens from c-chain to x-chain

- cross-chain option on left sidebar
- source chain should be set to c-chain
- destination chain should be x-chain
- set the amount to transfer

## creating the asset

```ts
const xKeychain: KeyChain = xchain.keyChain();
xKeychain.importKey(senderKeys.privateKey);
const xAddresses: Buffer[] = xchain.keychain().getAddresses();
const xAddressStrings: string[] = xchain.keyChain().getAddressStrings();
```

- access the keychain
- imports private key
- extract address that will be used to pay gas

```ts
const outputs: SECPMintOutput[] = [];
const threshold: number = 1;
const locktime: BN = new BN(0);
const memo: Buffer = Buffer.from(
  "AVM utility method buildCreateAssetTx to create an ANT"
);
```

- prepares the mint output
- `outputs` array holds the result of minting process
- `threshold` number of signers required to sign tx
- `locktime` amount of seconds that the output can be spent after
- `memo` text to add to tx

```ts
const name: string = "rafael";
const symbol: string = "SU";
const denomination: number = 3;
```

```ts
const avmUTXOResponse: GetUTXOsResponse = await xchain.getUTXOs(
  xAddressStrings
);

const utxoSet: UTXOSet = avmUTXOResponse.utxos;
```

- x-chain stores available balances in a datastored called `unspent transaction putputs` **(UTXO)**
- UTXO is a unique list of outputs produced by transactions, addresses that spend the output, lockout times and tresholds also influence the list

```ts
const amount: BN = new BN(1000);
const vcapSecpOutput = new SECPTransferOutput(
  amount,
  xAddress,
  locktime,
  treshold
);

const initialStates: InitialStates = new InitialStates();

initialStates.addOutput(vcapSecpOutput);
```

- creates initial state of the asset.
- initial ammount of asset tokens to be 1000

```ts
const secpMintOutput: SECPMintOutput = new SECPMintOutput(
  xAddresses,
  locktime,
  treshold
);
outputs.push(secpMintOutput);
```

- change `step` variable to `10` save and the `createAsset()` script will execute
- copy generated asset ID to paste in line 29

## transferring assets to another wallet

- get the UTXO
- import sender keypair into the keychain
- query testnet X-chain to get its UTXO

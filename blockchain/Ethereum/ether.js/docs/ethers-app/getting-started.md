# overview

`npm install ethers`

import examples

```js
// Import everything
import { ethers } from "ethers";

// Import just a few select items
import { BrowserProvider, parseUnits } from "ethers";

// Import from a specific export
import { HDNodeWallet } from "ethers/wallet";
```

**Provider**

- read-only connection to the blockchain.
- allows querying blockchain state (account, block and tx details, event logs, etc)

ethers abstract write operations into the `Signer` object

```js
provider = ethers.getDefaultProvider()

provider = new ethers.BrowserProvider(window.ethereum)

provider = new ethers.JsonRpcProvider(url)

signer = await provider.getSigner()

// Look up the current block number (i.e. height)
await provider.getBlockNumber()
// 16540202

// Get the current balance of an account (by address or ENS name)
balance = await provider.getBalance("ethers.eth")
// 182334002436162568n

// Get the next nonce required to send a transaction
await provider.getTransactionCount("ethers.eth")
// 3
```

**Signer**

- wraps all operations that interact with an account
- an account has a private key to sign digital signatures to sign multiple types of payloads

private key can be in memory using `Wallet` or via an IPC layer (metamask)

**transaction**

- a tx allows state changes in the EVM
- a tx requires a fee associated with the cost of executing tx
- if tx reverts, fee must still be paid for resources consumed
- sending ether, deploying a `Contract`, or executing a contract function

**Contract**

- program deployed on the blockchain
- a contract can be read when its connected to a `Provider`
- state-changing operations can be called when connected to `Signer`.

**Receipt**

once tx received, is placed in memory pool

a receipt contains all information related to the transaction.

injected providers inject objects into the `window` object of browsers to allow
- read only access `Provider`
- write access `Signer`

if `window.ethereum  == null` then ethers can default to `ethers.getDefaultProvider` backed by third-party services (infura, alchemy, etc)

default provider only allows read access

instantiate a `BrowserProvider` connects to metamask EIP-1193 object, standard protocol that allows access to read-only requests through the injected provider. `ethers.BrowserProvider(window.ethereum)`

`provider.getSigner()` allows to broadcast transactions

`JsonRpcProvider` communicates with custom ethereum nodes or developer blockchaines (hardhat, ganache) using the `link-jsonrpc` protocol.

`ethers.JsonRpcProvider(url)` if no url passed, default is `http://localhost:8545` which most nodes use

units in ethereum often are integers as decimals and floating-points can lead to imprecisions and non-obvious results in mathematical operations.

1 ether = 10 ** 18
1 gwei = 10 ** 9


to write on the blockchain you need a private key to sign transactions. Private keys are not accessed directly, instead, a `Signer` instance abstracts a request dispatch to a service (metamask or another injected provider)
```js
tx = await signer.sendTransaction({
  to: "ethers.eth",
  value: parseEther("1.0")
});

// wait until the transaction is mined
receipt = await tx.wait();
```

**Contracts**

meta class (definition its derived at run-time), based on the ABI, methods and properties become available

any event, method or error a `Fragment` should be included to describe how to encode a request and decode the result.

```js
abi = [
  "function decimals() returns (string)",
  "function symbol() returns (string)",
  "function balanceOf(address addr) returns (uint)"
  "function transfer(address to, uint amount)"
]

// Create a contract
contract = new Contract("dai.tokens.ethers.eth", abi, provider)

// The symbol name for the token
sym = await contract.symbol()
// 'DAI'

// Read the token balance for an account
balance = await contract.balanceOf("ethers.eth")
// 189668770000000000000000n

// Connected to a Signer; can make state changing transactions,
// which will cost the account ether
contract = new Contract("dai.tokens.ethers.eth", abi, signer)

// Send 1 DAI
amount = parseUnits("1.0", 18);

// Send the transaction
tx = await contract.transfer("ethers.eth", amount)

// Currently the transaction has been sent to the mempool,
// but has not yet been included. So, we...

// ...wait for the transaction to be included.
await tx.wait()

// FORCING A CALL
abi = [
  "function transfer(address to, uint amount) returns (bool)"
]

// Create a contract; connected to a Provider, so it may
// only access read-only methods (like view and pure)
contract = new Contract("dai.tokens.ethers.eth", abi, provider)

amount = parseUnits("1.0", 18)

// There are many limitations to using a static call, but can
// often be useful to preflight a transaction.
await contract.transfer.staticCall("ethers.eth", amount)
// true

// We can also simulate the transaction as another account
other = new VoidSigner("0x643aA0A61eADCC9Cc202D1915D942d35D005400C")
contractAsOther = contract.connect(other.connect(provider))
await contractAsOther.transfer.staticCall("ethers.eth", amount)
// true

// EVENTS

abi = [
  "event Transfer(address indexed from, address indexed to, uint amount)"
]

// Create a contract; connected to a Provider, so it may
// only access read-only methods (like view and pure)
contract = new Contract("dai.tokens.ethers.eth", abi, provider)

// Begin listening for any Transfer event
contract.on("Transfer", (from, to, _amount, event) => {
  const amount = formatEther(_amount, 18)
  console.log(`${ from } => ${ to }: ${ amount }`);

  // The `event.log` has the entire EventLog

  // Optionally, convenience method to stop listening
  event.removeListener();
});

// Same as above
contract.on(contract.filters.Transfer, (from, to, amount, event) => {
  // See above
})

// Listen for any Transfer to "ethers.eth"
filter = contract.filters.Transfer("ethers.eth")
contract.on(filter, (from, to, amount, event) => {
  // `to` will always be equal to the address of "ethers.eth"
});

// Listen for any event, whether it is present in the ABI
// or not. Since unknown events can be picked up, the
// parameters are not destructed.
contract.on("*", (event) => {
  // The `event.log` has the entire EventLog
});
```





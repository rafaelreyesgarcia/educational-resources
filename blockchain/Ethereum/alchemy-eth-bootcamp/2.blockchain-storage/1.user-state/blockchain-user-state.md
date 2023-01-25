# keeping track of blockchain user state

## UTXO & account models

requirements for a transaction
- sender
- amount
- receiver
- authorization from sender to transfer funds

a signature is a hash authorizing the transaction.

this signature hashes the private key so it's not revealed but used to confirm the validity of a transaction

> the purpose of a transaction is to change some state on data on the blockchain

bitcoin, ethereum and regular banks rely on transaction-based models to keep track of user balances.

### account-based model

account based model
- each account has a balance
- similar to bank accounts
- keep track of each account state
- tx_amount < acct_balance

a replay attack is when a malicious attacker replays a transaction to execute it again

ethereum uses the nonce to protect the user from replay attacks

```
Acct #12345 -> Name: Rick Sanchez -> Balance: $142.62
```
the state of the account is kept at a high-level. There's no breakdown of the dollars and cents (what kind of bills are there in the account).

### unspent transaction outputs

- all coins are not the same
- refer to specific coins when spending
- a coin is an abstraction, it defines a specific output
- coins are consumed, create new ones
- a coin can only be spent once
- each UTXO has a script associated with it
- user's UTXOs are scattered across blocks

input
- previous transaction id
- index
- scriptSig

output
- value
- script pubKey

consensus rules
- sum of inputs <= sum of outputs
- one exception (coinbase tx)

bitcoin transaction UTXO system
- B receives one UTXO worth 6.25 BTC
- B receives one UTXO worth 6.25 BTC
- B has 2 UTXOs worth in total 12.50 BTC
- B wants to pay C 10 BTC
- B spends both UTXOs and creates 3 UTXOs out of this (10 BTC for c, 2 BTC back to him and 0.5 BTC of mining fees)
- B now has one UTXO worth 2 BTC
- C has one UTXO worth 10 BTC
- the miner has one UTXO worth 0.5 BTC

traditional servers keep track of user data in one centralized server.

in a decentralized system keeping track of state data requires models like the UTXO model or the account model.

**UTXO** stands for unspent transaction output

all UTXOs are non-fungible

to spend a UTXO you must refer to that specific UTXO

scripts are hard-programmed code that each UTXO stores.

contains conditions under which to unlock the UTXO for further spending.

example of multiple outputs
- B has 12.5 BTC in one UTXO 
- B wants to send A 6 BTC
- to send 6 BTC bob will breakdown his UTXO in multiple outputs. 
- 6BTC UTXO for A, 6.5 BTC UTXO for B (remainder)
- the first UTXO of 12.5 BTC is spent

example of multiple inputs
- A wants to buy an item for 3BTC
- A has 3 UTXOs of 1, 1.5 and 0.8 BTC (3.3BTC in total)
- A uses the 3 UTXOs to buy an item for 3BTC creating an UTXO for that amount and creating a new UTXO with the remaining 0.3BTC.


## 1. transaction output

create an object for transaction outputs (TXOs)

**goal**
- `constructor` should store the values passed into it on properties of the same name. Should create property `spent` default to false.
- `spend` function should set `spent` to true

```js
class TXO {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
    this.spent = false;
  }
  spend() {
    this.spent = true;
  }
}

const txo = new TXO("1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM", 10);

console.log( txo.owner ); // 1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM
console.log( txo.amount ); // 10
console.log( txo.spent ); // false

txo.spend();

console.log( txo.spent ); // true
```

## 2. spent TXOs

transactions on bitcoin can have many inputs and many outputs

a scripting system on each transaction allows bitcoin users to engage in complex financial agreements

for an average script, the new UTXO can only be spent by the associated address.

**goal**

- in the `Transaction` constructor arguments passed are arrays containing instances of transaction outputs.
- store `inputUTXOs` and `outputUTXOs` on the transaction object
- `execute` function should ensure that nonce of `inputUTXOs` are spent to prevent double-spending.
- `execute` will throw an error if any input TXO is already spent

```js
class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }
  execute() {
    const anySpent = this.inputUTXOs.some((x) => x.spent);
    if (anySpent) {
      throw new Error("Cannot include a spent UTXO");
    }
  }
}
```


## 3. sufficient amount

**inputs outputs**

multiple inputs and outputs allow transactions of UTXOs to be complex in a UTXO model.

some bitcoin software sometimes includes many input UTXOs just to aggregate them into one UTXO and send it back.

**goal**

the goal is to ensure there's enough value in the input UTXO to cover total amount in the output UTXO.

- `inputUTXOs` have enough value to cover value of `outputUTXOs`
- if total value of input is less than output value, throw error in `execute`

```js
class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
      this.inputUTXOs = inputUTXOs;
      this.outputUTXOs = outputUTXOs;
  }
  execute() {
    this.inputUTXOs.forEach((TXO) => {
      if (TXO.spent) {
        throw new Error('already spent!');
      }
    });

    const inputAmount = this.inputUTXOs.reduce((accumulatedTXOs, TXO) => {
      return accumulatedTXOs + TXO.amount;
    }, 0);

    const outputAmount = this.outputUTXOs.reduce((accumulatedTXOs, TXO) => {
      return accumulatedTXOs + TXO.amount;
    }, 0);

    if (inputAmount < outputAmount) {
      throw new Error('not enough input to cover output!');
    }
    return 'transaction success!';
  }
}
```

## 4. successful execute

when a transaction is succcessful and mined, the output UTXOs become new TXOs that are spendable.

input UTXOs need to be marked as spent to ensure no double-spending

```js
execute() {
    this.inputUTXOs.forEach((TXO) => {
      if (TXO.spent) {
        throw new Error('already spent!');
      }
    });

    const inputAmount = this.inputUTXOs.reduce((accumulatedTXOs, TXO) => {
      return accumulatedTXOs + TXO.amount;
    }, 0);

    const outputAmount = this.outputUTXOs.reduce((accumulatedTXOs, TXO) => {
      return accumulatedTXOs + TXO.amount;
    }, 0);

    if (inputAmount < outputAmount) {
      throw new Error('not enough input to cover output!');
    }
    // 4. successful execute
    this.inputUTXOs.forEach((UTXO) => {
      UTXO.spend();
    });
    
    return 'transaction success!';
  }
```

## 5. miner's fee

transaction fee is the remainder of an unspent transaction output.

**goal**
- calculate the fee as the sum of all inputs minus sum of all outputs
- store fee amount in a property called `fee` on the transaction itself

```js
const iTXO = new TXO(fromAddress, 5);
const oTXO = new TXO(toAddress, 3);

const tx = new Transaction([iTXO], [oTXO]);

tx.execute();

console.log( tx.fee ); // 2
```

## further reading on UTXOs

[bitcoin genesis block](https://www.blockchain.com/btc/block/0)

there was a coinbase transaction sent to `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` that was never spent

`scriptPubKey` is called the witness script or locking script.

for each locking script there is an unlocking script that allows it to be spent.

the unlocking script needs to provide a signature that verifies the ownership of a public key then the public key needs to match the address after being hashed twice.

the bitcoin script language is a simple stack-based language that has no loop so will always resolve and there is no denial of service attacks.

language is a list of function-like operation codes

take arguments off the stack and operate on them.

[background bitcoin script](https://bitcoin.stackexchange.com/a/29763)

[more background](https://bitcoinsv.io/2019/07/27/the-return-of-op_return-roadmap-to-genesis-part-4/)

[javascript implementation of Script](https://github.com/crm416/script)

[pay to pubKey hash](https://en.bitcoinwiki.org/wiki/Pay-to-Pubkey_Hash)

[pay to script hash](https://en.bitcoin.it/wiki/Pay_to_script_hash)






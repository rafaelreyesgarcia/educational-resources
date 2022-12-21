// UTXO MODEL
// 1. transaction output
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

// 2. spent TXOs

class TransactionSpentTXOs {
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

// 3. sufficient amount

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
    // 4. successful execute
    this.inputUTXOs.forEach((UTXO) => {
      UTXO.spend();
    });

    // 5. miner's fee
    this.fee = inputAmount - outputAmount;

    return 'transaction success!';
  }
}

const fromAddress = '1DBS97W3jWw6FnAqdduK1NW6kFo3Aid1N6';
const toAddress = '12ruWjb4naCME5QhjrQSJuS5disgME22fe';

// sufficient UTXOs

const txo1 = new TXO(fromAddress, 5);
const txo2 = new TXO(fromAddress, 5);
const outputTXO1 = new TXO(toAddress, 10);
const txSuccess = new Transaction([txo1, txo2], [outputTXO1]);

console.log(txSuccess.execute());

// insufficient UTXOs

const outputTXO2 = new TXO(toAddress, 11);
const txFail = new Transaction([txo1, txo2], [outputTXO2]);

// console.log(txFail.execute());

// 5. miner's fee
const iTXO = new TXO(fromAddress, 5);
const oTXO = new TXO(toAddress, 3);

const tx = new Transaction([iTXO], [oTXO]);

tx.execute();

console.log( tx.fee ); // 2
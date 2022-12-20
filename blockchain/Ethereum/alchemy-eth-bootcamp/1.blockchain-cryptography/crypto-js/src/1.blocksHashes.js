const SHA256 = require('crypto-js/sha256');

/*
class Block {
  toHash(string) {
    const hash = SHA256(string);
    return hash.toString();// a hash!
  }
}

const block = new Block;

console.log(block.toHash('rafael'));
*/

class Block {
  constructor(data) {
    this.data = data;
      
  }
  toHash() {
    return SHA256(this.data + this.previousHash);
  }
}

const block = new Block('rafael');

console.log(block.toHash());

module.exports = Block;

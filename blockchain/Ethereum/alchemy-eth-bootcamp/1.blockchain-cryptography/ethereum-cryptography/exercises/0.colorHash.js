const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

const redBytes = utf8ToBytes(COLORS[0]);

console.log(redBytes);

const redHash = sha256(redBytes);

console.log(redHash);

const redHex = toHex(redHash);

console.log(redHex);

// given a hash, return the color that created the hash
function findColor(hash) {
  return COLORS.find(elem => toHex(sha256(utf8ToBytes(elem))) === toHex(hash));
}

console.log(findColor(redHash));
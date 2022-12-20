const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const firstByte = publicKey.slice(0, 1);
    const restOfPubKey = publicKey.slice(1);
    const keccakHash = keccak256(restOfPubKey);
    const last20 = keccakHash.slice(keccakHash.length - 20);

    return last20;
}
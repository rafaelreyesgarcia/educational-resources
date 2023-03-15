const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp.utils.randomPrivateKey();
// private key returns as a byte array

console.log(`private key:`, toHex(privateKey));
// toHex displays the private key byte array as hexadecimal

const publicKey = secp.getPublicKey(privateKey);
// public key returns as a byte array

console.log(`public key: `, toHex(publicKey));

// the address is the last 20 bytes of the keccak hash of the public key
// keccak256(publicKey.slice(1)).slice(-20)
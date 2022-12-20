const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./2.hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    const signature = await secp.sign(hashMessage(msg), PRIVATE_KEY, {recovered: true});
    return signature;
}

const signed = signMessage('rafael reyes garcia');

console.log(signed);

module.exports = signMessage;


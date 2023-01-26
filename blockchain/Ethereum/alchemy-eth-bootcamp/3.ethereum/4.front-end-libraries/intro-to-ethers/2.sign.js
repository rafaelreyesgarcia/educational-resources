const ethers = require('ethers');
const { Wallet, utils } = ethers;
const { wallet1 } = require('./1.wallets');

// TODO: replace all undefined values
const signaturePromise = wallet1.signTransaction({
    value: utils.parseEther('1'),
    to: "0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92",
    // type 0 instructions
    gasLimit: 0x5208, // hexadecimal for 21,000
});

module.exports = signaturePromise;
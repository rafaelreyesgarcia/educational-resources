const { utils } = require('ethers');

const oneEther = utils.parseUnits('1', 'ether');
const oneBillionGwei = utils.parseUnits('1000000000', 'gwei');

console.log(oneEther.eq(oneBillionGwei)); // true

const oneGwei = utils.parseUnits('1', 'gwei');
const oneBillionWei = utils.parseUnits('1000000000', 'wei');

console.log(oneGwei.eq(oneBillionWei)); // true

// two ways to do the same thing!
const oneEtherA = utils.parseUnits('1', 'ether');
const oneEtherB = utils.parseEther('1');

// show the output with some commas :)
console.log(utils.commify( oneEtherA )); // 1,000,000,000,000,000,000
console.log(utils.commify( oneEtherB )); // 1,000,000,000,000,000,000
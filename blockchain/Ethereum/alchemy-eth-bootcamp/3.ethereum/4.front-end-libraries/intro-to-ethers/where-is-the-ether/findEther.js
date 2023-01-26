const { providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

/**
 * Given an ethereum address find all the addresses
 * that were sent ether from that address
 * @param {string} address - The hexidecimal address for the sender
 * @async
 * @returns {Array} all the addresses that receieved ether
 */
async function findEther(address) {
  const addresses = [];
  const blockNumber = await provider.getBlockNumber(); // gets the block number
  for (let i = 0; i <= blockNumber; i++) {
    const block = await provider.getBlockWithTransactions(i); // get block with transactions of every block before current block
    block.transactions.forEach((tx) => { // for each transaction contained in the transactions list, the 'to' parameter is pushed to addresses array if the 'from' parameter matches the address passed to the findEther function.
      if(tx.from === address) {
        addresses.push(tx.to);
      }
    })
  }
}

module.exports = findEther;
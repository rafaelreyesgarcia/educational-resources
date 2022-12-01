const { ethers } = require('ethers');

const readChainData = async () => {
  // creates a provider instance
  const provider = new ethers.providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
  );

  // get current block number
  const blockNumber = await provider.getBlockNumber();

  console.log('block number: ', blockNumber);

  // get ether balance for a specific wallet
  const balance = await provider.getBalance('0x0b0605d0D05552C02c9CE6C442e14d781DD65a84');

  const formattedBalance = ethers.utils.formatEther(balance);

  console.log('balance:', formattedBalance, "ether");
}

readChainData();


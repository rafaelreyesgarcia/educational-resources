require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
const Stardust = require('../artifacts/contracts/Stardust.sol/Stardust.json');

// JsonRpcProvider is a class that implements the JSON-RPC protocol connects to a node
const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_ENDPOINT);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// set up contract interface
const contractAddress = '0x0Bf93AA727343cc0b45B1aCAD84f28F8FB5F2D3A'
const stardust = new ethers.Contract(contractAddress, Stardust.abi, signer);

// airdrop recipients
const recipients = ['0x77253780439a755B5D72ECDe0937c7826758Ef91', '0x54C503132500948A5CC853AaCbfBf4B3eA17e23F'];
const amount = ethers.utils.parseUnits('1000', 18);

async function sendAirdrop() {
  for (let i = 0; i < recipients.length; i++) {
    const recipient = recipients[i];
    const tx = await stardust.transfer(recipient, amount);
    console.log(`sent ${ethers.utils.formatUnits(amount)} tokens to ${recipient}`);
    console.log(`transaction hash: ${tx.hash}`);
  }
}

sendAirdrop()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


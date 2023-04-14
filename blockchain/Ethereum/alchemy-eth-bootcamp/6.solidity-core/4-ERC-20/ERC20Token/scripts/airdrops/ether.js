require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

// JsonRpcProvider is a class that implements the JSON-RPC protocol connects to a node
const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_ENDPOINT);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// airdrop recipients
const recipients = [
  {address: '0x77253780439a755B5D72ECDe0937c7826758Ef91', amount: ethers.utils.parseEther('0.20')},
  {address: '0x54C503132500948A5CC853AaCbfBf4B3eA17e23F', amount: ethers.utils.parseEther('0.10')},
];

async function sendEther() {
  for (let i = 0; i < recipients.length; i++) {
    const {address, amount} = recipients[i];
    const tx = {
      to: address,
      value: amount,
    };
    const { hash } = await signer.sendTransaction(tx);
    console.log(`sent ${ethers.utils.formatEther(amount)} ether to ${address}`);
    console.log(`transaction hash ${hash}`);
  }
}

sendEther()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


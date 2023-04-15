require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
const Stardust = require('../artifacts/contracts/Stardust.sol/Stardust.json');
const bucketAbi = require('./bucketAbi.json');

// JsonRpcProvider is a class that implements the JSON-RPC protocol connects to a node
const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_ENDPOINT);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// set up stardust interface
const stardustAddress = '0x81A4910e250b1DC815C48187BE30268Ee7E3234f'
const stardust = new ethers.Contract(stardustAddress, Stardust.abi, signer);

// setup bucket interface
const bucketAddress = '0x873289a1aD6Cf024B927bd13bd183B264d274c68';
const bucket = new ethers.Contract(bucketAddress, bucketAbi, signer);

async function sendTokens() {
  // send stardust token to the bucket contract
  const amount = ethers.utils.parseEther('420');
  const approveTx = await stardust.approve(bucketAddress, amount);
  console.log(`approve transaction hash: ${approveTx.hash}`);

  const tx2 = await bucket.drop(stardustAddress, amount);
  await tx2.wait();
  console.log(`${ethers.utils.formatUnits(amount)} tokens sent to bucket contract`);
}

sendTokens()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


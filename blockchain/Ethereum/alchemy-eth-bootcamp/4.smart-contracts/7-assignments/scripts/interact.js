const hre = require("hardhat");
require('dotenv').config();

async function main() {
  const CONTRACT_ADDR = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502';
  const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"Winner","type":"event"},{"inputs":[],"name":"attempt","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_KEY);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contract = new ethers.Contract(CONTRACT_ADDR, abi, wallet);

  console.log(await contract.attempt());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

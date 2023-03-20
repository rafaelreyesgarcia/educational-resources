const hre = require("hardhat");
require('dotenv').config();

async function main() {
  const PROXY_ADDR = '0x0E7BEC945C401C41CB24F0dc8ae02AcdCD68eC80';
  const CONTRACT_ADDR = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502';
  const proxy = await hre.ethers.getContractAt("Proxy", PROXY_ADDR);
  console.log('executing transaction...');
  console.log(await proxy.proxyAttempt(CONTRACT_ADDR));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

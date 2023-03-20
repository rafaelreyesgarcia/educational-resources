const hre = require("hardhat");

const CONTRACT_ADDR = '0x8dA623D51e86a817DC3cF9e2214E798F4Dcc07CA';

async function main() {
  const test = await hre.ethers.getContractAt('Test', CONTRACT_ADDR);

  console.log(await test.x());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const hre = require("hardhat");

// npx hardhat run scripts/deploy.js --network goerli

async function main() {
  const Counter = await hre.ethers.getContractFactory('Counter');
  const counter = await Counter.deploy();

  await counter.deployed();

  console.log(
    `Counter deployed to: ${counter.address}`
  ); // 0xcCEbc3D8Fa9C1bf08F46C927428Df29a713a7F44
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

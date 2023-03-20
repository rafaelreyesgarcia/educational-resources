// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

// proxy contract - 0x0E7BEC945C401C41CB24F0dc8ae02AcdCD68eC80

async function main() {
  const Proxy = await hre.ethers.getContractFactory('Proxy');
  const proxy = await Proxy.deploy();

  await proxy.deployed();

  console.log(
    `Proxy contract was deployed to ${proxy.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

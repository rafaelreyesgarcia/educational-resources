const { ethers, upgrades } = require('hardhat');

const proxyAddress = '0xaC8146EeBa5D399234218898D6552BF0dE420c73';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);

  console.log('current contract owner is: ' + upgraded.owner());
  console.log('implementation contract address: ' + implementationAddress);
}

main();
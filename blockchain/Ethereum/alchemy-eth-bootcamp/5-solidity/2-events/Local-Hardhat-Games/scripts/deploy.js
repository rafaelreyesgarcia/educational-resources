// replace the name of the contract with which one you want to deploy!
const contractName = "Game5";
// game1Addr = 0x5FbDB2315678afecb367f032d93F642f64180aa3
// game2Addr = 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
// game3Addr = 0x0B306BF915C4d645ff596e518fAf3F9669b97016
// game5Addr = 0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE

async function main() {
  const Game = await hre.ethers.getContractFactory(contractName);
  // if you need to add constructor arguments for the particular game, add them here:
  const game = await Game.deploy();
  console.log(`${contractName} deployed to address: ${game.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
});
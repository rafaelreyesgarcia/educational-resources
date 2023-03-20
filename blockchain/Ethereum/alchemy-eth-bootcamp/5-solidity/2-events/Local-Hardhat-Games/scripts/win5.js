// add the game address here and update the contract name if necessary
const gameAddr = "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);
  // do whatever you need to do to win the game here:
  await game.giveMeAllowance(12000);
  await game.mint(10000);

  const tx = await game.win();
  console.log('tx ->', tx);
  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log('receipt ->', receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});

// add the game address here and update the contract name if necessary
const gameAddr = "0x0B306BF915C4d645ff596e518fAf3F9669b97016";
const contractName = "Game3";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);
  // do whatever you need to do to win the game here:
  const tx = await game.win(45);
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

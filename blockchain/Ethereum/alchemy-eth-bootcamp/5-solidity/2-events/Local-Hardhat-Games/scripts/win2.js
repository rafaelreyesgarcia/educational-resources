// add the game address here and update the contract name if necessary
const gameAddr = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const contractName = "Game2";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);
    // console.log('game contract ->', game);
    // do whatever you need to do to win the game here:
    await game.setX(25);
    await game.setY(25);

    const tx3 = await game.win();
    console.log('tx ->', tx3);
    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const winReceipt = await tx3.wait();
    console.log('receipt ->', winReceipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

async function main() {
  // array destructure to extract first element representing default account used to deploy
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();

  // formats the wei amount in the deployer balance to ether
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  // a contract factory is an object that can create new instances of a smart contract
  // contains info about ABI and bytecode
  const Token = await ethers.getContractFactory("Stardust");
  // creates a new instance by calling deploy on the factory object
  // deploy returns a promise that resolves to a contract object representing the new instance
  const token = await Token.deploy();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
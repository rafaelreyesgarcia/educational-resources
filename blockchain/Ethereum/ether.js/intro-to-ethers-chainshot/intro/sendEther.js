const { providers, Wallet, utils } = require("ethers");

// ganache RPC server URL
const url = "http://localhost:7545";

// connect to local ganache blockchain
const provider = new providers.JsonRpcProvider(url);

async function main() {
  // sender's private key
  const privateKey =
    "b1c741f52b912a5d6ec35ba48d9450b098d0d52a23f2cc988c91eba220902981";

  const wallet = new Wallet(privateKey, provider);

  // getting accounts + balances
  const signer1 = provider.getSigner(1); // account to send eth to
  const addr1 = await signer1.getAddress();
  const walletBalance = await wallet.getBalance();

  console.log(
    "balance of sender address before tx: " + utils.formatEther(walletBalance)
  );

  console.log(`sending ether from ${wallet.address} to ${addr1}`);

  const tx = await wallet.sendTransaction({
    to: addr1,
    value: utils.parseEther("22.0"),
  });

  // wait for tx to be mined so subsequent queries are accurate
  const receipt = await tx.wait();
  const balanceAfter = await wallet.getBalance();
  console.log(
    `balance of sender address after tx: ${utils.formatEther(balanceAfter)}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

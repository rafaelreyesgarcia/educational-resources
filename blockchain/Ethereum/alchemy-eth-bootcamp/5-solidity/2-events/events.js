const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new Contract(erc20TokenAddress, ERC20_ABI, provider);

contract.on("transfer", async (from, to, amount, data) => {
  console.log('transfer event emitted.');
});


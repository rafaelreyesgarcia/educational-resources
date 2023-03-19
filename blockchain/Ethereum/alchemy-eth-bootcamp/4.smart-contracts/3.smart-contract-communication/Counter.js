require('dotenv').config() // makes environment variables available in the script
const ethers = require('ethers')

const contractABI = [
  {
    inputs: [],
    name: 'count',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dec',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inc',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// new ethers.AlchemyProvider( [network = 'homestead', [apiKey]])
const provider = new ethers.AlchemyProvider(
  'goerli',
  process.env.ALCHEMY_KEY
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

async function main() {
  // new ethers.Contract( address, abi, signerOrProvider )
  const counterContract = new ethers.Contract(
    '0x5F91eCd82b662D645b15Fd7D2e20E5e5701CCB7A',
    contractABI,
    wallet
    // provider // would only expose read/view functions
  );

  const currentCounterValue = await counterContract.get();
  const parsedBigNumber = parseInt(currentCounterValue)
  console.log(currentCounterValue);
  console.log(parsedBigNumber);

  const tx = await counterContract.dec();
  console.log('transaction =>', tx)
}

main()


require('dotenv').config();
const { Alchemy, Network } = require('alchemy-sdk');
const { firstTopic, secondTopic} = require('./topics');

// prefix topics with 0x
// first topic is the hash of the event signature, topic used to filter logs that match event signature
// second topic is hash of address, topic used for logs that belong to a specific address
// map prefixes each topic with 0x to make it a valid hex string
// stores resulting array in topics variable
// used as a parameter in the getLogs function
const topics = [firstTopic(), secondTopic()].map((x) => '0x' + x);

const config = {
  apiKey: Process.env.ALCHEMY_ENDPOINT,
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(config);

// fromBlock toBlock specify a range to search
// topics is an array of two topics
async function totalDaiTransferred(fromBlock, toBlock) {
  const logs = await alchemy.core.getLogs({
    address: '0x6b175474e89094c44da98b954eedeac495271d0f', // dai address
    fromBlock,
    toBlock,
    topics
  });

  // console.log(logs[0]);
  // logs returned from the call, match the criteria, returned as an array of objects with address, blockNumber and data fields
  // extracts dataField and converts it into a bigInt, sums them up using reduce.
  // accumulator p initialized to 0, current value will be the element in the current iteration
  return logs
    .map((x) => BigInt(x.data))
    .reduce((p, c) => p + c);
}
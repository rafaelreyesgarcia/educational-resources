const axios = require('axios');
require('dotenv').config()

const url = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API}`;

async function getBlockNumber() {
  const response = await axios.post(url, {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_blockNumber',
  })

  // console.log(response.data);
  // { jsonrpc: '2.0', id: 1, result: '0x100d3b2' }
  console.log('latest block:', response.data.result); // blockNumber 0x100d3b2
}

async function getBalance(address) {
  const response = await axios.post(url, {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getBalance',
    params: [address, 'latest'],
  })

  console.log('balance:', response.data.result);
}

async function getNonce(address) {
  const response = await axios.post(url, {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getTransactionCount',
    params: [address, 'latest' ],
  });
  console.log('nonce:', response.data.result)
}

async function getTotalTransactions(blockNumber) {
  const response = await axios.post(url, {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getBlockByNumber',
    params: [blockNumber, false],
  });
  console.log('total transactions:', response.data.result.transactions.length)
}

async function getTotalBalance(addresses) {
  const batch = addresses.map((addr, i) => ({
    jsonrpc: '2.0',
    id: i,
    method: 'eth_getBalance',
    params: [addr],
  }));

  const response = await axios.post(url, batch);

  console.log(response.data);
  console.log('total balance:', response.data.reduce((p, c) => p + parseInt(c.result), 0));
}

async function main() {
  try {
    await getBlockNumber()
    await getBalance('0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326')
    await getNonce('0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326')
    await getTotalTransactions('0x100d3f1')
    await getTotalBalance([
      '0x5F927395213ee6b95dE97bDdCb1b2B1C0F16844F',
      '0x992A3Fb6424e94373f28B64B0B3C30dbEb4C26Df',
      '0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990',
      '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326'
    ])
  } catch (err) {
    console.error(err)
  }
}

main()
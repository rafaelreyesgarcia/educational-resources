const axios = require('axios');

const ALCHEMY_URL = 'https://eth-goerli.g.alchemy.com/v2/rCMgwjmstdrxQiDKWf-5icMf3Pm2G22N';

/*
axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    "0xb443",
    false
  ],
}).then((response) => {
  console.log(response.data.result);
})
*/

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 71,
  method: "eth_hashrate",
  params: [],
}).then((response) => {
  console.log(response.data.result);
})
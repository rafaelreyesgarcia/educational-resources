const provider = require('./provider');

async function getTotalBalance(addresses) {
    const responses = await provider.send(addresses.map(addr => ({
      jsonrpc: "2.0",
      id: 1,
      method: "eth_getBalance",
      params: [addr, "latest"],
  })));

    // return the total balance of all the addresses
    return responses.reduce((p, c) => p + parseInt(c.result), 0);
}

module.exports = getTotalBalance;
const { Wallet, providers, utils } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

function findMyBalance(privateKey) {
  // retrieve the balance, given a private key
  const wallet = new Wallet(privateKey);
  return provider.getBalance(wallet.address)
    .then((balance) => {
      const etherBalance = utils.formatEther(balance);
      return Promise.resolve(etherBalance);
    })
    .catch((err) =>{
      return Promise.reject(err);
    });
  
}

module.exports = findMyBalance;
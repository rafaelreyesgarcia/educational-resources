import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import './App.css'

// user-provider string in ether to wei using 18 decimals places bignumber
const eth = ethers.parseEther('1.0');

// parseUnits uses 9 decimal places bignumber
const feePerGas = ethers.parseUnits('4.5', 'gwei');

// convert a value in wei to a string in ether for a UI
const etherValue = ethers.formatEther(eth);

// convert a value in wei to a string in gwei
const gasValue = ethers.formatUnits(feePerGas, "gwei");

const abi = [
  "function decimals() returns (string)",
  "function symbol() returns (string)",
  "function balanceOf(address addr) returns (uint)"
];

function App() {
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState(null);
  const [blockNumber, setBlockNumber] = useState(null);
  const [balance, setBalance] = useState(null);


  const connectWallet = async () => {
    if(window.ethereum == null) {
      console.log('no injected provider found, using read-only defaults');
      const provider = ethers.getDefaultProvider();
      setProvider(provider);
    } else {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setProvider(provider);
      setSigner(signer);
    }
  }

  const getBlockNumber = async () => {
    const blockNumber = await provider.getBlockNumber();
    setBlockNumber(blockNumber);
  }
  
  useEffect(() => {
    async function getBalance() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = signer.address;
      const balance = await provider.getBalance(address);
      setBalance(balance);
    }
    getBalance()
  }, [])
  

  return (
    <div className="App">
      <button onClick={connectWallet}>{provider ? 'connected' : 'connect wallet'}</button>
      {signer ?
      <div className='flex-container'>
        <div>
          <h2>active address</h2>
          <p>{signer.address.slice(0, 6)}...{signer.address.slice(-4)}</p>
        </div>
        <div>
          <h2>balance</h2>
          <p>{balance ? ethers.utils.formatEther(balance) : 'loading...' }</p>
        </div>
      </div> : ''}
      <h2>common utils methods</h2>
      <p><code>parseEther</code> converts eth to wei: {Number(eth)}</p>
      <p><code>parseUnits</code> converts gwei to wei: {Number(feePerGas)}</p>
      <p><code>formatEther</code> converts a value in wei to a string in ether: {etherValue}</p>
      <p><code>formatUnits</code> converts a value in wei to a string in gwei: {gasValue}</p>
      {provider ? (
        <div>
          <button onClick={getBlockNumber}>current block number</button>
          <span>{blockNumber ? blockNumber : ''}</span>
        </div>) : ''}
    </div>
    
  )
}

export default App

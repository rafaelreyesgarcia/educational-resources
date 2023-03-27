import { useState, useEffect } from 'react'
import { ethers } from 'ethers';
import Token from '../../artifacts/contracts/Token.sol/Token.json'
import './App.css'

function App() {
  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();
  const [provider, setProvider] = useState();
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [owner, setOwner] = useState();

  useEffect(() => {
    async function getAccounts() {
      let signer = null;
      let provider;
  
      if (window.ethereum == null) {
        console.log('metamask not installed');
        // backed by various third-parties with no private key
        provider = ethers.getDefaultProvider();
        setProvider(provider);
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        setProvider(provider);
        setSigner(signer);
        setAccount(signer.address);
      }
      console.log('signer', signer);
      console.log('account', signer.address);
      console.log('Token ->', Token);
    }

    async function contractInstance() {
      const address = '0xc671a32D41234547A46298d1100C14708117aD3d';
      const contract = new ethers.Contract(
        address,
        Token.abi,
        signer
      );
      console.log('contract ->', contract);
      // console.log(await contract.name())
      const _name = await contract.name();
      const _symbol = await contract.symbol();
      const _totalSupply = await contract.totalSupply();
      const _address = await contract.owner();
      console.log('owner',)
      setName(_name);
      setSymbol(_symbol);
      setTotalSupply(_totalSupply);
      setOwner(_address);
    }

    getAccounts();
    contractInstance();
  }, [account]);

  return (
    <div className="App">
      <h1>Token Contract</h1>
      <div>
        <h2>contract info</h2>
        <p>Name - {name}</p>
        <p>Symbol - {symbol}</p>
        <p>Total Supply - {totalSupply}</p>
        <p>owner - {owner}1</p>
      </div>
    </div>
  )
}

export default App

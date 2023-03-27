import { useState, useEffect } from 'react'
import { ethers } from 'ethers';
import deploy from './deploy'
import './App.css'
import Escrow from './components/Escrow';


// depositor 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// arbiter 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
// beneficiary 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC

export async function approve(escrowContract, signer) {
  console.log('signer', signer);
  console.log('escrowContract', escrowContract);
  const approveTxn = await escrowContract.connect(signer).approve();
  await approveTxn.wait();
}

function App() {
  const [escrows, setEscrows] = useState([]);
  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();
  const [arbiter, setArbiter] = useState('');
  const [beneficiary, setBeneficiary] = useState('');
  const [ethValue, setEthValue] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  async function newContract() {
    // fullfilled promise promiseResult is an object with BrowserProvider and address
    const parsedEther = ethers.parseUnits(ethValue, 18);

    const escrowContract = await deploy(signer, arbiter, beneficiary, parsedEther);

    const contractAddress = escrowContract.target;
    console.log('contractAddress', contractAddress);

    const escrow = {
      address: contractAddress,
      arbiter,
      beneficiary,
      value: ethValue,
      handleApprove: async () => {
        escrowContract.on('Approved', () => {
          setIsComplete(true);
        })
        await approve(escrowContract, signer);
      }
    }
    setEscrows([...escrows, escrow]);
  }

  useEffect(() => {
    async function getAccounts() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      setSigner(signer);

      window.ethereum.on('accountsChanged', async function(accounts) {
        const newSigner = await provider.getSigner();
        const newAddress = await newSigner.getAddress();
        setAccount(newAddress);
        setSigner(newSigner);
      })
    }

    getAccounts();
  }, []);

  console.log('account ->', account);
  console.log('signer ->', signer);
  // console.log(typeof ethValue);
  return (
    <>
      <div>
        <h2>Account</h2>
        <p>{account}</p>
      </div>
      <div className='contract'>
        <h1>New Contract</h1>
        <label>
          Arbiter Address
          <input
            type="text"
            id='arbiter'
            placeholder='0x123...987'
            value={arbiter}
            onChange={(e) => setArbiter(e.target.value)}
          />
        </label>
        <label>
          Beneficiary Address
          <input
            type="text"
            id='beneficiary'
            placeholder='0x321...654'
            value={beneficiary}
            onChange={(e) => setBeneficiary(e.target.value)}
          />
        </label>
        <label>
          Deposit Amount (in ETH)
          <input
            type="number"
            id='eth'
            step={0.1}
            value={ethValue}
            placeholder='0.1'
            onChange={(e) => setEthValue(e.target.value)}
          />
        </label>
        <button id='deploy' onClick={newContract} className='button'>
          Deploy
        </button>
      </div>

      <div className='existing-contracts'>
        <h1>Existing Contracts</h1>

        <div className='existing-contract'>
          {escrows.map((escrow) => {
            return (
              <Escrow
                key={escrow.address}
                {...escrow}
                isComplete={isComplete}
                setIsComplete={setIsComplete}
                signer={signer}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App

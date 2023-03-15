import { Network, Alchemy, Utils } from 'alchemy-sdk'
import { useEffect, useState } from 'react'

// config object. default to demo api and eth-mainnet
const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(settings)

function App() {
  const [block, setBlock] = useState(null)
  const [userBlock, setUserBlock] = useState('')
  const [customBlock, setCustomBlock] = useState(0)
  const [wallet, setWallet] = useState('')
  const [balance, setBalance] = useState(null)
  const [tokens, setTokens] = useState(null)

  // useEffect(() => {
  //   async function blockMethods() {
  //     console.log('reading the blockchain...')
  //     const block = await alchemy.core.getBlock();
  //     setBlock(block)
  //   }

  //   blockMethods()
  // }, [])

  const getBlock = async () => {
    setBlock(await alchemy.core.getBlock())
  }

  const getCustomBlock = async () => {
    setCustomBlock(await alchemy.core.getBlock(userBlock))
  }

  const getWalletBalances = async () => {
    setBalance(await alchemy.core.getBalance(wallet))
    const walletTokens = await alchemy.core.getTokenBalances(wallet)
    setTokens(walletTokens.tokenBalances)
  }

  // console.log(customBlock)
  // console.log('balance', balance)
  // console.log('tokens', tokens)

  return (
    <main>
      <h1>Ethereum Explorer</h1>
      <div className='container'>
        <button onClick={getBlock}>Latest Block Information</button>
        {!block ? (
          <>
          </>
        ) : (
          <ul>
            <li>height: {(block.number).toLocaleString()}</li>
            <li>miner: {block.miner}</li>
            <li>gas used: {(block.gasUsed.toNumber()).toLocaleString()}</li>
            <li>gas limit: {(block.gasLimit.toNumber()).toLocaleString()}</li>
            <li>base fee per gas: {Utils.formatUnits(block.baseFeePerGas.toNumber())} ETH ({(Number(Utils.formatUnits(block.baseFeePerGas.toNumber(), 'gwei'))).toFixed(2)} GWEI)</li>
            <li>transactions: {block.transactions.length}</li>
          </ul>
        )}
      </div>
      <div className='container'>
        <div className='input-block'>
          <input type="text" value={userBlock} placeholder='input a block number' onChange={(e) => setUserBlock(Number(e.target.value))} />
          <button onClick={getCustomBlock}>explore a block</button>
        </div>
        {customBlock ? (
          <ul>
            <li>height: {(customBlock.number).toLocaleString()}</li>
            <li>miner: {customBlock.miner}</li>
            <li>gas used: {(customBlock.gasUsed.toNumber()).toLocaleString()}</li>
            <li>gas limit: {(customBlock.gasLimit.toNumber()).toLocaleString()}</li>
            <li>base fee per gas: {Utils.formatUnits(customBlock.baseFeePerGas.toNumber())} ETH ({(Number(Utils.formatUnits(customBlock.baseFeePerGas.toNumber(), 'gwei'))).toFixed(2)} GWEI)</li>
            <li>transactions: {customBlock.transactions.length}</li>
          </ul>
        ) : (
          <>
          </>
        )}
      </div>
      <div className='container'>
        <div className='input-block'>
          <input type="text" placeholder='0x...' value={wallet} onChange={(e) => setWallet(e.target.value)} />
          <button onClick={getWalletBalances}>search a wallet</button>
        </div>
        {balance && tokens ? (
            <>
              <h3>wallet information</h3>
              <ul>
                <li>ETH balance: {(Number(Utils.formatEther(balance))).toFixed(2)}</li>
                <li>tokens: {tokens.length}</li>
              </ul>
            </>
          ) : (
            <></>
          )}
      </div>
    </main>
  )
}

export default App


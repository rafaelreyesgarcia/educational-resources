# send erc20 to contracts

ERC20 standard interface

optional
- name
- symbol
- decimals

required
- totalSupply
- balanceOf
- transfer
- transferFrom
- approve
- allowance

events
- transfer
- approval

## balanceOf(address) returns(uint)

balance of the ERC20 is stored on the contract mapping `balances`

ether is tracked on the ethereum world state tree

a token is tracked in the storage variable inside the contract

query to take a look your balance, contract replies with the uint mapped to the address

## transfer(address, uint)

EOA calls the transfer function, so the mapping reduces the uint mapped of the sender for the amount of the transfer and increases the uint mapped of the receiver for the same amount

calldata is sent in a transaction to the contract.

triggers a transfer event so clients can know the transfer was successful

transfering for smart contracts is different than EOA

ether is built directly in the protocol

receive function payable accepts ether

balance updates of ERC20 tokens happen on the contract itself

how to send a token to a pool or any smart contract?

`approve` and `transferFrom` deal with this

```
dai.approve(uniswap, 2e18) allows the contract to spend your 2 dai

dai.transferFrom(EOA,uniswap, 2e18) transfer from my account to uniswap, 2 dai
```

the target contract interacts with the token contract to pull the balances from EOA to target contract

## approve/transferFrom

allows to transfer tokens to a smart contract and allows smart contract to acknowledge that transfer

approve method gives `spender` (a smart contract) the ability to spend tokens on behalf of the msg.sender

`poolTokens` is called on `spender` so this contract can pull tokens from the `ERC20` contract

`spender` contract keeps its own record in the pooled mapping.





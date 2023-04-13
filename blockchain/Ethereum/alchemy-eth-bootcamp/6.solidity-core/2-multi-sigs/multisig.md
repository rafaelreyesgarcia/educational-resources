# constructor

wallet is deployed and configured with owners addresses and signature requirement to move funds.

`address[] owners` stores wallet owner addresses

`uint256 required` store the amount of confirmations needed

a multiple signature wallet is a wallet that requires multiple confirmations on a tx before its executed.

in a multisig there's a sweetspot of required signatures

too little and the wallet is vulnerable

too many and it becomes risky to lose one private key

# error handling

revert deployment if
- no owner addresses are sent
- number of required confirmations is zero
- required confirmations is more than total addresses in the array

# 3 transaction struct

transaction struct should include members in following order
- address (destination for tx's value)
- uint256 value of tx in wei
- bool executed indicated if tx has been executed

store txs while bieng confirmed by other owners by
- creating a public mapping from uint id to a Transaction
- OR a public array of Transaction

# 4 add transactions

define `addTransaction`

transaction id should be zero-based

# 5 confirmation storage

each tx is only executed after all confirmation are received.

public `confirmations` should be a nested mapping, mapping transaction id to owner and to the confirmed transaction bool

a tx id maps to a mapping of address to booleans

# 6 owner confirmations

each owner should signal approval for transaction by confirming it

`confirmTransaction` with transactionId as only argument

`getConfirmations` loops through all wallets in the owners array and adds the ones that are already confirmed

# 7 confirm security

`confirmTransaction` should only be called by `owners`

a function needs to be created to loop over owners array and check if a passed address belongs to the array

this function passed to require to ensure the msg.sender is an owner address.

# submit transactions

`submitTransaction` external with destination and value as arguments

create a transaction add it to storage and confirm it

addTransaction should be internal not public. 

best practice to keep a few public/external functions

# 9 - receive

the contract is payable so define a function to accept funds

# 10 confirmation check

create a confirmed getter

# 11 execute

call syntax

to send ether and calldata to a particular address

`_tx.destination.call{value: _tx.value}("");`

`_tx.destination` address where the ether is being sent

`_tx.value` uint representing amount of ether being sent

`empty string` empty although it can be the abi encoded function signature and arguments.

if destination is a smart contract, it will run code based on this calldata.

compiler warning if no boolean success value is returned from low leve lcall

`(bool success, ) = _tx.destination.call{value: _tx.value}("");`

`require(success, 'failed to execute transaction');`

second argument will be `bytes` defining with `bytes memory returnData` 

https://solidity.readthedocs.io/en/v0.8.4/types.html#members-of-addresses

# immediate execution

executeTransaction within confirmTransaction

# sending calldata

sending calldata allows to run more complex logic

add `bytes data` variable as last member of `Transaction` struct to store calldata sent to destination

accept bytes argument in `submitTransaction` as well as `addTransaction`

send calldata inside `executeTransaction`

`_tx.destination.call{value: _tx.value}(_tx.data)`

`_tx` is transaction being executed.

properties are stored in the Transaction struct.




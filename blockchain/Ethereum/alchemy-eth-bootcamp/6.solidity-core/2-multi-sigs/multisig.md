# constructor

wallet is deployed and configured with owners addresses and signature requirement to move funds.

`address[] owners` stores wallet owner addresses

`uint256 required` store the amount of confirmations needed

a multiple signature wallet is a wallet that requires multiple confirmations on a tx before its executed.

in a multisig there's a sweetspot of required signatures

too little and the wallet is vulnerable

too many and it becomes risky to lose one private key

# error handling


# intro to escrows

contractual agreement in which a third party receives and disburses money or property for the primary transacting parties.

disbursement depends on conditions agreed by transacting parties.

1. sends funds to escrow agent
2. gives purchase to buyer
3. releases funds to seller

# 1 setup

`Depositor`

- payer of the escrow
- makes initial deposit that will reach the beneficiary

`beneficiary`

- receiver of the funds
- provides service or product to depositor.

`arbiter`

- approver of transaction
- can transfer the funds to beneficiary after product/service has been provided
- can hold and move the funds

# 2 constructor storage

when the 3 parties come to an agreement upon escrow terms, a contract is deployed.

depositor is the signer and the beneficiary and arbiter are going to be passed as arguments.

# 3 funding

constructor has `payable` modifier

# 4 approval

`beneficiary.call` sending the balance in the contract (`address(this).balance`) to the beneficiary.

# 5 security

require that the msg.sender invoking the function has to be the arbiter.

# 6 events

emit an event that takes a topic of the balance that was transferred.

# 7 deployment

ContractFactory creates a new instance for the contract described by abi and bytecode

contractFactory.deploy(...args, [overrides])

uses the signer to deploy the contract with args passed into the constructor of the contract.

# approve tx

a js function calls the solidity `approve` function using the arbiter as a signer








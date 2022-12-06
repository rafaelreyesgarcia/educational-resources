# introduction to subnets

goals 
- virtual machines 
- subnets
- differences between subnets and c-chain
- subnet explorer to query data on a subnet

## virtual machines

- a virtual machine defines the application-level logic of a blockchain.
- defines the state of a blockchain, state transition function, transactions and APIs that allow the users to interact with the blockchain.
- each blockchain is an instance of a VM.
- each subnet can have multiple blockchains.
- when writing a VM, lower-level logic like networking, consensus and blockchain structure are not problems.
- avalanche behind the scene takes care of lower-level logic

### why virtual machines?

- monolithic design with a predefined static and single VM is the model for older blockchain protocols.
- avalanche makes easy to define a dapp.
- developers can write VMs in go.
- ethereum VM has low performance and imposes restrictions on smart contract developers.

disadvantage
- solidity is unfamiliar for most programmers

## subnets

sovereign network which define custom rules about tokenomics.

dynamic subset of avalanche validators work together to reach consensus in designated subnets.

each blockchain is validated by one subnet.

a subnet can have many blockchains.

a validator can be a member of multiple subnets.

avalanche chains are validated and secured by validators from a special subnet referred as primary network.

all subnet validators.

subnets
- define their own execution logic
- determine their custom fee regime
- maintain their own state
- facilitate own networking 
- provide their own security
- subnets dont share **execution thread, storage or networking** with other subnets including primary network.
- network then scales up enabling low latency and higher TPS.
- subnets can have custom tokenomics/
- subnets can launch blockchain instances with custom virtual machines, so subnets are customizable

avalanche validators must meet a set of requirements
- located in a given country
- pass KYC/AML checks
- must hold certain license

### application specific reqquirements

- different applications have different needs (CPU or RAM power)
- a subnet can have a custom requirement to meet a minimum hardware requirements so the subnet is able to provide different execution environments to power up different applications.

### private blockchains

- private subnets only visible to validators in the subnet.
- ideal for organizations that aim to keep data private.

### separation of concers

- heterogeneous network of blockchains, some validators will not validate certain blockchins out of lack of interest.
- subnet model allows validators to only concern themselves with relevant blockchains.

### validators

incentives are provided by subnet owners to attract validators to validate the network and provide the computational resources to the EVM.

validators must take security and resource concerns when deciding to validate a given subnet.

## benefits of subnets

- subnets are independent netowkrs with own rules of membership and tokenomics.
- standards are set in terms of compliance, membership and hardware requirements.
- subnet model allows validator to choose which blockchain to validate.
- you can build applications in both the c-chain or your own custom chain.


## reasons to use a subnet over c-chain

**1. custom gas token**

- c-chain is an EVM that requires gas fees to be paid in its native token.
- running a subnet, allows the gas fee payment to be custom to the subnet nativest token instead of AVAX.

**2. higher throughput**

- gas limit is imposed to restrict block sizes to prevent network saturation.
- limiting factor for high throughput applications.
- using custom subnet means you can customize validator requirements to target higher bandwidth allowing higher gas limits and higher tx throughputs.

**3. strict access control**

- subnets allow strict access control on its side chain
- can be configued to allow only authorized users
- c-chain is open and  permissionless

**4. EVM customization**
- using a subnet allows to configure the parameters to precompile the subnet EVM.
- c-chain settings are already harden (would be expensive and complex to change them)

## reasons to use the c-chain

**1. high composability with c-chain assets**

- seamless integration with c-chain assets and contracts.
- larger liquidity pools
- a subnet can still support composability but requires an off-chain system via a bridge contract.

**2. high security**

- the greater the number of validators the higher the level of security. c-chain is secured by all avalanche validators.

**3. low initial cost**

- c-chain has economic advantages of low-cost deployment.
- subnet validator is required to validate primary network (min  2,000 AVAX for mainnet)

**4. low operational cost**

- c-chain is highly decentralized.
- explorers, indexers, exchanges and bridges have been built
- subnets need all of this constructed.

## subnet explorers

- analytics tool for querying subnet transactions, addresses, statistics, etc.

### perform a subnet search

[subnet explorer](https://subnets.avax.network/subnets)

a tx hash contains information like
- subnet and block number
- transaction status
- data pertaining to tx
- swimmer network subnet's native token TUS

## subnet use cases

- swimmer network subnet is a dedicated blockchain for gaming that leverages avalanche's infrastructure and security.
- developed a bridge to transfer tokens from c-chain to subnet.

### defi kingdoms

## quiz

1. Each Subnet can only have 1 VM.
> false

2. Which of the following is not part of Avalanche’s Primary Network?
> Token Chain

3. Subnets are dependent on the configuration set by the Primary network, following the execution logic and fee regime of the Primary network. 
> false 

4. Which of the following statements is true?
> all Subnet validators must validate the Avalanche Primary Network

5. One advantage of Subnets is that they can have their own native token and set their own fees, effectively having a separate set of token economics from the other Subnets. 
> true

6. Which of the following is not a benefit of Subnets?
> Same level of security as the C-Chain as all Avalanche validators validate every Subnet

7. All gas fees on the C-Chain can only be paid using 1 token. The symbol of this token is AVAX

8. Which of the following is not a reason to use a Subnet? 
> Low operational cost since we can leverage the C-Chain’s infrastructure

9. Which of the following is not a reason to use the C-Chain?
> Able to easily configure the EVM

10. Both the Swimmer Network Subnet and DeFi Kingdoms subnets use **bridge** contracts to move tokens from their Subnets to the C-Chain.


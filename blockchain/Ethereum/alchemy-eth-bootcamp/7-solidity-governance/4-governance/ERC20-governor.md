# ERC20 governor

an ERC20 token used for governance has two purposes
- represent voting weight in a governor contract
- `mint` function can only be called when a proposal from token holders has been executed

*MyGovernor* contract built from openzeppelin governor wizard configured to have 1 block voting delay and voting period

*MyToken* built to work together with governor standard. Re-create it by toggle *Votes* checkbox on openzeppelin erc20 wizard

setup the repository with npm i

`npx hardhat test` will run the unit tests

# deployment

governor contract depends on the token for voting and the token depends on the governance for its mint function

to solve this dependency we calculate the address of the contract ahead of time

```js
const transactionCount = await owner.getTransactionCount();

// gets the address of the token before it is deployed
const futureAddress = ethers.utils.getContractAddress({
  from: owner.address,
  nonce: transactionCount + 1
});

const MyGovernor = await ethers.getContractFactory("MyGovernor");
const governor = await MyGovernor.deploy(futureAddress);

const MyToken = await ethers.getContractFactory("MyToken");
const token = await MyToken.deploy(governor.address);
```

contract addresses are deterministic, they are the keccak hash of the address deploying the contract and the nonce for the particular address.

`getContractAddress` requires these two parameters to generate the address before its deployed

# delegation

the owner address receives 10,000 tokens when deploying the token and want to delegate the voting power to themselves

```js
await token.delegate(owner.address);
```

# proposing

```js
const tx = await governor.propose(
  [token.address],
  [0],
  [token.interface.encodeFunctionData("mint", [owner.address, parseEther("25000")])],
  "Give the owner more tokens!"
);
const receipt = await tx.wait();
const event = receipt.events.find(x => x.event === 'ProposalCreated');
const { proposalId } = event.args;
```

create a proposal to mint 25,000 tokens to the owner.

to look up the state of the proposal and vote we need the proposalId, emitted when the proposal is created

```js
// wait for the 1 block voting delay
await hre.network.provider.send("evm_mine");
```

# vote on the proposal

```js
const tx = await governor.castVote(proposalId, 1);
```

# execute the vote

looks up the proposal by hashed parameters

```js
await governor.execute(
  [token.address],
  [0],
  [token.interface.encodeFunctionData("mint", [owner.address, parseEther("25000")])],
  keccak256(toUtf8Bytes("Give the owner more tokens!"))
);
```

# goal to deploy on sepolia

add sepolia key and private key to hardhat config

reconfigure MyGovernor to use a different voting period, second argument passed to GovernorSettings

```js
npx hardhat run scripts/deploy.js --network sepolia
```


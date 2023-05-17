# proposal

craete public array of Proposal named proposals

external function newProposal takes address and bytes calldata to send the smart contract when proposal is executed

create a new Proposal in the function and yes/no vote counts initialized to 0

add Proposal to proposals array

# cast a vote

castVote function takes uint proposalId and a bool indicating if the vote supports the proposal

each vote cast should update the yesCount and noCount in the referenced proposal

# multiple votes

prevent voters to vote more than once, but allow them to change their vote if they want to

# voting events

create an event ProposalCreated that takes a single argument uint proposalID

emit event when a new Proposal struct is created

create a VoteCast event that takes a uint proposalID and an address for voter's address

# voting members

a sybil attack can occur when a single person operates many accounts to outnumber real users.

create a public constructor that takes an array of addresses

there should be a mapping of address to a bool that the constructor will iterate and assign each member to a bool of true

then a require statement will be able to determine if the msg.sender is included in the mapping to be able to create a new proposal and cast a vote

# execute a vote

a minimum voting participation is needed to execute a proposal

governance systemss use coin voting where the number of ERC20 tokens you hold, decide the vote weight

the minimum voting threshold should be 10 participants

once 10 members have voted yes, execute the proposal

execute the vote by sending data to the target address via call syntax



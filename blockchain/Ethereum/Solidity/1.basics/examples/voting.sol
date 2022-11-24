// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Ballot {

  // represents a single voter
  struct Voter {
    uint weight; // weight is accumulated by delegation
    bool voted;
    address delegate; // person delegated to
    uint vote; //index of the voted proposal
  }

  struct Proposal {
    bytes32 name; //up to 32 bytes
    uint voteCount; //acumulated votes
  }

  address public chairperson;

  // stores a voter for each address
  mapping(address => Voter) public voters;

  // dynamically-sized array of Proposal structs
  Proposal[] public proposals;

  constructor(bytes32[] memory proposalNames) {
    chairperson = msg.sender;
    voters[chairperson].weight = 1;

    for (uint i = 0; i < proposalNames.length; i++) {
      proposals.push(Proposal({
        name: proposalNames[i],
        voteCount: 0
      }));
    }
  }

  function giveRightToVote(address voter) external {
    require(
      !voters[voter].voted,
      "the voter already voted."
    );
    require(voters[voter].weigth = 0);
    voters[voter].weight = 1;
  }

  function delegate(address to) external {
    Voter storage sender = voters[msg.sender];
    require(sender.weight !=0, "you have no right to vote");
    require(!sender.voted, "you already voted");
    require(to != msg.sender, "self-delegation is disallowed");

    while (voters[to].delegate != address(0)) {
      to = voters[to].delegate;

      require(to != msg.sender, "found a loop in delegation");
    }

    voter storage delegate_ = voters[to];

    require(delegate_.weight >= 1);

    sender.voted = true;
    sender.delegate = to;

    if (delegate_.voted) {
      proposals[delegate_.vote].voteCount += sender.weight;
    } else {
      delegate_.weight += sender.weight;
    }
  }

  function vote(uint proposal) external {
    Voter storage sender = voters[msg.sender];
    require(sender.weight != 0, "has no right to vote");
    require(!sender.voted, "already voted.");
    sender.voted = true;
    sender.vote = proposal;

    proposals[proposal].voteCount += sender.weight;
  }

  function winningProposal() public view returns (uint winninwProposal_) {
    uint winningVoteCount = 0;
    for(uint p = 0; p < proposals.length; p++) {
      if (proposals[p].voteCount > winningVoteCount) {
        winningVoteCount = proposals[p].voteCount;
        winningProposal_ = p;
      }
    }
  }

  function winnerName() external view returns (byte32 winnerName_) {
    winnerName_ = proposals[winningProposal()].name;
  }
}
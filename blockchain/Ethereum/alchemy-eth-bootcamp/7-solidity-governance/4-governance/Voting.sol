// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Voting {
  enum VoteStates{Absent, Yes, No}
  uint constant VOTE_THRESHOLD = 10;

  struct Proposal {
    address target;
    bytes data;
    bool executed;
    uint yesCount;
    uint noCount;
    mapping(address => VoteStates) voteStates;
  }

  Proposal[] public proposals;

  mapping(address => bool) members;

  event ProposalCreated(uint);

  event VoteCast(uint, address indexed);

  constructor(address[] memory _members) {
    for(uint i = 0; i < _members.length; i++) {
      members[_members[i]] = true;
    }

    members[msg.sender] = true;
  }

  function newProposal(address _target, bytes calldata _data) external {
    // proposals.push(Proposal(_target, _data, 0, 0));
    require(members[msg.sender]);
    emit ProposalCreated(proposals.length);
    Proposal storage proposal = proposals.push();

    proposal.target = _target;
    proposal.data = _data;
  }

  function castVote(uint _proposalId, bool _supports) external {
    require(members[msg.sender]);
    Proposal storage proposal = proposals[_proposalId];

    // modify previous vote
    if(proposal.voteStates[msg.sender] == VoteStates.Yes) {
      proposal.yesCount--;
    }

    if(proposal.voteStates[msg.sender] == VoteStates.No) {
      proposal.noCount--;
    }

    // cast a new vote
    if(_supports) {
      proposal.yesCount++;
    } else {
      proposal.noCount++;
    }

    proposal.voteStates[msg.sender] = _supports ? VoteStates.Yes : VoteStates.No;

    emit VoteCast(_proposalId, msg.sender);

    if(proposal.yesCount == VOTE_THRESHOLD && !proposal.executed) {
      (bool success, ) = proposal.target.call(proposal.data);
      require(success);
    }
  }
}

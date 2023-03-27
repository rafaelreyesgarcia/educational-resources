// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Escrow {
  address public depositor;
  address public arbiter;
  address public payable beneficiary;
  bool public isApproved;
  uint balance;

  constructor(address _arbiter, address payable _beneficiary) payable {
    depositor = msg.sender;
    arbiter = _arbiter;
    beneficiary = _beneficiary;
  }

  event Approved(uint balance);

  function approve() external {
    require(msg.sender == arbiter, 'cannot perform this action.');
    balance = address(this).balance;
    // address(this).balance retrieves the balance from the contract in wei
    (bool sent, ) = beneficiary.call{value: balance}("");
    require(sent, 'failed to send Ether');
    emit Approved(balance);
    isApproved = true;
  }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Party {
	uint256 deposit;
  address[] participants;
  mapping(address => bool) paid;

  constructor(uint256 _deposit) {
    deposit = _deposit;
  }

  function rsvp() external payable {
    require(!paid[msg.sender]);
    require(msg.value == deposit);
    participants.push(msg.sender);
    paid[msg.sender] = true;
  }

  function payBill(address venue, uint amount) external {
    (bool s1, ) = venue.call{value: amount}("");
    require(s1);

    uint share = address(this).balance / participants.length;

    for(uint i = 0; i < participants.length; i++) {
      (bool s2, ) = participants[i].call{value: share}("");
    }
    require(s2);
  }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Countdown {
  uint counter = 10;

  function tick() public {
    if (countdown == 1) {
      selfdestruct(payable(msg.sender));
    }
    counter--;
  }

}
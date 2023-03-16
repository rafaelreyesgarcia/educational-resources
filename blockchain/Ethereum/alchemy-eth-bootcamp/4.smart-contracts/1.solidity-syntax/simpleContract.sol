// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract MyContract {
  address public owner;
  bool public isHappy;
  int signed = -50;
  uint8 x = 255;
  uint16 y = 65535;
  uint256 z = 10000000000000000000;

  constructor(address _owner, bool _isHappy) {
    owner = _owner;
    isHappy = _isHappy;
  }
}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "hardhat/console.sol";

contract Contract {
  constructor(uint x, string y, bool z) {
    console.log(x); // 1
    console.log(y); // Hello World!
    console.log(z); // true
  }
}
// SPDX-License-Identifier: MIT

import "hardhat/console.sol"

pragma solidity ^0.8.4;

contract Contract {
  address public owner;
  address public charity;
  address public a;
  address public b;

  constructor(address _a, address _b, address _charity) {
    owner = msg.sender;
    charity = _charity;
    a = _a;
    b = _b;
    console.log(address(this));
    console.log(address(this).balance); // 0
  }

  function pay() public payable {
    console.log(msg.value); // eth sent to pay measured in wei
  }

  function payA() public payable {
    (bool s, ) = a.call{value: msg.value}("");
    require(s);
  }

  function payB() public payable {
    (bool s, ) = b.call{value: msg.value}("");
    require(s);
  }

  function tip() public payable {
    (bool s, ) = owner.call{value: msg.value}("");
    require(s);
  }

  function donate() public {
    (bool success, ) = charity.call{value: address(this).balance}("");
    require(success);
  }

  function donateDestruct() public {
    selfdestruct(payable(charity))
  }

  function a() public view {
    this.b()
  }

  function b() public pure returns (uint) {
    return 3;
  }

  receive() external payable {
    console.log(msg.value);
    // receives ether directly in the contract without needing the pay function
    // accepts ether without calldata
  }

  fallback() external {
    // do something when calldata is incorrect
    // created  to handle function signature mistakes
  }

}



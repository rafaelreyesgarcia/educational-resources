// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Revert {
  address deployer;

	constructor() payable {
		require(msg.value >= 1e18, "Not enough ether sent");
	}

  function withdraw() public {
    require(msg.sender == deployer, "not allowed to withdraw.")
    payable(msg.sender).transfer(address(this).balance);
    // (bool s, ) = deployer.call{value: address(this).balance}("");
    // require(s);
  }
}
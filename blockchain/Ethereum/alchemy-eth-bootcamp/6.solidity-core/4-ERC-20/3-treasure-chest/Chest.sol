// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// interface defines the standard functions that a token contract should implement
import "./IERC20.sol";

contract Chest {
  function plunder(address[] calldata tokens) external {
    for (uint i = 0; i < tokens.length; i++) {
      // IERC20 instance for each token address in the array
      IERC20 token = IERC20(tokens[i]);
      uint balance = token.balanceOf(address(this));
      token.transfer(msg.sender, balance);
    }
  }
}

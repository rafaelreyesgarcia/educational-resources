pragma solidity ^0.8.4;

contract Ownable {
  address public owner;

  constructor() internal {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(owner == msg.sender, 'ownable: caller is not the owner');
    _;
  }
}


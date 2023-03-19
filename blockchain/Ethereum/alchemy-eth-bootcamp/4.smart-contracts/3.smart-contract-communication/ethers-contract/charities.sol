pragma solidity ^0.8.0

contract Charities {
  mapping(uint => uint) balances;

  // each charity has an id that maps to a balance
  function donate(uint id) external payable {
    balances[id] += msg.value
  }
}
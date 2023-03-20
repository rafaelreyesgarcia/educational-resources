pragma solidity ^0.8.4;

contract Selfdestruct {
  uint _countdown = 10;

  // ether sent to the payable constructor will be refunded to the final caller of tick
  constructor() payable {}

  function tick() public {
    _countdown--;

    if(_countdown == 0) {
      // address that called gets remaining ether in the contract
      selfdestruct(payable(msg.sender))
    }
  }
}
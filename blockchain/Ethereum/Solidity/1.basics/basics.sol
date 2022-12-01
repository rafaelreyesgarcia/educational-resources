// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
  // uint state variable declaration
  uint storeData;

  // sets the value of a variable
  function set(uint x) public {
    storeData = x;
  }

  // exposes the value to other contracts to access
  function get() public view returns (uint) {
    return storeData;
  }
}

contract Coin {
  // declaring a state variable "minter" of type address
  address public minter;
  mapping (address => uint) public balances;

  event Sent(address from, address to, uint amount);

  constructor() {
    minter = msg.sender;
  }

  function mint(address receiver, uint amount) public {
    require(msg.sender == minter);
    balances[receiver] += amount;
  }

  error InsufficientBalance(uint requested, uint available);

  function send(address receiver, uint amount) public {
    if (amount > balances[msg.sender])
      revert InsufficientBalance({
        requested: amount,
        available: balances[msg.sender]
      });
    
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    emit Sent(msg.sender, receiver, amount);
  }
}


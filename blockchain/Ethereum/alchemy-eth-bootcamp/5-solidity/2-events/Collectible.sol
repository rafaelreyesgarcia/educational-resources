// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
  address owner;
  uint price;

  event Deployed(address indexed firstOwner);
  constructor() {
    owner = msg.sender;
    emit Deployed(msg.sender);
  }

  event Transfer(address indexed firstOwner, address indexed newOwner);
  function transfer(address newOwner) external {
    require(msg.sender == owner, 'you cannot perform this action.');
    emit Transfer(owner, newOwner);
    owner = newOwner;
  }

  event ForSale(uint price, uint blockstamp);
  function markPrice(uint _price) external {
    require(msg.sender == owner);
    price = _price;
    emit ForSale(price, block.timestamp);
  }

  event Purchase(uint amount, address indexed buyer);
  function purchase() payable external {
    require(msg.value == price);
    require(price > 0);
    price = 0;
    (bool success, ) = owner.call{value: msg.value}("");
    require(success);
    owner = msg.sender;
    emit Purchase(msg.value, msg.sender);
  }
}
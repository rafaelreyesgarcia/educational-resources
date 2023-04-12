// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract MultiSig {
  address[] public owners;
  uint public required;
  uint public transactionCount;

  struct Transaction {
    address destination;
    uint256 value;
    bool execute;
    bytes data;
  }

  mapping(uint => Transaction) public transactions;

  mapping(uint => mapping(address => bool)) public confirmations;

  function addTransaction(address payable destination, uint value, bytes memory data) internal returns(uint transactionId) {
    transactionId = transactionCount;
    transactions[transactionCount] = Transaction(destination, value, false, data);
    transactionCount += 1;
  }

  function isOwner(address addr) private view returns(bool) {
    for(uint i = 0; i < owners.length; i++) {
      if(owners[i] == addr) {
        return true;
      }
    }
    return false;
  }

  function confirmTransaction(uint transactionId) public {
    require(isOwner(msg.sender), 'you are not an owner');
    confirmations[transactionId][msg.sender] = true;
    if(isConfirmed(transactionId)) {
      executeTransaction(transactionId);
    }
  }

  function getConfirmationsCount(uint transactionId) public view returns(uint) {
    uint count;
    for (uint i = 0; i < owners.length; i++) {
      if(confirmations[transactionId][owners[i]]) {
        count++;
      }
    }
    return count;
  }

  function submitTransaction(address payable destination, uint value, bytes memory data) external {
    uint transactionId = addTransaction(destination, value, data);
    confirmTransaction(transactionId);
  }

  receive() payable external {

  }

  function isConfirmed(uint transactionId) public view returns(bool) {
    return getConfirmationsCount(transactionId) >= required;
  }

  function executeTransaction(uint transactionId) public {
    require(isConfirmed(transactionId));
    Transaction storage _tx = transactions[transactionId];
    (bool success, ) = _tx.destination.call{value: _tx.value}(_tx.data);
    require(success, 'failed to execute transaction');
    _tx.executed = true;
  }

  constructor(address[] memory _owners, uint _required) {
    require(_owners.length > 0 && _required > 0);
    require(_required <= _owners.length);
    owners = _owners;
    required = _required;
  }

}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract MultiSig {
  // stores addresses of owners
  address[] public owners;
  // amount of owners approval
  uint public required;
  // amount of transactions
  uint public transactionCount;

  struct Transaction {
    address destination;
    uint256 value;
    bool executed;
    bytes data; //calldata to send when executing a tx
  }

  mapping(uint => Transaction) public transactions;

  mapping(uint => mapping(address => bool)) public confirmations;

  // assigns an id to a transaction struct and adds it to the transactions mapping
  function addTransaction(address payable destination, uint value, bytes memory data) internal returns(uint transactionId) {
    transactionId = transactionCount;
    transactions[transactionCount] = Transaction(destination, value, false, data);
    transactionCount += 1;
  }

  // check if given address is in the array of owners
  // utility function
  function isOwner(address addr) private view returns(bool) {
    for(uint i = 0; i < owners.length; i++) {
      if(owners[i] == addr) {
        return true;
      }
    }
    return false;
  }

  // requires that the msg.sender is in the array of owners
  // in the confirmations nested mapping, an owner agrees on a transaction, sets the bool in the nested mapping to true
  // once approval of owners is equal to the required amount of signatures, the transaction gets executed.
  function confirmTransaction(uint transactionId) public {
    require(isOwner(msg.sender), 'you are not an owner');

    confirmations[transactionId][msg.sender] = true;

    if(isConfirmed(transactionId)) {
      executeTransaction(transactionId);
    }
  }

  // verifies if confirmations meet the required criteria
  // utility function
  function isConfirmed(uint transactionId) public view returns(bool) {
    return getConfirmationsCount(transactionId) >= required;
  }

  // iterates over array of owners to check how many owners have agreed on executing a tx
  // if the nested mapping value is true, then the count of confirmations increases by 1
  // utility
  function getConfirmationsCount(uint transactionId) public view returns(uint) {
    uint count;
    for (uint i = 0; i < owners.length; i++) {
      if(confirmations[transactionId][owners[i]]) {
        count++;
      }
    }
    return count;
  }

  // stores the returned value from addTransaction, also executes confirmTransaction.....
  function submitTransaction(address payable destination, uint value, bytes memory data) external {
    uint transactionId = addTransaction(destination, value, data);
    confirmTransaction(transactionId);
  }

  // enables contract to receive ether
  receive() payable external {

  }

  // once the required owners agreed on the transaction,
  // an internal copy is stored of a Transaction struct taken from the transactions mapping with the given transactionId
  // the amount is sent to the destination address, and calldata is passed as parameter to add further logic
  function executeTransaction(uint transactionId) public {
    require(isConfirmed(transactionId));
    Transaction storage _tx = transactions[transactionId];
    (bool success, ) = _tx.destination.call{value: _tx.value}(_tx.data);
    require(success, 'failed to execute transaction');
    _tx.executed = true;
  }

  // assigns the owner addresses in the array
  // sets the required confirmations to execute a transaction
  constructor(address[] memory _owners, uint _required) {
    require(_owners.length > 0 && _required > 0);
    require(_required <= _owners.length);
    owners = _owners;
    required = _required;
  }

}

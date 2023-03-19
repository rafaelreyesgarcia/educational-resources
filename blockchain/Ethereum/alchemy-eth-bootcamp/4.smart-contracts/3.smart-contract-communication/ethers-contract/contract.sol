// SPDX-License-Identifier: MIT
pragma solidity 0.7.5;

contract Contract {
	uint public value;
  mapping(address => uint) public balances; // maps an address to an uint.
  address owner;
  string public message;

	constructor(uint _value) {
		value = _value;
    balances[msg.sender] = 1000; // 1000 is mapped to the contract address
    owner = msg.sender;
	}

  function modify(uint _value) external {
    value = _value;
  }

  function add(uint x, uint y) external pure returns(uint) {
    return x + y;
  }

  function transfer(address beneficiary, uint amount) external {
    require(balances[msg.sender] => amount, 'balance too low!'); // conditional to continue with the body, the uint mapped to the contract should be greater than or equal to the amount passed
    balances[beneficiary] += amount; // if require checks, beneficiary address balance increases by the amount value
    balances[msg.sender] -= amount; // contract balance decreases by the amount passed
  }

  function modifyMessage(string calldata _message) external {
    require(msg.sender != owner, 'owner cannot modify the message!');
    message = _message;
  }
}

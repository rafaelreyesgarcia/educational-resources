// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Token {
  uint public totalSupply;

  string public name = 'someCoin';
  string public symbol = 'SMC';
  uint8 public decimals = 18;

  mapping(address => uint256) public balances;

  event Transfer(address indexed from, address indexed to, uint256 value);

  function balanceOf(address account) external view returns(uint) {
    return balances[account];
  }

  function transfer(address _to, uint _value) public returns(bool){
    require(balances[msg.sender] >= _value);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    emit Transfer(msg.sender, _to, _value);
    return true;
  }

  constructor() {
    totalSupply = 1000 * (10 ** uint256(decimals));
    balances[msg.sender] = totalSupply;
  }
}


pragma solidity 0.8.4;

contract Token {
  mapping(address => uint) public balances;
}

interface IERC20 {

  function totalSupply() external view returns (uint256);
  function balanceOf(address account) external view returns (uint256);
  function allowance(address owner, address spender) external view returns (uint256);

  function transfer(address recipient, uint256 amount) external returns (bool);
  function approve(address spender, uint256 amount) external returns (bool);
  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);


  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract MyContract is IERC20 {
  // erc-20 compliant contract

  mapping(address => uint256) balances;

  function decreaseBalance(uint256 _value) public {
    balances[msg.sender] -= _value;
  }
}
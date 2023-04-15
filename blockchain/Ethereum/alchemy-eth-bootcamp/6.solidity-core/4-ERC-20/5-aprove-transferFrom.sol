contract ERC20 {
  mapping (address => uint256) balances;
  mapping (address => mapping(address => uint256)) allowed;

  function approve(address spender, uint256 value) public returns(bool success) {
    allowed[msg.sender][spender] = value;
    emit Approval(msg.sender, spender, value);
    return true;
  }

  function transferFrom(address from, address to, uint256 value) public returns(bool success) {
    balances[to] += value;
    balances[from] -= value;
    allowed[from][msg.sender] -= value;
    emit Transfer(from, to, value);
    return true;
  }
}

contract Spender {
  mapping(address => uint) pooled;
  address erc20;

  function poolTokens(uint256 amount) public returns(bool success) {
    bool success = ERC20(erc20).transferFrom(msg.sender, address(this), amount);
    require(success);
    pooled[msg.sender] += amount;
  }
}
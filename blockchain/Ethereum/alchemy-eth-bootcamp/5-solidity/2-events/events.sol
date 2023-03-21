interface IERC20 {
  // topics - from, to , value
  event Transfer(address indexed from, address indexed to, uint256 value);
}

function _transfer(
  address from,
  address to,
  uint256 amount
) internal virtual {
  unchecked {
    _balances[from] = fromBalance - amount;
  }
}

contract Faucet {

  // event ExampleEvent(uint _exampleArgument);
  event Withdrawal(address _recipient);

  event Sample(uint, bool); 

  function withdraw() external {
    msg.sender.transfer(1 ether);
    emit Withdrawal(msg.sender);
  }

}
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
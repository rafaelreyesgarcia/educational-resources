interface IToken {
  function getBalance(address user) external;
}

uint balance = IToken(tokenAddress).getBalance(userAddress);


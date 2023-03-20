contract callDataEncoding {
  function sendData(address x) external {
    (bool s, ) = x.call(abi.encodeWithSignature("receiveData(uint256)", 5));
    require(s);
  }
}
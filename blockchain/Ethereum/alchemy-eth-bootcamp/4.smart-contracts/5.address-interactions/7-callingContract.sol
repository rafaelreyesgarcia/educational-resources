
contract A {
  function setValueOnB(address b) external {
    // used when contract definition is not available
    (bool s, ) = b.call(abi.encodeWithSignature("storeValue(uint256)", 22));
    require(s);

    // OR if the contract definition(declaration) of B is available
    B(b).storeValue(22);
  }
}

contract B {
  uint x;

  function storeValue(uint256 _x) external {
    x = _x;
  }
}

// alternative to contract definition
// interface describes the way the caller wants to interact with the contract
interface B {
  function storeValue(uint 256) external;
}
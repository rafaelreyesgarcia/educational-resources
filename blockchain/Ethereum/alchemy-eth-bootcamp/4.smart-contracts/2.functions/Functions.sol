// pragma solidity ^0.6.2;
pragma solidity 0.8.4;

contract Functions {
  address owner;
  uint x = 5;
  // can query the value with a getter x()
  uint y = 10;
  uint a;
  uint _myNum;

  bool public isOpen;
  bool _isRunning = true;

  constructor(bool _isOpen) {
    isOpen = _isOpen;
  }

  // function_keyword + function_name(paramter_list) + visibility {}
  function helloWorld(bool _saysHello) public {
    // statements
  }

  // declaration is stored in local memory, once execution ends, the memory is wiped.
  function myFunction() external pure {
    uint x = 5;
  }

  function changeOwner(address _newOwner) public {
    owner = _newOwner
  }

  function sum() external view returns(uint) {
    return x + y;
  }

  // usually used in libraries or independent functionality to the contract's state
  function add(uint x, uint y) external pure returns(uint) {
    return x + y;
  }

  // same identifier add is valid as long as arguments are different
  function add(uint x, uint y, uint z) external pure returns (uint) {
    return x + y + z;
  }

  function addTwo(uint x, uint y) external pure returns(uint, uint) {
    return (x + 2, y + 2);
  }

  function mathTime(uint x, uint y) external pure returns(uint sum uint product) {
    z = x + y;
  }

  function tupleReturn(uint sum, uint product) external pure returns(uint, uint) {
    uint = sum = x + y;
    uint product = x * y;

    return (sum, product);
  }

  function storeSum() external {
    a = x + y;
  }

  // equivalent to a getter for uint pure _myNum;
  function myNum() public view returns (uint) {
    return _myNum;
  }

  function isRunning() external view returns(bool) {
    return _isRunning;
  }

  function double(uint num1, uint num2) external pure returns(uint) {
    return num1 + num2;
  }

  function doubleAlternative(uint num1, uint num2) external pure returns(uint sum) {
    sum = num1 + num2;
  }

}

pragma solidity ^0.8.4;

contract Contract {
  uint public x;

  constructor(uint _x) {
    x = _x;
  }

  function increment() external {
    x += 1;
  }

  function add(uint y) external view returns(uint) {
		return x + y;
	}

  // function add(uint num) external view returns(uint sum){
  //   sum = num + x;
  //   return sum;
  // }

  function double(uint num) external pure returns(uint doubled) {
    doubled = num * 2;
  }

  function doubleOverload(uint num1, uint num2) external pure returns(uint, uint) {
    return (num1 * 2, num2 * 2);
  }
}
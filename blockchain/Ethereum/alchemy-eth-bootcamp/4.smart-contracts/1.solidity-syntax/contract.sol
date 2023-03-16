// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
  // booleans
	bool public a = true;
  bool public b = false;

  // unsigned integers
  uint8 public num1 = 4;
  uint16 public num2 = 256;
  uint256 public sum = num1 + num2;

  // signed integers
  int8 public num3 = 10;
  int8 public num4 = -30;
  int16 public difference = num3 - num4;

  // bytes and strings
  bytes32 public msg1 = "Hello World";
  string public msg2 = "Create a public string state variable msg2 which stores a string literal that requires over 32 bytes to store.";

  // enum
  enum Foods { Apple, Pizza, Bagel, Banana }

	Foods public food1 = Foods.Apple;
	Foods public food2 = Foods.Pizza;
	Foods public food3 = Foods.Bagel;
	Foods public food4 = Foods.Banana;
}
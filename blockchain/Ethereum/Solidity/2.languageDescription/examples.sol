// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

// adjust supplied gas
// address(nameReg).call{gas: 1000000}(abi.encodeWithSignature("register(string)", "MyName"));

// adjust supplied ether value
// address(nameReg).call{value: 1 ether}(abi.encodeWithSignature("register(string)", "MyName"));

// combining modifiers
// address(nameReg).call{gas: 1000000, value: 1 ether}(abi.encodeWithSignature("register(string),""MyName"));

// enum

contract test {
  enum ActionChoices { GoLeft, GoRight, GoStraight, SitStill }
  ActionChoices choice;
  ActionChoices constant defaultChoice = ActionChoices.GoStraight;

  function setGoStraight() public {
    choice = ActionChoices.GoStraight;
  }

  function getChoice()
 public view returns (ActionChoices) {
  return choice;
 }

 function getDefaultChoice() public pure returns (uint) {
  return uint(defaultChoice);
 }

 function getLargestValue() public pure returns (ActionChoices) {
  return type(ActionChoices).max;
 }

 function getSmallestValue() public pure returns (ActionChoices) {
  return type(ActionChoices).min;
 }

}

// expression and control structures

// internal function calls with recursion

contract C {
  function g(uint a) public pure returns (uint ret) {return a + f();}
  function f() internal pure returns (uint ret) {return g(7) + f();}
}

// external function call

contract InfoFeed {
  function info() public payable returns (uint ret) {return 42;}
}

contract Consumer {
  InfoFeed feed;
  function setFeed(InfoFeed addr) public { feed = addr; }
  function callFeed() public {feed.info{value:10, gas:800}();}
}

// named parameters
contract Co {
  mapping(uint => uint) data;

  function f() public {
    set({value: 2, key: 3});
  }

  function set(uint key, uint value) public {
    data[key] = value;
  }
}

// omitted names in function definitions

contract Con {
  function func(uint k, uint) public pure returns(uint) {
    return k;
  }
}




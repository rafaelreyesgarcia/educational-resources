// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import 'hardhat/console.sol';

contract Arrays {
  // fixed arrays, length determined at compile time
  // can't grow or shrink in size.
  uint[3] numbers = [1, 2, 3];
  address[1] y = [0xc783df8a850f42e7F7e57013759C285caa701eB6];
  bool[4] z = [true, true, false, false];

  function modify() external {
    // won't modify the reference
    uint[3] memory memoryArray = numbers;
    memoryArray[0] = 4;

    // will modify the reference
    uint[3] storage storageArray = numbers;
    storageArray[0] = 4;
  }

  // fixed size array as calldata to an external function

  function sum(uint[5] calldata array) external pure returns(uint total) {
    for (uint i = 0; i < array.length; i++) {
      total += array[i];
    }
  }

  // mistakes

  function sum(uint[5] memory array) pure external returns(uint) {
    uint total;
    for (uint i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }

  // dynamic size arrays
  function logFriends(address[] calldata friends) external view {
    for(uint i = 0; i < friends.length; i++) {
      console.log(friends[i]);
    }
  }

  function dynamicSum(uint[] calldata x) external pure returns(uint total) {
    for (uint i = 0; i < x.length; i++) {
      total += x[i];
    }
  }
}

contract StorageArrays {
  uint[] public numbers;
  uint[] public evenNumbers;

  constructor() {
    numbers.push(3);
    numbers.push(4);
  }

  function filterEven(uint[] calldata x) external {
    for(uint i = 0; i < x.length; i++) {
      if (x[i] % 2 == 0 ) {
        evenNumbers.push(x[i]);
      }
    }
  }
}

contract MemoryArrays {
  uint x = 5;

  // size of a dynamic array is provided during initialization
  function createArray() view external {
    address[] memory addresses = new address[](x);
  }

  // filters elements in a dynamic array over the value 5
  function filter(uint[] calldata numbers) external pure returns(uint[] memory) {
    uint elements;
    for (uint i = 0; i < numbers.length; i++) {
      if(numbers[i] > 5) {
        elements++;
      }
    }

    // create a new array with the number of elements filtered above
    uint[] memory filtered = new uint[](elements);
    // keep an index for the filled positions
    uint filledIndex = 0;
    for(uint i = 0; i < numbers.length; i++) {
      if(numbers[i] > 5) {
        filtered[filledIndex] = numbers[i];
        filledIndex++;
      }
    }

    return filtered;
  }

  function filter(uint[] calldata x) external pure returns(uint[] memory) {
    uint elements;
    for (uint i = 0; i < x.length; i++) {
      if(x[i] % 2 == 0) {
        elements++;
      }
    }

    // create a new array with the number of elements filtered above
    uint[] memory filtered = new uint[](elements);
    // keep an index for the filled positions
    uint filled = 0;
    for(uint i = 0; i < x.length; i++) {
      if(x[i] % 2 == 0) {
        filtered[filled] = x[i];
        filled++;
      }
    }

    return filtered;
  }
}

contract StackClub {
  address[] public members;

  constructor() {
    members.push(msg.sender);
  }

  function addMember(address _newMember) external {
    require(isMember(msg.sender));
    members.push(_newMember);
  }

  function isMember(address x) public view returns(bool){
    for(uint i = 0; i < members.length; i++) {
      if (members[i] == x) {
        return true;
      }
    }
    return false;
  }

  function removeLastMember() external {
    require(isMember(msg.sender));
    members.pop();
  }
}
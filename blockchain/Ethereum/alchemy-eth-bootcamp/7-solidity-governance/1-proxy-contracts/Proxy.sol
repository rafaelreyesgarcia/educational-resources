pragma solitidy ^0.8.9;

import "./StorageSlot.sol";

contract Proxy {
  uint x = 0;
  // address implementation;

  // function changeImplementation(address _implementation) external {
  //   implementation = _implementation;
  // }

  function changeImplementation(address _implementation) external {
    StorageSlot.getAddressSlot(keccak256('impl')).value = _implementation;
  }

  // fallback() external {
  //   (bool success, ) = implementation.delegatecall(msg.data);
  //   require(success);
  // }

  fallback() external {
    (bool success, ) = StorageSlot.getAddressSlot(keccak256('impl')).value.delegatecall(msg.data);
    require(success);
  }
  // function changeX(uint _x) external {
  //   Logic1(implementation).changeX(_x);
  // }
}

contract Logic1 {
  uint public x = 0;

  function changeX(uint _x) external {
    x = _x;
  }
}

contract Logic2 {
  uint public x = 0;

  function changeX(uint _x) external {
    x = _x;
  }

  function tripleX() external {
    x *= 3;
  }
}


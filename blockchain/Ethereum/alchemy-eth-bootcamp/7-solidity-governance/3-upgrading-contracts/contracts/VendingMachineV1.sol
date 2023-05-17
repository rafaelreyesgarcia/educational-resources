// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';

contract VendingMachineV1 is Initializable {
  // state variables are preserved regardless of upgrading
  uint public numSodas;
  address public owner;

  function initialize(uint _numSodas) public initializer {
    numSodas = _numSodas;
    owner = msg.sender;
  }

  function purchaseSoda() public payable {
    require(msg.value >= 1000 wei, 'you must pay 1000 wei for a soda!');
    numSodas--;
  }
}
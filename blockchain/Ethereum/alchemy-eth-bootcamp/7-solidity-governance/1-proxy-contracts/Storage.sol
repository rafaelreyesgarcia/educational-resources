pragma solidity ^0.8.17;

import "./StorageSlot.sol";
import 'hardhat/console.sol';

contract Storage {
  constructor() {
    // keccak256('rafael') => 256
    StorageSlot.getUint256Slot(keccak256('rafael')).value = 256;
  }

  function check() external view {
    console.log(StorageSlot.getUint256Slot(keccak256('rafael')));
  }
}
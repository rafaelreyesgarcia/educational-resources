pragma solidity 0.8.4;

import "hardhat/console.sol";

error NotItemCreator();

contract Game {
  address itemCreator = '0xc783df8a850f42e7f7e57013759c285caa701eb6';

  // public function, yet only one whitelisted address doesn't revert the transaction.
  function createItem() public {
    if (msg.sender != itemCreator) {
      revert NotItemCreator();
    }
  }

  // logMessage function signature is decorated with a logModifier
  function logMessage() public view logModifier {
    console.log("during");
  }

  modifier logModifier {
    console.log("before");
    _; // where the body of the modified function will run.
    console.log("after");
  }
}
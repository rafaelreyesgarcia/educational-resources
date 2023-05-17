// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract VendingMachineV2 is Initializable {
  uint public numSodas;
  address public owner;
  mapping(address => uint) public sodasPurchased;

  function initialize(uint _numSodas) public initializer {
    numSodas = _numSodas;
    owner = msg.sender;
  }

  function purchaseSoda() public payable {
    require(msg.value >= 1000 wei, 'you must pay 1000 wei for a soda!');
    numSodas--;
    sodasPurchased[msg.sender] += 1;
  }

  function withdrawProfits() public onlyOwner {
    require(address(this).balance > 0, 'Profits must be greater than 0 in order to withdraw');
    (bool sent, ) = owner.call{value: address(this).balance}("");
    require(sent, 'failed to send ether');
  }

  function setNewOwner(address _newOwner) public onlyOwner {
    owner = _newOwner;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, 'only owner can call this function');
    _;
  }
}
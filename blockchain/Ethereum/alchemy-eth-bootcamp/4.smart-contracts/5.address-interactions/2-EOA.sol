pragma solidity 0.8.4;

contract SpecialNumber {
  address author1;
  address author2;

  receive() external payable {
    uint totalValue = msg.value;

    (bool success1, ) = author1.call{value: totalValue / 2}("");

    require(success1);

    (bool success2, ) = author2.call{value: totalValue / 2}("");

    require(success2)
  }
}
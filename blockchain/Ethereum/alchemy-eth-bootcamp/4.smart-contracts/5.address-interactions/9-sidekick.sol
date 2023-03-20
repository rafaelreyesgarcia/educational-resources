pragma solidity 0.8.4;

interface IHero {
  function alert() external;
}

contract sidekick {
  function sendAlert(address hero) external {
    IHero(hero).alert();
  }

  function sendAlert(address hero) external {
    bytes4 signature = bytes4(keccak256("alert()"));
    (bool success, ) = hero.call(abi.encodePacked(signature));
    require(success);
  }

  function manualSignature(address hero, uint enemies, bool armed) {
    (bool s, ) = hero.call(
      abi.encodeWithSignature("alert(uint256,bool)", enemies, armed)
    );
    require(s)
  }

  function relay(address hero, bytes memory data) external {
    (bool success, ) = hero.call(data);
    require(success);
  }
}
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Proxy {

  function proxyAttempt(address con) external {
    (bool success, ) = con.call(
      abi.encodeWithSignature("attempt()")
    );
    require(success);
  }
}
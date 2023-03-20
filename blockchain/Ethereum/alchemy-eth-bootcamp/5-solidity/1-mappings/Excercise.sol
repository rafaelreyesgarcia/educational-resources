pragma solidity 0.8.4;

contract Example {
  mapping(address => bool) public members;

  function addMember(address x) external {
    members[x] = true;
  }

  function isMember(address x) external view returns(bool) {
    return members[x];
  }

  function removeMember(address x) external {
    members[x] = false;
  }

  struct User {
    uint balance;
    bool isActive;
  }

  mapping(address => User) public users;

  function createUser() external {
    require(!users[msg.sender].isActive, "already a user.");
    User storage user = users[msg.sender];
    user.balance = 100;
    user.isActive = true;
  }

  function transfer(address recipient, uint amount) external {
    require(users[msg.sender].isActive && users[recipient].isActive);
    require(users[msg.sender].balance >= amount, 'insufficient balance');
    users[msg.sender].balance -= amount;
    users[recipient].balance += amount;
  }
  
  // nested maps

  enum ConnectionTypes {
    Unacquainted,
    Friend,
    Family
  }

  mapping(address => mapping(address => ConnectionTypes)) public connections;

  function connectWith(address other, ConnectionTypes connectionType) external {
    connections[msg.sender][other] = connectionType;
  }
}

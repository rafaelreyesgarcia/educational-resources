pragma solidity 0.8.4;

contract Mappings {
  // an address is mapped to a mapping that maps an uint to a bool
  mapping(address => mapping(uint => bool)) public votesPerProposal;

  // soda vending machine

  uint numSodas = 100;
  mapping(address => uint) public sodasPurchased;

  function purchaseSoda() public {
    require(numSodas > 1, 'sodas must be in stock!');
    sodasPurchased[msg.sender] += 1;
    numSodas--;
  }

  function numSodasPerUser(address _userAddress) public returns(uint) {
    return sodasPurchased[_userAddress];
  }

  // game

  mapping(address => uint) public score;

  function addPoint() external {
    score[msg.sender]++;
  }

  mapping(address => bool) students;

  // mapping value lookup O(1)
  function isStudent(address addr) external view returns(bool) {
    return students[addr];
  }

  function removeStudent(address addr) external {
    students[addr] = false;
  }

  // array value lookup, array iteration O(n)
  address[] studentsArray;

  function isStudent(address addr) external view returns (bool) {
    for(uint i = 0; i < students.length; i++) {
      if(students[i] == addr) {
        return true;
      }
      return false;
    }
  }

  // map structs

  struct Collectible {
    address owner;
    bool forSale;
    uint price;
  }

  // map a uint ID to a Collectibe struct
  mapping(uint => Collectible) idToCollectible;

  function purchase(uint _id) external payable {
    // find collectible by the id passed in
    Collectible storage collectible = idToCollectible[_id];
    // purchase collectible
    require(msg.value >= collectible.price);

    collectible.owner = msg.sender;

    collectible.forSale = false;
  }

  // nested mappings

  mapping(uint => mapping(address => bool)) voteToAddressChoice;

  function getVote(uint _id, address _addr) external view returns(bool) {
    return voteToAddressChoice[_id][_addr];
  }

  function registerVote(uint _id, bool _choice) external {
    voteToAddressChoice[_id][msg.sender] = _choice;
  }

  mapping(address => uint) public balanceOf;
  mapping(address => bool) public hasVoted;
  mapping(uint => bool) public isMember;
  mapping(string => uint) public userZipCode;

}
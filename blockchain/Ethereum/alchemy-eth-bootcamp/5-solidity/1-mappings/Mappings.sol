pragma solidity 0.8.4;

contract VendingMachine {
  uint numSodas = 100;
  mapping(address => uint) public sodasPurchased;

  mapping(address => uint) public balanceOf;
  mapping(address => bool) public hasVoted;
  mapping(uint => bool) public isMember;
  mapping(string => uint) public userZipCode;
  // an address is mapped to a mapping that maps an uint to a bool
  mapping(address => mapping(uint => bool)) public votesPerProposal;
  mapping(address => uint) public score;

  function numSodasPerUser(address _userAddress) public returns(uint) {
    return sodasPurchased[_userAddress];
  }

  function purchaseSoda() public {
    require(numSodas > 1, 'sodas must be in stock!');
    sodasPurchased[msg.sender] += 1;
    numSodas--;
  }

  function addPoint() external {
    score[msg.sender]++;
  }

  mapping(address => bool) students;

  // mapping value lookup
  function isStudent(address addr) external view returns(bool) {
    return students[addr];
  }

  // array value lookup, array iteration
  address[] studentsArray;

  function isStudent(address addr) external view returns (bool) {
    for(uint i = 0; i < students.length; i++) {
      if(students[i] == addr) {
        return true;
      }
      return false;
    }
  }

  function removeStudent(address addr) external {
    students[addr] = false;
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

}
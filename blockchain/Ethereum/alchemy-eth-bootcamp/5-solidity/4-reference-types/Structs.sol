pragma experimental ABIEncoderV2;
import 'hardhat/console.sol'

// abstract example

struct Account {
  uint balance;
  bool isActive;
}

contract A {
  Account owner;
  Account recipient;
}

contract B {
  mapping (address => Account) accounts;
}

// Hero example

enum Directions {
  Up, Down, Left, Right
}

struct Hero {
  Directions facing;
  uint health;
  bool inAir;
}

Hero hero = Hero(Directions.Up, 100, true);

// alternate struct initialization
// improves readability, its more verbose

Hero alternateHero = Hero({
  facing: Directions.Up,
  health: 100,
  inAir: true
});

function postHero(Hero hero) external {
  console.log(hero.health);
}

function getHero() external pure returns(Hero memory) {
  return Hero(Directions.Up, 100, true);
}

// nested structs example

struct Person {
  Sport favoriteSport;
  string name;
}

struct Sport {
  string name;
  bool isProfessional;
}

// array of structs

uint[] numbers;

struct Account {
  uint id;
  uint balance;
}
// storage dynamic array
Account[] accounts;

accounts.push(Account(0, 100));

// structs

contract Structs {
  enum Choices {
    Yes,
    No
  }

  struct Vote {
    Choices choice;
    address voter;
  }

  Vote[] public votes;

  // create a struct with default values
  Vote none = Vote({
    choice: Choices(0),
    voter: address(0)
  });

  function getVote(Choices _choice) external view returns(Vote memory) {
    return Vote({
      choice: _choice,
      voter: msg.sender
    });
    // valid as well
    // vote = Vote({
    //   _choice,
    //   msg.sender
    // })
  }

  function createVote(Choices _choice) public {
    // require(findVote(msg.sender).voter != msg.sender);
    require(!hasVoted(msg.sender))
    votes.push(Vote({
      choice: _choice,
      voter: msg.sender
    }));
  }

  function findVote(address _voter) internal view returns(Vote storage /* or memory */) {
    for(uint i = 0; i < votes.length; i++) {
      if(votes[i].voter == _voter) {
        return votes[i];
      }
    }
    return none;
  }

  function hasVoted(address _voter) public view returns(bool) {
    return findVote(_voter).voter == _voter;
  }

  function findChoice(address _voter) external view returns(Choices) {
    return findVote(voter).choice;
  }

  function changeVote(Choices _choice) external {
    // Vote storage vote = findVote(msg.sender);
    // require(vote.voter != none.voter);
    // vote.choice = _choice;
    require(hasVoted(msg.sender));
    findVote(msg.sender).choice = _choice;
  }
}

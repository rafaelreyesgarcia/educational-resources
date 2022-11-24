pragma solidity >=0.4.0 <=0.6.0;

// simple storage

contract SimpleStorage {
  uint storedData; /* state variable */
}

// updating a state variable on a contract

function update_name(string value) public {
  dapp_name = value;
}

// view function

function balanceOf(address _owner) public view returns (uint256 _balance) {
  return ownerPizzaCount[_owner];
}

// constructor functions

constructor() public {
  owner = msg.sender;
}

// built-in functions

address.send();

// writing function

// CONTRACT EXAMPLE 1

contract ExampleDapp {
  string dapp_name; /* state variable */

  constructor() public {
    dapp_name = 'my example dapp';
  }
    // called when the contract is deployed and initializes the value

  // get function
  function read_name() public view returns(string) {
    return dapp_name;
  } 
  // set function
  function update_name(string value) public {
    dapp_name = value;
  }
}

// CONTRACT EXAMPLE 2

contract HelloWorld {
  string public message;
    // state storage variable

  constructor(string memory initMessage) public {
    message = initMessage;
  }
    // accepts a string argument initMessage and sets the value of the state variable message to initMessage
  
  function update(string memory newMessage) public {
    message = newMessage;
  }
    // public function that accepts a string argument and sets it as the new value for the message state variable
}

// CONTRACT EXAMPLE 3 - TOKEN

contract Token {
  address public owner;

  mapping (addres => uint) public balances;
    // mapping is a hash table data structure
    // mapping assigns an unsigned integer (the token balance) to an address (token holder)

  event Transfer(address from, address to, uint amount);
    // allow logging of activity on the blockchain
    // clients can listen to events in order to react to contract state changes
  
  constructor() public {
    owner = msg.sender;
  }

  function mint(address receiver, uint amount) public {
    // require is a control structure used to enforce conditions
    // if a require statement evaluates to false, an exception is triggered
    // exception reverts all changes made to the state during current call

    require(msg.sender == owner, 'you are not the owner');
      // only contract owner can call this function

    require(amount < 1e60, 'maximum issuance exceeded');
      // enforces a max amount of tokens

    balances[receiver] += amount;
      // increases the balance of receiver by amount
  }

  function transfer(address receiver, uint amount) public {

    require(amount <= balances[msg.sender], 'insufficient balance');
      // sender must have enough tokens to send
    
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
      // adjust token balances of the two addresses

    emit Transfer(msg.sender, receiver, amount);
      // emits the event defined before the constructor
  }
}

// importing a module (external smart contract)
import "../Ownable.sol";

contract MyContract is Ownable {
  
  function secured() onlyOwner public {
    msg.sender.transfer(1 ether);
  }
}

// import a library
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
  constructor() ERC721("MyNFT", "MNFT") public { }
}

// intentional vulerability
// re-entrancy victim

contract Victim {
  mapping (address => uint256) public balances;

  function deposit() external payable {
    balances[msg.sender] += msg.value;
  }

  function withdraw() external {
    uint256 amount = balances[msg.sender];
    (bool success, ) = msg.sender.call.value(amount("");
    require(success);
    balances[msg.sender] = 0;
  }
}

// re-entrancy attacker

contract Attacker {
  function beginAttack() external payable {
    Victim(VICTIM_ADDRESS).deposit.value(1 ether)();
    Victim(VICTIM_ADDRESS).withdraw();
  }

  function() external payable {
    if (gasleft() > 40000) {
      Victim(VICTIM_ADDRESS).withdraw();
    }
  }
}

// solution to re-entry attack

contract NoLongerAVictim {
  function withdraw() external {
    uint256 amount = balances[msg.sender];
    balances[msg.sender] = 0;
    (bool success, ) = msg.sender.call.value(amount)("");
    require(success);
  }
}


// base
contract A {

}

// derived
contract B is A {
  
}

contract Base {
  uint public value;

  constructor (uint _value) {
    value = _value;
  }

  function increaseValue() virtual external {
    value += 10;
  }

  function modify() virtual external {
    value *= 2;
  }
}

contract Derived is Base {
  // derives functions and variables from Base
  function increaseValue() override external {
    value *= 2;
  }

  function modify() virtual override external {
    value += 20;
    super.modify(); // Base.modify() results in 60
  }
}

contract Depositable {
  modifier requiresDeposit {
    require(msg.value >= 1 ether);
  }
}

contract Escrow is Depositable {
  address owner;
  // deploying the escrow contract requires the modifier set in the base contract needing min 1 ether
  constructor() requiresDeposit {
    owner = msg.sender;
  }
}

// multiple inheritance

contract Base1 {
  uint a = 5;
}

contract Base2 {
  uint b = 10;
}

contract Derived is Base1, Base2 {
  // access to both a and b
}

contract Base {

}

contract Middle is Base {

}

contract Top is Base, Middle {
  
}
contract Ownable {
  address owner;

  constructor() {
    owner = msg.sender;
  }

  // placed on functions to make sure only the owner can execute
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

}

// inherits from Ownable

contract SomeContract is Ownable {
  uint public year = 1993;

  function changeYear(uint _year) public onlyOwner {
    year = _year;
  }
}

contract Token is Ownable {
  mapping(address => uint) balances;
}

contract someToken is Token {
  function mint(uint _amount) public onlyOwner {
    balances[msg.sender] += amount;
  }

  function foo() public pure virtual returns (uint) {
    return 10;
  }

  function overrideFoo() public pure override returns (uint) {
    returns 15;
  }

}

// multiple inheritance

contract NFT is Ownable {
  function transfer(address _recipient) virtual public onlyOwner {
    owner = recipient;
  }
}

contract TimeLockedNFT is NFT {
  uint lastTransfer;

  function transfer(address _recipient) override public onlyOnwer {
    require(lastTransfer < block.timestamp - 10 days);
    owner = _recipient;
    lastTransfer = block.timestamp;
  }
}

contract A {
  event Log(string message);

  function foo() public virtual {
    emit Log('A.foo called');
  }

  function bar() public virtual {
    emit Log('A.bar called');
  }
}

contract B is A {
    function foo() public virtual override {
        emit Log("B.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("B.bar called");
        super.bar();
    }
}

contract C is A {
    function foo() public virtual override {
        emit Log("C.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("C.bar called");
        super.bar();
    }
}

contract D is B, C {
  function foo() public override(B, C) {
    super.foo();
  }

  function bar() public override(B, C) {
    super.bar(0);
  }
}
# inheritance

contracts can inherit state variables and functions from other contracts

the keyword `is` allows contracts to inherit from other contracts. establishes a parent-child chain

inheritance allows classes to be built on top of others to define new implementation while maintaining same behavior

child classes can override methods from parent classes

`extend` in javascript

`is` in solidity

parent contract often referred as base contract

child often referred as derived

a contract derives from another contract if it inherits from it

**single inheritance** helps inheriting variables, functions modifiers and events.

**multi-level inheritance** multiple levels of parent-child chains

**hierarchical inheritance** a single contract act as base for multiple derived contracts.

derived contracts are siblings and are not interconnected as in multi-level

openzepellin `Ownable.sol` contract to understand contract access control

access control can be implemented using modifiers that will require the msg.sender to have privileges

`virtual` a function that can be overriden by a child must be declared as virtual

`override` a function to override a parent function

# 1-inherit

traditional inheritance is when one class copies functionality from another class

derived class inherits from the base class

the body of a function is copied into the derived bytecode when inherited.

# 2-constructor inheritance

if base contract has an initial value set in the constructor, an argument must be provided when declaring the derived contract to the parent contract

`contract Derived is Base(10)`

# 3-virtual and override

`virtual` allows to define a function that can be overriden using the `override` keyword

overriding function must have same visibility as virtual function

`TypeError: overriding function visibility differs`

**abstract** contracts hav evirtual functions that don't require an implementation but have to at some point be implemented by the derived contract.

abstract contracts can serve as templates.

an interface doesn't implement the functions, there are function signatures with no body

abstract contract can have functions that may be implemented.

implicitly, all interfaces are virtual.

abstract contracts must mark their methods as virtual if they want to be overriden.

contracts can inherit interfaces

interfaces can only inherit other interfaces they can't have state variables or a constructor.

when abstract contract declares virtual function without function body, the function must be implemented by a derived non-abstract contract.

an abstract contract with unimplemented functions can't be deployed.

# 4 supper call

when we want to share functionality with derived contracts in base virtual functions we can use `super`

`super` invokes the function on the base contract.

# 5 ownable

a base contract usually provides utility functions and modifiers

# multiple inheritance

a contract can inherit from multiple separated contracts by separating them with a comma after `is` keyword

the most base contract should be further to the left.

`Collectible`inherits from `Ownable` and `Transferable` (can inherit from Ownable)

error if there's wrong order

`linearization of inheritance graph impossible`

https://solidity.readthedocs.io/en/v0.7.5/contracts.html#multi-inheritance


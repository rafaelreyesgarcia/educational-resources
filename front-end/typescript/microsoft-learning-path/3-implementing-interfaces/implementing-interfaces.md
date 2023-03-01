# overview of interfaces

core principle of typescript is type checking focusing on the shape of values.

interfaces are a way of defining a `code contract` within code as well as contracts with third party code.

an interface describes an object.

names and parameterizes the object's types.

```ts
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
```

the only job of an interface is to describe a type.

it defines what the code contract requires.

after defining an interface, it can be used as a type to get type checking and intellisense benefits.

```ts
let employee: Employee = {
  firstName : "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
```

typescript has a structural type system.

if an interface and a class implement the same structure, they can be interchangeably.

reasons to use an interface
- create shorthand names for commonly used types
- consistency across a set of objects
+ describe existing javascript APIs and clarify function parameters and return types.

interfaces can also be expressed as a type alias

```ts
type Employee = {
  firstName: string;
  lastName: string;
  fullName(): string;
}
```

a type alias is a definition of a type of data.

interfaces are a way to describe data shapes (objects).

type aliases can act like interfaces.

type aliases can't be reopened to add new properties, interfaces are extendable.

can only describe a union or tuple using a type alias.

# declare and instantiate an interface

- interface keyword followed by interface name (identifier)
- PascalCase naming should not start with letter `I`
- define properties (members) of the interface and their type
- properties can be required, optional or read only

`firstName: string;` - required

`firstName?: string` - optional

`readonly firstName: string;` - read only

```ts
// declare interface
interface IceCream {
  flavor: string;
  scoops: number;
}

// implement interface
let myIceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2
}

console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + 'is too many scoops';
  } else {
    return 'your order will be ready soon!;'
  }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));
```

# extend an interface

interfaces can extend each other.

rules apply
- must implement required properties from all interfaces
- two interfaces can have the same property if the property has the exact same name and type.
- if property has same name but different type must declare a new property so resulting property is a subtype of both interfaces

# other ways to use interfaces

create indexable types

indexable types have an index signature that describes type you can use to index into the object.

describe a javascript API using an interface

interfaces allow to describe APIs and clarify function parameters and return types.

`fetch` native javascript function allows to interact with web services.

# knowledge check

1. What is the primary job of an interface?

Describe the properties and return types of an object.

An interface describes the properties and return types, while a function or class defines the implementation details.

2. How can you prevent the type system from raising an error when a property in an interface is omitted?

Make the property optional.

Optional properties may be omitted without raising an error.

3. What happens when you extend one interface with another interface?

You must implement all the required properties from all interfaces.

# additional resources

https://www.typescriptlang.org/docs/handbook/2/objects.html
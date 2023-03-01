# intro

constructors and prototypes are implementations pre ecmascript 2015 ES6.

classes are ES6 implementations

classes are syntactic sugar over existing prototype-based inheritance

classes are extended by typescript with
- type annotations for class members
- access modifiers
- ability to specify required or optional parameters

# classes in typescript

classes allow to express object-oriented patterns.

inheritance is more readable and interoperable with classes than pure prototypes

classes are a way to define the shape of an object.

classes are blueprints for  building objects.

describes properties and methods an object has

building an instance of a class (new operator) is needed before being able to access/assign properties and use its methods.

car class can be reused to create any number of instances, each with different characteristics.

classes can be extended.

classes encapsulate data for an object.

data and behavior are included in the class.

details of both can be hidden from the user.

there's no need to know how the method works in order to use it thanks to encapsulation.

class is a black box where all attributes and behaviors are only exposed through properties and methods.

class components
- **properties** (fields, data, attributes) of the object that can be set or retruned.
- **constructor** function creates and intializes an object based on the class. initializes the instance with the values passed to it as initial state.
- **accessors** are functions to `get` or `set` value of properties
- **methods** are functions that define the behavior of an object. methods can be accesible only from within the class, typically called by other class methods to perform a task.

classes can
- model data
- encapsulate functionality
- provide templates

> accessors are only used when needing access to values.

# create a class

define members
- properties
- constructor
- accessors
- methods

classes create two separate types, the instance (defines what members an instance of a class has) and the constructor (static side).

constructor initializes properties of the class
- `constructor` keyword
- parameter list defining the passed data to the new object when an instance is created.
- not required to define a parameter for every property in the class
- parameters can be required or optional, default or use the rest operator
- parameter names can be different than property names.
- property assignment - each statement assigns value of a param to the value of a prop, `this` keyword indicates accessing a member of the class.

class can only contain one constructor function. when a constructor function isn't provided, one is automatically provided

> it's a convention to name properties preppending `_` as it's a visual cue to distinguish between property declaration and parameters accessible throug the constructor.

class properties can be accessed directly `classInstance.prop` (`public`) by default

getters/setters can intercept access to a property so access is controlled with detail.

get and set blocks can be used to validate data, constrain behavior or perform data manipulation.

class methods describe the behavior the class can perform.

often, we don't want to allow direct access to a property without doing some validation or other work before getting or setting.

accessing a property through a getter or setter ensures we're not accessing the raw property directly.

a validation check is needed to make sure the constructor receives the right information

# access modifiers

class members are `public` by default.

you sometimes want to restrict access to the private variable and only allow access through an accessor.

sometimes access to methods can be restricted.

the `worker` method is only called from other method functions within the class.

visibility of a class member can be controlled with
- `public` - without access modifier, default is public
- `private` - can't be accessed from outside class
- `protected` - like private but members can also be accessed within deriving classes

properties can be `readonly`, may only be set when initialized at their declaration or in the constructor.

typescript is a structural type system.

when comparing types, if types of all members are compatible, then the types are compatible.

if one type is private or protected, the other must have a private member that originated in the same declaration.


# apply access modifiers

a static property can be a property or method shared by all instances of a class.

# extending a class using inheritance

an `ElectricCar` class uses the `extends` keyword to derive from the Car base class (superclass, parent class)

`ElectricCar` extends functionality of `Car`

inheritance benefits
- code reusability
- one base to derive multiple subclasses
- maintainable upgrades

## override method

the subclass can have a different definition for a member function of the base class.

happens when creating a function in the subclass with the same name of a parent class function.

the constructor of a subclass
- parameter list can include any of both base class and subclass properties.
- body must add `super()` to include parameters from base class.
- `super()` executes the constructor of the base class when invoked.
- `super` must appear before any reference to `this.`

# declare an interface to ensure class shape

an interface can establish a code contract that describes the required properties of an object and their types.

class declarations may reference one or more interfaces in `implements` clause to validate they provide an implementation of the interfaces.

interfaces include params of constructor not properties.

# design considerations

interfaces are weightless (Removed from the transpiled js), take up no space and have no negative impact on the execution.

typescript allows to use an interface to define a data structure without needing a class like in other languages.

```ts
interface Dog {
  id?: number;
  name: string;
  age: number;
  description: string;
}

async function loadDog(id: number): Dog {
  return await (await fetch('demoUrl')).json() as Dog;
}
```

interfaces allow to define how data is structured.

classes define methods, fields and properties.

classes provide a way to template objects.

**active record pattern** the object itself has `save` `load` and similar methods.

interfaces can be used to define any data structures without having to create a class implementation in typescript.

# knowledge check

1. How many constructor functions can you include in a class definition?

You can declare one constructor function in a class definition. If omitted, an automatic constructor will be provided for you.

2. What happens if you omit the get accessor for a class property?

You will not be able to return its value from your code.

The property becomes inaccessible if the get accessor is omitted.

3. Which access modifier should you use if you don't want a method to be accessible from code outside the class but also want to make it available inside other classes that derive from the class?

The `protected` modifier prevents the method from being visible outside of the class, while also allowing derived classes to use it.

4. When extending a class, what is the purpose of the super keyword?

Before initializing the properties in the subclass, the super keyword executes the constructor of the base class. It must appear before any instance of this.

# additional reading

https://www.typescriptlang.org/docs/handbook/classes.html


# intro

static type system enables to describe the shape of an object.

declarations of entities associate types with them.

# overview of types

types place static constraints on program entities
- functions
- variables
- classes
- properties
- namespaces

static compile-time system models the dynamic runtime of javascript.

expresses the type relationships expected to exist when a program runs.

those assumptions are then pre-validated by the compiler.

static types provide a way to document the intention of code

ecmascript 2015 variable declarations `let` and `const` allow to declare variables with block level scope and prevents declaring the same variable multiple times.

`let` declarations can be done without initialization

`const` are always intialized with a value.

`const` declarations can't be reassigned.

associate types with variables through explicit type annotations

`let myVariable: number` or `let myVariable: number = 10`

```ts
let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it
```

typescript can infer what type a variable is if its initialized to that type.

typescript can suggest methods available to a variable because of type checking.

## types and subtypes in typescript

`any` type is a single top type, all other types are subtypes of `any`.

represents any value with no constraints.

other types are categorized as
- primitive (boolean, number, string, enum, void)
- object (class, interface, array, literals)
- parameters

`void` type exist to indicate the absence of value like a function with no return value.

`null` and `undefined` are subtypes of all other types. it isn't possible to explicitly reference these types.

# primitive types

```ts
// boolean
let flag: boolean;
let yes = true;
let no = false;

// number and BigInteger
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

// strings
let s: string;
let empty = "";
let abc = 'abc';
let firstName: string = "rafael";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
```

`null` and `undefined` are useful in the context of functions.

# enums

enumerations offer an easy way to work with sets of related constants.

`enum` is a symbolic name for a set of values.

enumerations can create a set of constants.

if a procedure accepts a limited set of variables, an enumeration is ideal.

enums define a list of available options.

```ts
enum ContractStatus {
  Permanent, // Permanent = 1 to start the index at 1
  Temp,
  Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus); // 1

console.log(ContractStatus[employeeStatus]); // temp
```

# any and unknown types

when working with values that you don't know at the time you're developing, `any` and `unknown` types use type assertion and type guards to maintain control over what the code is allowed to do with the passed values.

## any type

expected when the value comes from a third-party library or user input where the value can be dynamic

```ts
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK
```

the any type opts out of type checking and doesn't force any before a call, construct or value lookup

typescript doesn't genrate a compile-time error.

any should be avoided by default, is the opposite of what typescript is intended to do.

## unknown type

similar to `any` but you can't, call, construct or access any properties of an `unknown` type

```ts
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

// access a property
console.log(randomValue.name);  // Error: Object is of type unknown
// construct an unknown type
randomValue();                  // Error: Object is of type unknown

// call methods
randomValue.toUpperCase();      // Error: Object is of type unknown
```

## type assertion

like a type cast in other languages but without any special checking or reconstructing of data.

has no runtime effect, used purely by the compiler

`as` syntax
`(randomValue as string).toUpperCase();`

angle-bracket syntax
`(<string>randomValue).toUpperCase();`

> as is the preferred way as angle-brackets in JSX can cause bugs.

```ts
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

```
the unknown type can be reassigned other types.

the if statement checks if the most recent type assigned to the variable is of string, then type assertion is used to enable calling a string method on an unknown type

type assertion assumes that we have made a manual check (like the if statement) to make sure the data type is correct.

## type guards

`typeof` and `if` statements examines the type of an expression at runtime.

conditional tests like `typeof` and `if` blocks are **type guards**

`typeof` or `instanceof` or `Array.isArray(array)`

# union and intersection types

handle situations where a type is composed of two or more types

## union types

describes a value that can be one of several types.

useful when a value is out of your control ( coming from a library, an API or user input)

the union type restricts assignment of values to specific types defined in the union.

pipe `|` is used to separate each type

```ts
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error
```

a function `add` that accepts two arguments (`x` and `y`) that can be either a number or a string.

two conditional statements that checks what type it is at runtime (type guards) that perform different actions according to the type.

## intersection types

combines two or more types to create a new type that has all the properties of the existing types.

`&` ampersand character is used to separate each type

most often used with interfaces.

```ts
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
// creating an intersection type
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
```

## literal types

concrete subtype of a collective type.

`string` `number` and `boolean`

declaring a variable using `var` or `let` tells the compiler there's a change the variable will change its contents.

literal narrowing ocurrs when you reduce the potential value a variable can have to a finite number of potential values. (a `let` variable allows an infinite number of values for a `string`. A `const` only allows one value as it can't be reassigned)

```ts
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid
```

# collection types in typescript

## arrays

arrayws can be written by defining the type of the elements followed by square brackets.

the second uses a generic `Array` type using `Array<type>` syntax

```ts
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];
```

no advantage of using one syntax over the other.

```ts
// a string and number tuple
let person1: [string, number] = ['Marcia', 35];

let person1: [string, number] = ['Marcia', 35, true]; // throws error, tuples are fixed.

let person1: [string, number] = [35, 'Marcia']; // throws error as order of values must match the order of types
```

# knowledge check

1. The boolean, number, string, and enum types are examples of which category of subtype of any?

Primitive types.

2. Which of the following types is an example of an object type?

Array.

3. What is the primary difference between the any and unknown types?

You can access the properties of an any type but not an unknown type.

4. What is the name of the feature in TypeScript that tells the compiler I know what I'm doing?

Type assertion.

5. What is a Tuple?

An array with a specific number of elements of one or more types.

# additional resources

https://www.typescriptlang.org/docs/handbook/basic-types.html

https://www.typescriptlang.org/docs/handbook/enums.html

https://www.typescriptlang.org/docs/handbook/advanced-types.html

https://www.typescriptlang.org/docs/handbook/literal-types.html

https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html









# intro

overview
- generics usecases
- generic function
- generic interface
- generic class
- generic constraints

type annotations create typed components.

generics are code templates that are defined and reused.

its a way to communicate with functions, classes or interface what type wants to be used in a call

a generic tells the component what type it should expect at the time it's called.

generic functions and classes are useful
- when working with a variety of data types
- uses this data type in several places
- enable code reusability
- reduces the need of `any` type

generics define one or more type variables to identify the type or types that will be passed to a component.

`T` is commonly used for generic

`getArray<number>` only accepts an array of number values

> passing arrays or objects infers the type of any and eliminates type checks when omitting type variable

# using methods and properties of a generic type

`extends` with `keyof` operator takes an object type and produces a string or numeric literal union of its keys

`typeof` type guard works for primitive types, for a class its `instanceof`

# excercise implement generics with interfaces and classes

generics are a way to pass types to a component.

# implement generics custom type/classes

powerful use case of generics when used with custom types and classes

generic constraints can be achieved by defining an interface then `extend` with type variable.

# knowledge check

1. When using generics, you can limit the range of types that a type variable can accept. What is this called?

A generic constraint limits the types that a type variable can accept, rather than accepting any possible type.

2. What's the best type of operation to use with a generic?

Operations that can be performed on a variety of data.

Because any type is possible, TypeScript raises errors to prevent certain operations that are not supported by all types. For this reason, it's best to use generics with operations that can work on a variety of data.

3. What's the difference between using a generic and the any type?

Using a generic provides type checking while using the `any` type does not.

# additional reading

https://www.typescriptlang.org/docs/handbook/generics.html



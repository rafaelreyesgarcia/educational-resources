# basic data structures

mutable and immutable data structures

a data structure models an object so it can be stored and organized in computer memory.

an immutable structure, doesn't change after creation.

a mutable structure facilitates operations to be performed on the contents.

operations can be updates, queries, etc.

> choosing a particular data structure has implications on a project's progress.

data structures can also be
- linear
- non linear

## linear

a linear structure relates to how the information is stored.

elements are arranged one after the other or in a sequence reflecting the order they were inserted.

linear structures
- arrays
- queues
- stacks
- lists

some languages demand only similar types of data to be stored in the same structure.

an index is a way to access elements.

accessing the index can happen with dot notation or square brackets notation.

programming languages and computers are zero-based, they start counting from 0 so the first index will be 0 not 1.

a built-in length method informs how big an array is.

```js
const array = [1, 2, 3, 4];
array.length;
```
```py
len(array)
```

arrays and lists are first class objects.

all functionality available to variables is also available to arrays and lists.

- passed as a parameter
- return as a result
- assign to a variable

when passing a list to a function, the structure is passed and not just the reference.

**memory leak**

unused memory should be deallocated.

## non-linear

- trees
- graphs

can't traverse data in one go, you can investigate certain paths.

they can include natural sorting, which makes querying for specific data very quick.

# strings

ordered sequence of characters or symbols encased in single or double quotes.

languages support **ASCII** characters as well as **unicode**.

a character occupies one byte of memory

many additional methods to represent strings.

creating, modifying, copying and assigning strings to variables is supported by all languages.

algebraic calculations are supported when processing strings.

escape flags `\` (`#, %, '`) allow inclusion of symbols in a string.

strings can represent variables by using special symbols `$` or `{}`.

**natural language processing** (NLP) deals heavily with strings.

**tokenization** is applied to strings. Converts a string into an array of smaller strings. a **delimiter** is defined to break the string into segments (elements).

tokenization on formatted data is easier (**comma separated values** CSV or **tab separated values** TSV)

processing formatted data like CSV or TSV is known as parsing.

strings can be mutable or immutable.

> primitive types in javascripts like strings are immutable

ruby and PHP allow strings to be changed after creation.

javascript, java, C#, python and go use immutable strings.

immutable strings reduce memory consumption.

a string pool represents all strings used.

immutable strings reuses memory allocation so all instances of a `string` point to one location.

immutable (reads existing memory)
mutable (creates another memory location)

using a unique set reduces the required space.

# integers

holds numeric values.

either **signed** (positive and negative numbers) or **unsigned** (positive numbers only)

represented in binary. essential representation needs 4 bytes.

## integer representation

how can binary representations of integers distinguish between positive and negative values?

an integer can't represent fractions.

a fixed number of bytes is used when representing integers.

**IEEE 754 standard** outlines common set of standards to represent all numbers

javascript and python, high-level languages encapsulates the way integers are initialized so its easier to work with them at the cost of customizing memory optimization.

## memory optimization

statically typed languages allow to customize size in memory.

`unsigned short init` will take 2 bytes.

rust enables instantiating unsigned 1-byte integers.

can hold integers from 0 - 255

`int` is a primitive but `Integer` is a wrapper class to allow access to several methods to deal with integers.

`Number` is the object wrapper in javascript.

integers are immutable so they are thread-safe.

`Integer` object takes 16 bytes of memory.

# booleans

## conditional statements

!=, ==, <=, >=, <, >

boolean expressions are often referred as conditionals.

## logical operators

!! OR
&& AND
! NOT

```
if condition_1 !! condition_2:
    doActionOne()
elif condition_1 && condition_2:
    doActionTwo()
elif !condition_1:
    doActionFour()
else:
    waitForInstruction()
```

booleans can inform which operations should run automatedly and form the backbone of circuitry diagrams.

# arrays

an array sometimes most hold the same element type like a `string` array or `int` array.

other languages allow mixed elements to be stored in an array.

an array can be an object with complex functionality or it can be treated as a storage type for primitives.

> initializing arrays can be done statically or dynamically.

in a static language, the array is kept on the stack and requires the array type to be defined.

dynamic languages offer fluidity, calling for the size to be set but the type optionally defined, these are kept on the heap.

access indices in arrays `array[0]`

attempting to access an index number greater than the length will throw an out of bounds error.

it is common to iterate over an array.

in a `for loop` the approach is the same
- size of the array is needed
- integer increases at every iteration
- for loop syntax

## arrays in memory

an item can be stored in heap or stack memory.

stack memory is created when running a function (execution environments), created for that function, and discarded after execution.

items in stack memory are only available for that function (scope, closure)

heap memory is created during the execution of instructions

memory space equal to the defined initialization size is created on the call stack. Altering an array and returning it from the stack may lead to corrupted memory as the stack is discarded after the function completes.

dynamic languages store the array in a heap so the array is unaffected after the function ends and stack is discarded.

**stacks** hold contigous memory blocks so accessing information is more manageable.

a **heap** is less organized so it takes more time to access elements.

usually, the memory is deallocated after a program processes an array.

deallocation and **garbage collection** is up to the programming language.

poor memory management can lead to **memory leaks** which may crash the application upon repeated calls.

a **shallow copy** doesn't make a copy but returns an index location. optimizes memory usage. Care should be taken to not manipulate one reference of the array as it would alter both references.

a **deep copy** will create a new instance of an array.


## joining arrays

a matrix is a two-dimensional array, can act like a table.

represents rows and columns.

`x` refers to rows, `y` to columns

`Matrix[x][y]`

# objects

an object is a structure that has state and behavior.

behavior is the ability to perform an action.

the sort method of an array produces an action on the structure.

state relates to the information about an object.

object attributes are 'the state'.

object methods are 'the behavior'.

classes are usually described as blueprints for an object.

an object is an instance of a class.

objects are greately used in OOP, where code is encapsulated into objects and objects can interact with one another.

using objects and classes means you only need to create one template (class) for multiple object instances.

attributes are considered instance variables that relate to the state of a specific object instance.

the instance of a class can be modified through the constructor or an internal method of an object.

> methods used to change attribute instances are called getters and setters.

inheritance allows to reuse code found in parent classes so parent methods can be inherited but the children classes can have different behavior.

# knowledge check: basic data structures

1. What does it mean to say a Data Structure is a first-class object?

This means that a data structure can be passed to a function, returned as a result and generally treated like any other variable.

2. What does it mean to parse a string?

To remove items from a string not based on a given format.

3. How many bytes does it normally take to represent a standard int?

4

4. A Boolean answer is one that will be either true or false?

true

5. Is it possible to copy an array?

Yes, but only through making a deep-copy.

While one can make a shallow copy of an array, the actual array itself is not copied. Making a deep copy creates a new instance of an array with the same values but that exists in its own space in memory.





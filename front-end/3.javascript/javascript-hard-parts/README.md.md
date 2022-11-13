# **javascript hard parts**

## **software engineer skills**

- analytical problem solving  
figure out a solution based in core/fundamental/abstract knowledge not recipes (instructions, presets, default, etc)

- technical communication  
communicating effectively about technical concepts
  
- non-technical communication
  
- engineering approach

- javascript and programming experience

### **pair programming**
effective way to grow as a software engineer

***issues***  

- researcher   
avoids corner cases by deep researching without practice  
- stackoverflower   
uses code snippets to fix issues without knowing how they work

### solutions  
- tackle blocks with a partner
- stay focused on the problem
- refine technical communication
- collaborate to solve a problem

## **<center>PRINCIPLES OF JS</center>**

### **function**  
code we store(save/define) and can later use (call/invoke/execute/run).

functions can be local execution contexts.

parameters are identifiers for input data a function will receive.  
input data we pass to a function become arguments.

an invokation evaluates the arguments according to the declared body block.

a function can return a value after evaluation (looks up what value is stored in the idenfier and outputs the value.

if no return statement is found, the value the function returns is undefined.

side effects can ocurr in a function regardless of returning a value or undefined (console.log or any calculation computation).

### **execution context (global/local(block))**  

created to run the code of a function 

global execution context  
local/block execution context(s)

***thread of execution***   
js goes through the code ibe-by-line  
parsing compiling stage

when parsing, js doesn't know the value of a function call, it's there but remains uninitialized (in contrast to undefined not even being there).

we bundle the result of this thread of execution, and then we store it in memory for use during runtime part.

***memory (storage)***

saves data in the computer's memory (area to store data)  
data types are bound to their identifiers.  
function are bound to their identifiers.  

js (runtime environment) doesn't store actions (calls).

calls are dynamic, derived from a context (who/where/when/how). 

js stores identifiers of data (values), data can be of different types.  

if an identifier(variable) stores the return value of a function call, it creates an execution environment until a value is returned.

**local memory**  
data that's stored only for an execution context in particular.
    
the execution context is defined as global, local/function and eval (text within the eval gets executed).

the function declaration sets the local execution context.

when a function is called, a new execution context is created and pushed on top of the execution (call) stack.

### **execution context phases**

***creation***  
when the function is called before any code is run within.

creates variable object, the scope chain and defines this.

the argument object contains all objects passed in a function call.

functions are defined.

lexically declared variables stay uninitialised.

ReferenceError is thrown when access attempt.

it will only get initialized when let/const statement evaluates, before(above) this is temporal dead zone.

***execution***   
variables are defined in execution.

### **call stack**

js way of keeping track of what function is currently running (as js runtime environment is single threaded, one task at a time).

a way to define where the thread of execution is.

***call stack process***  
run a function, push it to call stack.  
finish running the function (a value is returned), pop it from the call stack.  
whatever is top of the call stack, is the current thread of execution.  
    
a stack is a traditional data structure in cs.

the global execution context is always present at the bottom of the stack .

***synchronous behavior***  
one global context, many functional/local contexts

## **<center>CALLBACKS & HIGHER ORDER FUNCTIONS</center>**

misunderstood concept in javascript.

enables powerful functions like:  
map, filter, reduce
  
higher order function code is more declarative (etailed) and readable.

the function purpose is:   
to create reusable code   
write code once, and use multiple times with different values.
  
### generalized functions

parameters (placeholders) meant we don't need to decide what data to run behavior on until we invoke the function

an argument (value) is provided when the function runs
  
### higher order functions  

leaving some of the functionality (behavior) to be determined when the function executes.
  
### global environment record

consists of declarative and object environment record

object environment contains var declarations and globals the browser provides (the global object).

declarative environment contains variable (let, const, class) declarations.
  
### functions are first-class objects (inherit from objects)

- can be assigned to variables and properties of other objects
- can be passed as arguments into functions
- can be returned as values from functions
  
### higher order function
outer function that takes in a function as parameter or returns a function.

### callback function

the function that we inserted as parameter in a higher order function.
  
### arrow functions

shorthand way to save functions.  
remove parentheses if only one parameter is accepted.  
remove curly braces and explicit return if the body is one-line.  

can be stored(bound) to an identifier the same way that the keyword function stores a function body in an identifier.

are less declarative, shorter to write.

behave the same at parsing than declarations, behave different at execution.
  
### anonymous and arrow functions
    
improve immediate legibility (write less code).  
syntactic sugar.  
understand how they work under the hood is crucial to avoid confusion.  

## **<center>CLOSURE (SCOPE AND EXECUTION CONTEXT)</center>**

enables powerful functions like once and memoize.

***once***   
function can turn other functions that can only be run once.

***memoize***  
a go to practice to code optimization.  
prevents repeat tasks if we have done them before
    
many javascript design patterns including the module pattern use closure.

build iterators, handle partial application and maintain state in an asynchronous world.

### **functions with memories**

when a function is called/ran/invoked, local memory/variable environment/state is created for that function's execution context.

when the function finishes executing, the local memory is deleted except the returned value.

what if the function could store local memory? this would create an associated cache/persistent memory to the function definition.

this can be done by returning a function from the invocation of another function.

the value of a function call is the function definition, that will evaluate variably, dynamically according to the execution context at runtime.

saving/declaring/storing/assigning inside the execution context of another function (Saving it in its local memory/variable environment/state).

where you define a function determines what data it has access when you call it.

the backpack (as informally referred to), is the attached variable environment/state/local memory of the execution context where the function was defined.

backpack is the persistent memory/state of a function definition.

***official name of backpack?***  

- closed over variable environment
- persistant lexical scope referenced data
- coloquial term is closure
- closure is the result of javascript being a lexical scoped language

### **scope**

the rules of what data is available at execution at any given line in programming languages. 

***lexical or statical scope rule***  

wherever you save a function, determines for the rest of the life of that function, what data the function has access to when it runs.

### **[[scope]]**

hidden property that links to the variable environment where all the data a function definiton has access to is stored into.

created in a function definition

the only way to access it is by declaring a function definition that can be returned and then called in another execution context.

if a counter is defined in the local memory of the execution context where a function is defined.  
then an if statement can check if the counter is more than 1, the function can't run again (once pattern)

getters and setters work on this premise  

`get` (read a value from [[scope]])  
`set` (write a value from [[scope]] through a function call passing a new value as argument)
  
### **memory leak**

when a value is stored in a memory area that we can no longer access to.

if a local memory/variable environment stores a variable that is not referenced by a function definition created in that execution context, the variable is not carried over.

***how to return multiple functions?***  

as an array of functions or an object with methods(functions). All would have a reference to the same backpack/closure (persistent lexical scope referenced data)
  
closure gives our functions persistent memories and entirely new toolkit for writing professional code.

helper functions  
- once 
- memoize  
giving a function a persistent memory of its previous input and output combinations

### **iterators and generators**

use lexical scoping and closure to achieve contemporary patterns for handling data.

for loops need an index to do a value look up on an array.

a function that in each call, returns each element of the array, in order for example, use the [[scope]] hidden property too keep track of each iteration data.

a generator lets you pause a function and come back later, because it stores all that data in PLSRD (backpack).

### *module pattern*

preserve state for the life of an application without polluting global namespace.

PLSRD allows to have persistent state, protect data and provide an interface to access the data in just a certain way, getter/setter type.

### **asynchronous javascript**

callbacks and promises rely on closure to persist state in an asynchronous environments  

## **<center>ASYNCHRONOUS JAVASCRIPT AND THE EVENT LOOP</center>**

### **asynchronicity**  
backbone of modern web development  

javascript is single threaded, one command runs at a time  
execution is synchronously, each line runs in the order it appears  

core javascript engine has 3 main parts  
- thread of execution
- memory / variable environment
- call stack

***new components***
  
- web browser APIs / node background APIs
- promises
- event loop, callback / task queue and microtask queue 

***web browsers have***:  
- web sockets  
- network requests  
(fetch / xhr)   
- developer tools  
(console) 
- rendering
- html DOM  
(document object is a command that uses the DOM features of the browser )
- timer   
(setTimeout is an API that uses the built-in browser timer to delay the execution of a function)

setTimeout doesn't create an execution context, is just a command for the browser to execute a callback after a given delay

callback queue is different than the call stack.  
if there's anything in the callstack and the global execution context, callback queue can't run.  
this gives certainty not of the time of execution but the order.  

the event loop task is to constantly check if the callstack and global execution context are empty to then run the callback queue.

**ES5 web browser APIs with callback functions**  

- response data is only available in the callback function
- very explicit

### **promises**

### **the event loop**

### **microtask queue**

## **<center>CLASSES AND PROTOTYPES (OOP)</center>**



  
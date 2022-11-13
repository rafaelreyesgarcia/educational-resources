// CALLBACKS & HIGHER ORDER FUNCTIONS
// normal function
function copyArrayMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayMultiplyBy2(myArray);

/* 
javascript stores data in global memory to create global scope to use during execution
SCRIPT STARTS
parses...
executes...

  global execution context 

  global memory
    stores a function declaration to the identifier copyArrayMultilyBy2
    assigns the value of [1, 2, 3] to the constant variable(identifier) myArray
    assigns a function call to the constant variable result uninitialized, remains uninitialized

    the function call copyArrayMultiply(myArray) creates a new execution context added to the call stack
      local memory
        array parameter is stored as [1, 2, 3] grabs it from global memory identifier myArray
        assigns an empty array(array literal) to the variable output

      for loop starts...
        performs tasks on array (value lookups) according to the for loop
        performs tasks on output empty array pushing the result of multiplying array[i] to 2 each iteration
      for loop finishes manipulating the output array and transforming it to [2, 4, 6]

      the value of output is returned [2, 4, 6] and the execution context finishes, is removed from the call stack
    
    the identifier result is assigned the returned value from the copyArrayMultiplyArray(myArray)

SCRIPT FINISHES
*/

// higher order function

function copyArrayManipulate(array, instructions) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }

  return output;
}
// function declaration version
function multiplyBy2(input) { return input * 2};

const manipulatedArray = copyArrayManipulate([1, 2, 3], multiplyBy2);
// const manipulatedArray = copyArrayManipulate([1, 2, 3], input => input * 2);
/* 
parsing...
  analyzing and converting a script into a format the runtime environment can run
executes...

  global execution context 
  
    global memory
      function definition(declaration) is stored in memory with an identifier(variable/name) of copyArrayManipulate.
      function definition is stored in memory with label of multiplyBy2
      function call is stored in manipulatedArray, which stays uninitialised until the call returns a value
  
    the function call to copyArrayManipulate stored in the label manipulatedArray creates a new execution context
    new execution context stores arguments in local memory
    new execution context is pushed to the call stack above global

      local memory
        parameters are stored
        array identifier is created and assigned to [1, 2, 3]
        instructions identifier is created and assigned the function definition of multiplyBy2

      body declarations are stored
      output identifier is declared and assigned an array literal []
  
      for loop starts... 
        will push i in each iteration to output
        for loops get their own protected namespace to operate, but is not an execution context
        every push creates a new execution context as it contains a function call (instructions as multiplyBy2)

        new execution context multiplyBy2(1) pushed to the call stack (this happens i iterations of the loop)

          local memory
            parameters are stored
            input parameter is assigned the value of each array iteration, the first iteration is 1

          the return statement is evaluated the first iteration (array[0]) as 1 * 2 = 2
          the execution context ends by returning the value 2
          multiplyBy2(1) is removed from the call stack

          the output identifier now stores [2]

        first iteration of the loop ENDS...
        loop iterates until the output identifier stores [2, 4, 6]
      for loop ends...

      the function call copyArrayManipulate returns the value stored in the identifier output after the tasks (manipulations) are completed [2, 4, 6]
      the copyArrayManipulate execution environment stops pops from the call stack
  
    the variable manipulatedArray is assigned the returned value of the copyArrayManipulate call [2, 4, 6]
  
  global execution context finishes...
SCRIPT ENDS.
*/

/* 
declaration
function multiplyBy2(input) {return input * 2}
const multiplyBy2 = (input) => {return input * 2}
const multiplyBy2 = (input) => input * 2
*/
// arrow function version
const multiplyBy2Arrow = input => input * 2;

//CLOSURE (SCOPE AND EXECUTION CONTEXT)

// return a function from another function

function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();
const someResult = generatedFunc(3);

/* 
SCRIPT STARTS
parses...
executes..

  Global execution context 

    global memory
      store a function declaration in an identifier(label) createFunction
      define the const generatedFunc uninitialized as assigning it a createFunction() call will be done at runtime
      define the const someResult uninitialized as assigning it a generatedFunc(3) call passing an argument of 3 will be done at runtime
  
    a new execution context is created in generatedFunc identifier, pushed to the call stack
    a returned value will be assigned to the identifier generatedFunc
    new execution context
     
      local memory
        store a function declaration in an identifier multiplyBy2
      
      returns the value of a function definition found in multiplyBy2 identifier
      execution context ends, is removed from the stack
  
    the returned value assigned to the identifier generatedFunc was assigned by calling createFunction, which in turned, returned the function declaration that was saved in generatedFunc
    they have nothing to do with each other from that point on, generatedFunc is its own copy of the definition stored inside the createFunction body

    then assigns the value of the identifier someResult as a function call to generatedFunc(3) with an argument of 3
    this creates a new execution context
    the returned value from the call will be assigned to the identifier someResult
    new execution context

      local memory
        argument value of 3 is stored in the placeholder(parameter) num

      completes the task of multiplying num * 2 = 6
      returns value 6
      execution context of generatedFunc(3) is finished, popped from the call stack
  
    the returned value of 6 is assigned to the identifier someResult
  global execution context ends...
SCRIPT FINISHES
*/

// calling a function in the same function call as it was defined

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

outer();

/* 
SCRIPT STARTS
parses...
executes...
  global execution context

    global memory
    the variable(identifier) outer is defined as a function declaration

  the outer() call creates a new executing context
    local memory
      store the variable counter with a value of 0
      store function definition in an identifier incrementCounter
    
    calls incrementCounter and creates a new execution context, adds it to the call stack

      local memory
        nothing is stored
      
      counter++ is a unary operator in the postfix position to increment the variable counter by 1
      the variable counter is not stored in the local memory of the current execution context
      counter is stored in the local memory/variable enviroment/state of the outer() execution context
      the task then increments counter variable by 1 found in the execution context down the call stack, in this case outer()

      the call is completed, finishes and removes it from the stack
    
    the call finishes, is removed from the stack
  the global execution context finishes...
SCRIPT ENDS.
*/

function anotherOuter() {
  let counter = 0;
  function incrementCounter() {counter++;}
  return incrementCounter;
}

const myNewFunction = anotherOuter();
myNewFunction();
myNewFunction();

const anotherFunction = anotherOuter();
anotherFunction();
anotherFunction();

/* 
SCRIPT STARTS...
parses...
executes...
  global execution context

    global memory
      declares the function outer
      declares myNewFunction uninitialized as it wants to store a function call
      declares anotherFunction uninitialized as its storing a function call, not evaluated until runtime
    
    executes assigning an outer() function call to myNewFunction

    new execution context outer()
      local memory
        declares a let variable counter with a value of 0
        declares a function definition for the identifier incrementCounter
      
      returns the definition stored in the identifier incrementCounter
      when a function definition is returned, it retains the local memory (variable environment/state) of the execution context where it was defined
      local execution context finishes, is removed from the call stack
    
    the variable myNewFunction is assigned the returned value of outer() call, which is a function definition

    
    mynewFunction is called, creates a new execution context
    new execution context myNewFunction()

      local memory
        none
      it needs to increment counter by 1
      looks up in local memory, counter isn't declared
      before moving to global, it checks the [[scope]] hidden property of the function declaration to see if the variable is stored there
      the counter variable is declared in the variable environment where the function definition was created
      so it checks that and finds counter is 0, increments it by 1

      local execution context finishes, is removed from the call stack
    
    myNewFunction is called again, creating a new execution context
    new execution context myNewFunction()

      local memory
        none
      it increments the counter variable found in the variable environment attached to the function definition stored in the identifier myNewFunction
      checks counter is 1, increments it by 1, counter is then assigned the result of that expression: 2

      local execution context finishes, is removed from the call stack
    
    execution calls outer function to assign the returned value to anotherFunction
    new execution context outer()

      local memory 
        counter variable is initialized with a value of 0
        function declaration is stored in identifier incrementCounter
      
      executes the return statement, returning the function definition stored in incrementCounter
      returning the function definition attaches/links [[scope]] hidden property to functions created within this execution context (outer)
      closure is new each for each execution context where the defintion is stored and returned
      the function completes, execution context is removed from the call stack

    anotherFunction is called, creating a new execution context
    new execution context anotherFunction()

      local memory
        none
      executes body, which is the expression counter++
      counter is not found in local memory of the current call, so it goes to the execution context where the call ocurred, this case global
      before global, [[scope]] is checked, as it holds a reference to the data that was stored at the moment of defining anotherFunction, in this case, the returned function definition from calling outer function
      the variable counter is found in closure/closed over variable environment as 0
      the command changes counter to hold the value of 1

      the execution context finishes, is removed from the call stack
    
    anotherFunction is called a second time, creating a new execution context
    new execution context anotherFunciton()

      local memory
        none
      counter++, counter is found in closure, persistent lexical scope referenced data
      variable holds the value of 2 now

      execution context finishes, is removed from call stack

  global execution context is finished
SCRIPT ENDS.
*/


// ASYNCHRONOUS JAVASCRIPT AND THE EVENT LOOP

function printHello() {
  console.log('hello');
}

setTimeout(printHello, 1000);
/* 
setTimeout is hit at 0ms 
the instructions are sent to the browser to execute the callback after 1000ms
*/

setTimeout(printHello, 0);
/* 
setTimeout is hit at 0ms 
the instructions are sent to execute callback in 0ms
*/ 

console.log('me first!'); 
/* 
execution hits this line and prints the string
0ms passes and setTimeout's callback executes
1000mx passes and setTimeout's callback executes

*/

// CLASSES AND PROTOTYPES (OOP)
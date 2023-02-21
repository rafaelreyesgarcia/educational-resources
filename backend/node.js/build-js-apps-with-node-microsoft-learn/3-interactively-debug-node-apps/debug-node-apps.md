# what's a debugger?

tool to observe and control execution flow of a program.

debugger can host the program in its own execution process or run as a separate process that attaches to the program

main benefit of a debugger is to follow the program execution line by line to identify where the bug is.

main features
- control program execution
- observe program's state

# debug with node.js built-in debugger

debugging process
1. identify bug
2. find where the bug is
3. analyze why the bug occurs
4. fix the bug
5. validate fix

## breakpoints

a breakpoint allows to break program execution and pause at a given point in the code.

`debugger` will force any debugger to pause at the line where the keyword is used.

## node inspect mode

node doesn't allow by default to debug a running program because of security issues (malicious actor injecting code in the node process)

`--inspect` flag allows the node process to listen for a debugger client that attaches itself to the process.

default, the process will listen on host 127.0.0.1 on port 9229

define your own port and host
`--inspect=<HOST>:<PORT>`

> don't bind the port to a public IP address or 0.0.0.0

`--inspect-brk` breaks code execution before the start of the code so any debugger clients can connect to the process.

## built-in debugger

`node inspect <script>.js`

commands
- `cont` or `c` continue until next breakpoint or end of program
- `next` or `n` executes next line of code
- `step` or `s` same as next, but if next line of code is a function call it goes into the first line of the function's body.
- `out` or `o` step out, if current execution context is inside a function, finish executing the function and jump out to where the function was called.
- `restart` `r` restarts program

set or clear breakpoints
- `setBreakpoint()` `sb()` add a breakpoint on the current line
- `setBreakpoint(<N>)` or `sb(<N>)` add a breakpoint on line number N
- `clearBreakpoint('script.js', <N>)` `cb('script.js', <N>)`

current execution point
- `list(<N>)`
- `exec <EXPR>` evaluate an expression within the current execution context `exec i` would get the value of the variable `i`

# exercise - using node built-in debugger

## prepare environment

fibonacci sequence

```sh
0, 1, 1, 2, 3, 5, 8, 13, 21...

# prepare node environment
source <(curl -Ls https://aka.ms/install-node-lts)

# create a js file for the fibonacci sequence
code fibonacci.js

# run the program
node fibonacci.js
```

```js
// fibonacci sequence
function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;

  for (let i = 2; i < n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return n === 0 ? n1 : n2;
}

const result = fibonacci(5);
console.log(result);
```

## start built-in debugger

```sh
# enable debugger

node inspect fibonacci.js

exec n
exec n1
exec n2
exec sum
exec i

sb()

c

exec [i, sum]
```

# debug with visual studio 

activate a debugger
- with a .js file open in the editor window. **run and debug** -> **node**

- `node script.js`

- create a `launch.json` file to customize run configuration.

add breakpoints on the editor window, red circles

## stack trace

the stack trace gives the name and origin of every function that was called before an exception

group of lines under an error message

visual studio debugger panels
- call stack
- breakpoints

controls
- continue or pause execution
- step over (like next in built-in debugger)
- step into (like step command)
- step out (same as out)
- restart
- stop

`ctrl+shift+y` to use the debug console

logpoints are an alternative to follow the execution of programs.

logpoints are better than printing console.logs in the actual source code as logpoints

to pause a program where an exception is thrown can be done by checking the box for uncaught exceptions in the debugger

# knowledge check

1. How do you run Node.js with inspect mode enabled?
`node --inspect myscript.js`

2. How can you make a debugger pause the execution of your program on a specific line of code?
By setting a breakpoint in your code

3. What's the preferred way to print information in the console during debugging?

A logpoint allows you to display information in the console while debugging, without altering your code.

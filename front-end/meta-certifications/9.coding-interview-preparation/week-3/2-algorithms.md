# divide and conquer

recursion and breaking down problems.

two steps (divide, conquer) with an optional third

divide
- input is split into smaller segments and processed individually

conquer
- every task in a given segment is solved.

optional
- combining all solved segments

divide and conquer

```
[38, 27, 43, 3, 9, 82, 10]

list is split in two halves, then halved and so on until there is only one element remaining (can't half anymore)

[38, 27, 43, 3] [9, 82, 10]
[38, 27] [43, 3] [9, 82] [10]
[38] [27] [43] [3] [9] [82] [10]

then the process reverses and each list is sorted when joining

[27, 38] [3, 43] [9, 82] [10]
[3, 27, 38, 43] [9, 10, 82]
[3, 9, 10, 27, 38, 43, 82]
```

the core concept is that tasks can be divided into smaller tasks to process them easier

a problem shared is a problem halved

**parallelization**

different threads or computers working on the same problem at the same time so its quick.

**memory management**

# recursion

loops are fundamental in any language.

loops allow to repeat actions until a desired output.

recursion is al alternative to a loop.

recursion happens when a function calls itself

> recursion happens when a function calls itself with a smaller instance of a problem until some exit condition is met.

requirements for recursion
- base case
- diminishing structure
- recursive call

challenge: find the exponent of a number

the base case ensures the function won't call itself indefinitely. It sets the condition to stop calling itself

```sh
exponent(x, n)
  if n === 0:
    return 1
  else 
    return (x * exponent(x, n - 1))
```

the base case is if `n === 0`

the else statement calls the function again with a reduced structure.

the goal is to multiply x by n to find total number of potential states for the binar number.

reducing input value (diminishing structure) is as important as the base case so the algorithm reaches the base case

calling itself creates a new instance on the call stack.

this increases computational costs

computation from each result is retained in the call stack. useful when traversing a graph for example.

a binary search accepts an argument of a list and a target value.

pivot point is checked to determine what half to start with.

processs is repeated until target element is found or not found.

input would be a list and a target element

recursion would call itself until target is reached.

readability improves with recursion.

recursive solutions can reduce the amount of code

easier to read than iterative solutions

# dynamic programming

memorization and dynamic programming.

dynamic programming solves problems by breaking them into smaller problems.

solutions are stored in a data structure to use later.

if subproblems have to be computed again, you can lookup, search the answer in constant time `O(1)`


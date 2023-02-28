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

**memoization** is a technique of solving smaller problems and storing the solutions in a data structure for future lookups.

divide and conquer is dynamic programming as it breaks a problem into a smaller set of subtasks to solve.

recursion is a subet of the divide and conquer approach.

recursion is the practice of coding a solution that avoids running loops by calling itself until a base case is met.

dynamic programming is an extension to divide and conquer in addition to keeping a record of the results.

2 to the power of 6 = 2 ^ 6 = 64 = 2 * 2 * 2 * 2 * 2 * 2

(2 * 2 * 2) * (2 * 2 * 2) = 2 ^ 64

8 * 8 = 64

dynamic programming approach is suitable to solve problems related to
- combination
- optimization

knapsack problem

for a trip, you can fill a knapsack with items.

each time has a weight and a value

- torch = 1kg/1
- water = 2kg/2
- tent = 3kg/3

add up items that contain a given value

weight carriable will change

this problem is applied to resource allocation to manage CPU power and x tasks to run.

Which of the steps are included in the dynamic programming process?

Describe the optimum outcome.

Break the problem into smaller steps.

# greedy algorithms

> the simplest solution is almost always the best one

simplicity is better than complexity

alternative approach to dynamic programming.

immediate solutions favors local optimizations over more holistic global approach.

dynamic programming finds global optimal solution so each sub-task is solved and best subset is selected and implemented.

a greedy approach looks at the list of solutions and implement a local optimization.

the most rewarding solution is chosen.

in a graph example, there's nodes that connect to another by a weighted path.

the weight reflects the cost that would be incurred by selecting a path.

a greedy approach would involve selecting the shortest running program, and repeat this.

this reduces the overhead of calculating the most efficient subset of items but might not lead to a globally optimized solution.

a dynamic approach involves creating a table, calculating each potential node from `start`, then it would introduce the next set of nodes and calculate the accumulated cost.

using memoization allows to use computed calculations

# knowledge check: working with algorithms

1. What is  memoization?

It is a process of retaining the results from a computation so that they can be reused rather than recalculating a result.

It is the practice of retaining results to speed up subsequent computations.

2. The practice of breaking a problem into a set of overlapping subproblems is referred to as:

Dynamic programming

This is a practice that employs a divide and conquer approach to breaking problems down. When an overlapping pattern has been identified, this approach further utilizes memoization to compute solutions more quickly.

3. Quicksort is an example of divide and conquer?

True

The array is repeatedly broken into smaller components until the data is sorted.

4. A bank robber has entered a bank vault and sees 3 stacks of precious bars:  Gold, silver and platinum. The gold weighs 6kg and is valued at 60 dollars. The silver weighs 1 kg and is valued at 5 dollars. And the platinum weighs 10kg and is valued at 110 dollars. The robber can only carry 38kg.  What is the optimal combination of items to take? Your solution is to fill the bag with as many platinum bars as possible before moving to the gold and then the silver. What type of approach best describes this solution?

Greedy approach

5. Why is a base case crucial when designing recursive solutions?

Without it the function would go on forever.

The base case is the termination condition that ends the iterative nature of the function.

# module quiz: introduction to algorithms

1. Insertion sort is an example of divide and conquer?

false

Insertion sort processes each element in relation to its surrounding elements until the data is eventually sorted.

2. Given an array of 6 numbers [6,8,19,48,9,90] and applying insertion sort, how many swaps must occur before the array is sorted?

2

3. What time complexity is required to do a linear search?

O(n)

A linear search requires that you do a search of every item. So it will take n (the number of items) time to search.

4. Why do we need Big-O notation to evaluate our programs?

Because measuring time is relative to a person’s computer, so a relative metric is required.

5. What is parallelization?

It is about running code at the same time in threads or on separate computers.

6. Why would you decide to use recursion?

It lends itself well to a divide and conquer approach.

7. Why does Memoization work well with dynamic programming?


It requires less compiling because it stores previous results, reducing the load on the CPU.

Dynamic programming utilizes memoization because it stores the results of computations, meaning the computations don’t have to be repeated.

8. How are the principles of dynamic programming and greedy algorithms at odds with one another?

The principle of dynamic programming is to exhaustively compute the best solution, while a greedy approach will favor take the immediate best option.

With dynamic programming, you can find the most best solution, whereas greedy algorithms have a specific process.

9. Why is a binary search conducted in O(log n) time?

Regardless of the size of the input, at every step the number of calculations is halved.

Log n means that it is not instantaneous access but it rapidly reduces the lookup space.





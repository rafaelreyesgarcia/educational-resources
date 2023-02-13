# binary

positional encoding can turn a limited set of numbers into an infinity size representation of values.

base 10 is a traditional way to count numbers.

10 different numbers to use before having to add another digit and reuse them.

**positional notation**

use of the position of the number to denote a progressive increase

binary works using positional notation approach.

base 2 means that values can only be represented by two digits 0 and 1.

computers stoer data as bytes. each byte is made up of eight bits that can be 0 or 1.

1. start counting with 0
2. then add 1
3. to count 2, start at 0, but add 1 on the left 10
4. 3 would fill all the 1s 11
5. after all numbers are 1, start at 0, and add 1 to the left 100

0 - 0
1 - 1
2 - 10
3 - 11
4 - 100
5 - 101
6 - 110
7 - 111

8 - 1000
9 - 1001
10 - 1010
11 - 1011
12 - 1100
13 - 1101
14 - 1110
15 - 1111

16 - 10000
17 - 10001
18 - 10010
19 - 10011
20 - 10100
21 - 10101
22 - 10110
23 - 10111
24 - 11000
25 - 11001
26 - 11010
27 - 11011
28 - 11100
29 - 11101
30 - 11110
31 - 11111

32 - 100000

binary is efficient to translate electricity into computer code

signal == 1

no signal == 0

binary system allows information, transportation and storage

**ASCII** american standard code for information interexchange

a map of binary to character encoding. There's a binary number reserved for each digit and character as well as for a number of special characters (question marks, brackets, full stop, space bar, etc)

how many different values can be represented in each byte?

2 ^ 3

a lock with 4 digits each can only be 1 or 0
2 x 2 x 2 x 2 = 16 combinations

2 x 2 x 2 x 2 x 2 = 32 combinations

a byte is made up of eight bits

2 ** 8 = 256 combinations

# working in binary

## boolean logic

boolean function maps two inputs to a value.

inputs limited to two states.

fundamental building blocks for digital logic circuits is the gate.

a gate is an electronic circuit that generates a boolean output from its inputs.

# memory

series of memory blocks that contain information and instructions on how to process the information

memory capacity refers to the number of bytes a computer can hold.

different types of memory to be considered
- cache memory
- main memory
- secondary memory

## the role of the CPU

a computer functions around the CPU.

> CPU can work faster than information can be transferred to it.

a CPU can work on different tasks simultaneously

switchin between tasks allows the information to be transferred into the cache for processing and the results to be stored

all information and instructions exist as bytes that are determined by a small electrical current.

the proximity of a memory cell to the CPU can reduce the time it takes to load information.

the transfer rate
- speed at which a computer can transfer memory into the cache for processing

## cache memory

most expensive lives close to CPU

storing recently accessed information in the cache can improve the effectiveness of a system.

the most readily required information is in zone 1, and subsequent zones are of lesser importance

## main memory

- read access memory (RAM)
- read only memory (ROM)

volatile memory stores information actively

non-volatile information is retained in case the power is cut.

ROM is raed only, meaning the info can't be overwritten.

ROM is busiest when the computer starts. Can't be modified.

RAM holds the current data and instructions in use

> RAM determines the speed of a computer because of the transfer rate

large amounts of RAM means the system doesn't need to transfer information constantly, instead it can hold and run a number of applications at once using RAM.

there's a number of algorithms for reading and storing memory addresses.

## secondary memory

relates to external memory that can be plugged in externally and used to increase storage capacity of a system.

secondary memory access is slower and requires data and instructions to be transferred to RAM.

secondary memory
- cloud
- external hard drives
- memory sticks

# defining solutions

first step to solve a problem is to articulate it.

achive A with tools T given constraints C.

# time complexity

the time taken to complete a task.

an application must return information within an acceptable time frame.

big-o notation is a metric to determine algorithms efficiency.

big-o notation gives an estimation how long it takes code to run on different inputs.

- O(1)
- O(log log n)
- O(log n)
- O(n)
- O(nlog n)
- O(n2)
- O(n3)
- O(2n)

## constant time O(1)

the fastest algorithm makes use of a constant time where no matter what the inputs are, it will only take 1 computation O(1)

- printing the first item of an array is constant time
- printing an array at position n is constant time, it doesn't matter how big n is, the cost to compute will always be one.

> the complexity is n

## O (log n) logarithmic search.

it increases as new inputs are added, but new inputs only increase marginally.

a binary search like guessing a number in 100
- split guessing in two, above or below 50.
- then split in two again.
- repeat until answer is found

it won't take 100 times to guess the number, it can take around six or seven guesses.

## O(n) linear time

- searching the value in an array of n items is linear time O (n), the larger the array, the longer it takes to search, speed depends on the size of the data being processed

## O(n^2) quadratic complexity

the work is doubled for every element in the array.

nested loops
- an array of arrays, first loop equals number of elements inputted (n)
- second loop would also look at the number of input elements.

- best case - constant
- middle case - log
- worse - linear
- unacceptable - quadratic

# working with time complexity

evaluating performance ensures the code written is good

kilowatt-hours measure how many kilowatts an appliance will use if it runs for an hour.

big-o notation can be applied to measure how much time or space a piece of code will use.

not all processors run at the same speed so time can't be measured with a time metric rather with the number of instructions an application initiates.

## O(1) constant time

```py
array = [0, 1, 2, 3, 4]
print(array[3])
```

it will always access the index 3

## O(log n) logarithmic time

```py
array = [0,1,2,3,4,6,7,8,9,10]

print("##Step One")
print("Array")
print(array)
midpoint = int(len(array)/2)
print("the midpoint at step one is: " , array[midpoint])

print()

print("##Step Two")
array = array[:midpoint] # 6 is the midpoint of the array 
print("Array")
print(array)
# running this shows the numbers left to check 
# is 5 < 3 
# no 
# so discard the left hand side 

# so the array is halved again 
midpoint=int(len(array)/2)
print("the midpoint is: ",  array[midpoint])

print()
print("##Step Three") 
array = array[midpoint:] # so the array is halved at the midpoint
print(array)
# check for the midpoint 
midpoint=int(len(array)/2)
print("the midpoint is: " , array[midpoint])
# is 4 < 5 
# yes look to the right

print()
print("##Step Four") 
print(array[midpoint:]) 
# check for the midpoint 
array = array[midpoint:] # so the array is halved at the midpoint
midpoint=int(len(array)/2)

print()
print("##Step Five") 
array = array[midpoint:] 
print(array)
print("only one value to check and it is not 5")
```

## O(n) linear time

```py
array = [0, 1, 2, 3, 4]

if 5 in array:
  print("five is here")
```

a loop that checks if 5 is an element of an array will depend on the elements of said array

## O(n^2) quadratic time

```py
new_array=[] # an array to hold all of the results
# array with five numbers
array = [0,1,2,3,4]
for i in range(len(array)): # the array has five values, so this is n=5
    for j in range(len(array)): # still the same array so n = 5
        new_array.append(i*j) # every computation made is stored here

print(len(new_array)) #how big is this new array ?
```

# knowledge check: time complexity

1. Which has the largest time to compute?

This is known as linear time. As the input increases so does the time to compute an output.

2. 
```
N = 7

FOR i = 1 TO N:

      output(i)
```
**O(N)**

As the loop is set to the size of N, when N increases so does the time complexity.

3. 
```
N = 7

FOR i = 1 TO N:

      FOR j = 1 TO N:

         output(N)
```

**O(n^2)**

There are 2 loops so every time the application runs, it must do N*N executions.

4. 
```
N = 37 

FOR i = 1 TO N:

      WHILE i < 10:

         output(i*N)
```

**O(N)**

The inner loop is only run a finite number of times that does not increase with N.

5. 
```
N = 37

FOR i = 1 TO N:

        WHILE i < 10:

              output(i*N)
```

**O(N)**

The inner loop is only run a finite number of times that does not increase with N.

6. 
```
N = 10

FOR i = 1 TO 5:

        FOR j = 1 TO i:

                output(i*j)
```

**O(1)**

7. 
```
N = 7

FOR i = 1 TO N:

           FOR j = 1 TO N:

                output(N)
```

**O(n^2)**

There are 2 loops so every time the application runs, it must do N*N executions.

# space complexity

how much memory a solution will take?

often a trade off with time

hash tables provide fast lookups in constant time O(1)

for this to work, they must have a lookup for every element stored. So the space complexity is linear. O(n)

different languages have different memory costs

in java, an integer requires 4 bytes of memory, a blank array will consume 12 bytes and 4 bytes for padding.

if n refers to an array of size 4, then the memory requirement would be 32 bytes 4 x 8

space complexity can be broken down in two
- auxiliary space
- input space

## auxiliary

auxiliary space is the space required to hold all data for a solution.

temporary space needed to compute a solution.

## input

input space refers to the space required to add data to the function, algorithm application or system.

4 integers x size 4 bytes each + 12 bytes of header + 4 bytes of padding = 32 bytes

8 integers size 4 each + 12 bytes + 4 padding = 48 bytes

the auxiliary space is not impacted by increasing the input space.

common memory actions
- assigning variables
- creating a new data structure O(n) auxiliary memory cost
- function calling and allocation have additional memory overheads.

# knowledge check: space complexity

1. Given an array that holds 12 integers at 4bytes per integer, contains an additional 12 bytes for the header and 4 bytes for padding. What is the total space complexity for this data structure?

64

2. A program requires two arrays to compute a function. First array has a header of 12 bytes, and padding of another 4 bytes. It contains 8 integers of 4 bytes each. The second array also has a header of 12 bytes and 4 bytes padding. The second array contains 24 integers of 4 bytes each. What is the input space of this function?

128

The input space refers to the value that changes as N increases. The header and padding remain constant for the duration of the function.

3. Changing the values in an array leads to greater space complexity over creating a new array and copying in the values?

false

Performing an in-place swapping of values is a more efficient use of space as it does not have the same memory tax as creating a new array and copying in the values.

4. Does reducing the space complexity of a function increase the time complexity?

no

There is no direct correlation between space and time complexity, but often in an effort to reduce one we can increase the other.

5. What does auxiliary space refer to?

It is the space required to hold any additional variables used in the computations of an application.

It relates to space complexity, and what variables are used in computing the final output.

# module quiz: introduction to the coding interview

1. What should be done when presented with a technical problem where the solution is not immediately obvious?

Ask questions.

2. During a technical interview, is it better to rely on the work of others, or code everything yourself?

Use code written by others

3. Given an array that represents sock colors:  Sock_colors = [3,3,2,1,1,3,5,1,4,2], how many pairs of the same color socks exist?

3

4. It is best to remain silent when writing code during a technical interview.

false

5. Should I ask questions in an interview?

It is natural that you will have questions about the company that you may be working for. However you will be given time at the end to find this information out. Though you may be unsure of a question directed at you and want some clarity. In this instance it is also a good idea to ask questions.

6. What is the STAR method?

A structured approach to answering questions.

7. What is meant by transfer rate in relation to a CPU?

The rate at which memory is transferred into cache.

8. When engaged with a coding interview what sorts of tests should you aim to include?

All testing is important, but you will only have so much time in an interview. Unit tests are simple tests that are easily implemented and will demonstrate your propensity to test while still leaving you time to complete a workable solution.

9. Which memory location is closest to the CPU?

Cache

10. When designing a solution it is best to:

Planning an outline, engaging the main obstacles, looking at the potential solutions and constantly reviewing.
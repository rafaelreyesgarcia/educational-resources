# coding interview

screening for hard and soft skills

steps for a coding interview

- prepare to succeed

before employing a solution, first ensure the problem is clear.

- solve problem conceptually first

before writing code, using pseudocode to communicate paths to solve the problem is good practice.

problem-solving is a crucial skill

be vocal about how the problem is being solved

breaking problem into smaller ones (divide and conquer)

- employ appropriate tools

solutions shouldn't be complex in nature due to time constrains

## count the socks

arrray that represents sock colors

yellow - 1
blue - 2
red - 3
green - 4
orange - 5

determine how many pairs of same color socks exist.

a dictionary (object) data structure that stores key value pairs can use the colors as keys and the count as values to then iterate over the dictionary to retrieve all odd numbers.

always, when possible, utilize existing approaches rather than attempting to implement manual solutions.

crucial concepts
- data structures
- sorting and searching algorithms
- code optimization (refactoring) (use less memory or disk space to minimize CPU time or network bandwidth)
- time and space complexity (how fast and how much space the solution will take)

- optimize the solution

outline space and time complexities of the provided solution and analyze how to improve these.

modularize functions

DRY principle in mind all the time

avoid excessive compiler calls.

if searching for a value in an array, terminate the loop once the item is found.

include return statement when value is found or a loop that is dependendant on a boolean to cut uneccessary looping and reduce time complexity.

space complexity requires being clever with memory usage.

## how to optimize code

- If there are portions of your code that are no longer required as a result of modularizing, or as a result of an avenue of thought that was not completed, remove it.

- To optimize space complexity, you may opt for a solution that does in-place changes over creating a new data structure to house the result.

- Avoid excessive compiler calls. If you are searching for a value in an array, terminate the loop when the item is found.

- Modularize this code into a function that is callable repeatedly and reuse the code when possible.

# type of interviews

- screening process
- type of quiz questions
- online assignments
- take-home assignments
- details of a technical interview

type of questions in a technical interview

- How would you explain technology X to a non-technical person?

- What is your favorite technology and why?

- What databases have you worked with?

- Tell me about a technical challenge you have overcome in a project.

- What projects have you worked on in your spare time?

# communication

## verbal

first impression

20/80 rule

allow interviewer to direct questions completely before answering

follows up with related questions to allow flow

avoid negative emotions or attitudes towards yourself

## star method

have an opportunity to introduce yourself

**the situation**
- what is the project?
- what are the challenges faced?

**the task**
- what are the responsabilities of the role?


**the action**
- what actions to take to address the challenges?

**the result**
- what will be the result of the actions

## non verbal

- eye contact
- punctuality
- manners
- personal hygiene

# what to expect from a technical interview

# pseudocode

high-level representation of ideas

highlights what elements a program should include

helps plotting out an approach

simplify a complex problem

when communicating and explaining the concept to a non-technical audience

in an interview to demonstrate ability to reason out a problem

## fizzbuzz challenge

Write a program in a given language that iterates over numbers 1 to 40. Print out a number for every number except multiples of three, in which case output Fizz. For multiples of five, output Buzz, and for multiples of 3 and 5 output FizzBuzz.

```
for number in range(40):
    if number % 3 == 0 and number % 5 == 0:
        print("FizzBuzz")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("buzz")
    else:
        print(number)
```

common questions

Tell me about yourself.

Why do you feel that they should hire you?

What are your major strengths?

Or, what are your major weaknesses?

What pay are you expecting?

How do your previous experiences make you suitable for this role?

What do your friends say about you?

Why do you want this role?

How have you dealt with conflict in the past?

# testing a solution

**integration tests**

- test how components interact with each other.
- external dependencies are simulated.
- unit test assess individual lines of code, integration tests takes a more global approach.

**functional tests**

- automated test that verifies if a system operates as expected.
- concerned with the capabilities of the system.

**regression tests**

- tests after a change has been implemented to verify the change doesn't cause errors or bugs in the existing code.

**unit tests**

- less concerned with application's overall performance/operation.
- tests each individual component.

good testing practices
- readability of tests
- clear outcomes
- automation (CI/CD)

# knowledge check: coding interview

1. What are softskills?

When an interview talks about your softskills they are interested to know how you will function in a team.

2. When are you most likely to be asked about your Softskills?

The screening call is designed to identify whether a candidate is a good fit for a company’s culture. It is done before any competency is established.

3. What is the purpose of the online coding assignment?

It is designed to give you an opportunity to show what you can produce in an unpressurized environment that mimics potential job activities you will be asked to undertake

4. Pseudocode is a structured way to engage with code.

**false**

Though using pseudocode can help you find the structure in code, it has no formalized way or structure for engaging with it.

5. When should you test your code?

Continuously as the project progress.
# hash tables

a hash table consists of slots or buckets to hold key value pairs.

requires a hashing function to determine the correct slot to place the data into.

**hashing function** algorithm applied to a key to generate a unique number.

each item must have a key and value.

the key is hashed so that is reduced to a fixed size value.

data compression ( compress size to a number of bytes, send it over the network and decompress)

most programming languages have built-in hashing functions
- MD5
- SHA
- CRC32

hash tables prioritize speed over space to allow retriving an item in O(1) constant time.

array value lookups are iterations over the whole array to find an element, worse case, it takes O(n) linear time to find an element (if its at the end of the array)

hash tables offer a different approach when storing and searching data.

an algorithm is implemented that takes a key and maps it to a value which is stored in an index.

when a new key is added, the algorithm runs the same function to determine where in the index the value lies.

similar to an index in a book, it speeds up the time to identify location of data.

hash tables are used in
- caches
- dictionaries
- database indexes and sets

## collisions

hashing function will reduce the key to a fixed manageable size.

mon mises birthday paradox.

randomly surveying a group of 23 people there's 50/50 chance that two will have the same birthday.

24 employees, hashing function that takes the date and month of birthday to be used as index.

a hash table of 365 index slots will have high probabilities of one slot being shared by two employees.

solution is to grow the table everytime a collision occurs and increase the complexity of the hashing approach.

another solution is creating a linked list at the collision and simply store additional values.

## hash tables in different programming languages

collection classes specialized in data storage and retrieval.

hash function creates an alpha-numeric output from a given input.

hash is used to determine where in memory to store a value.

instead of looking through every item, just apply the hashing function to check if the item has been hashed to memory.

many languages don't have a hashing table built-in implementation.

hashmaps are supported in kotlin but not a hashtable.

a hashmap is similar, except that hashmaps allow nulls for keys and values and its not thread-safe.

## threadsafe

threads are processes that a computer can run.

processes are often run at the same time, so the compiler creates many threads that execute code.

a **thread** is a small executable piece of code that can run a process.

if an application accesses a data structure, you can duplicate the application and access the same data structure via a different thread.

having different threads working on the same data structure can make code run faster, but only if the information is processed correctly.

hashtables can be synchronized so different threads can use and change the same information in a table.

a hashmap can act like a hash table if additional thread-safe behavior is implemented.

python doesn't have a native implementation of a hashtable.

a dictionary in python works like a hashtable, storing key-value pairs.

a dictionary is also thread-safe.

# heaps

a data structured modeled like a tree but behaves like a queue.

each element in a heap has a key-value and the priority can be set to the smallest or largest key-value.

**min heaps** prioritize smallest key-value

**max heaps** prioritize largest key-value

initially used to store and search data efficiently.

core operations of a heap
- insert
- find_min (find_max)
- delete_min (delete_max)

additional behavior is added in different languages

## min heaps

`decreaseKey()` where the value of a key is changed

heaps are often built using binary trees.

another approach is making an array behave like a binary tree.

min value is placed on the root node and each subsequent value is placed on the right or left.

retrieving the min value of a heap will always be O(1) constant as the root will always have the min value.

typically a heap won't delete items other than the priority element.

the heap is built to identify the most important item and returning it in the shortest amount of time possible

deleting items in the tree would require restructuring the tree.

insertion into a min-heap is done through propagation.

each item is inserted at the root, then its compared with the left value, if the newly inserted item is bigger, they are swapped, this continues until the newly inserted value has no greater value above it.

insertion in a heap is achieved in 0 (log n) logarithmic time.

heaps prioritize a particular value from a group of elements.

natural application is scheduling (cpu routers, packet handling)

# graphs

a graph is made up of nodes to denote destinations and edges that show how each node relates to another.

values between nodes mean that the graph is weighted.

unidirected graphs are like one-way streets.

a path is a sequence of two or more nodes that connect by an edge.

a connection in a directed graph is weak, if the edge is only one way.

if there's two connections going etiher way between two nodes is a strong connection.

a graph has no beginning or end, there's no hierarchy, there's relations.

two bordering nodes are called neighbors.

nodes connected through a naighbor are adjacent.

graphs can be traversed with a breadth or depth first approach

a breadth-first approach involves choosing a given starting location and iterating over all neighboring nodes possible by a queue.

depth-first approach is possible by employing a stack.

queue focuses on FIFO and a stack in LILO

what's the shortest path from A to E?

the edge weight will inform the cost of choosing a path.

routing internet packages, calculating a journey on google maps, the shortest path to take can be figured out with this data structure.

## heaps and graphs in different programming languages

graphs are made of nodes and edges.

nodes store data. edges are connections between nodes.

nodes don't have to be connected, existing independently from other nodes.

and edge can have a weight, a value that is stored in the connection that infers on the strength between two nodes.

directed graphs mean the edges are focused or uniderected where the connection infers information back and forth.

NetworkX is a python library to model data.

graphs can be directed, undirected, cyclic and acyclic.

heaps are graphs with specifi contraints.

heaps sort data in order to return a min or max value thus employing a binary approach.

a heap will have the largest or smallest value as the root.

some languages like kotlin and javascript lack built-in instances of heaps and use array lists.

# knowledge check: advanced data structures

1. given an array of 12 numbers and a hashing function modulus 6. How many collisions would you expect to have in your table?

6

2. What data structure would be most suitable for mimicking the actions of a hashtable?

dictionaries

Some languages that do not have built-in hashtable types use dictionaries to emulate the behavior.

3. What value is stored at the root of a min_heap?

The lowest value

4. Why is the travelling salesman used in graphs?

Because the analogy of travelling can be related to the number of connected nodes.

When one talks about the travelling sales man, it need not be routed in actual distance. Instead, this is an analogy to the connectedness between elements. From this principle, many algorithms can be applied to extract information from data.

5. In relation to computer science what is a clique?

It is a subset of a graph that has found to have strong internal connections and weak external ones.

It can be determined by analyzing the interconnectedness of nodes and comparing them to external nodes.

# module summary

basic data structures
- strings
- booleans
- arrays

advanced data structures
- collections
- graphs
- heaps
- trees

understand when to use the most appropriate structure

mutability and immutability

liear data structures
- arrays
- queues
- stacks
- lists

non-linear
- graphs
- trees

you can investigate certain paths in non-linear structures instead of traversing the whole structure like linear ones.

it is common to find lists with mix elements or just a single type allowed.

some languages require to determine the initial size of the structure (static or dynamic)

linked lists and sets, sets store information in an unordered fashion.

stacks and queues employ sequential access

FILO and FIFO principles.

trees are powerful to add and search values.

hashing function, collisions.

heaps can be used to organize items by importance.

# Module quiz: Introduction to data structures

1. What do TSV files use to separate their data?

tabs

2. Arrays are always stored on the stack?

While one can make a shallow copy of an array, the actual array itself is not copied. Making a deep copy creates a new instance of an array with the same values but that exists in its own space in memory.

3. What happens when you try to retrieve a value using a number greater than the index size?

Accessing the array outside of the index range throws an out-of-bounds error.

4. In relation to computer science, what is a class?

It is a blueprint for an object.

5. In relation to objects, what are instance variables?

Characteristics of the class.

6. How many children can a node in a binary tree have?

As the name suggests it can have two children nodes, one larger and one smaller.

7. Which of the following uses a FIFO approach.

A queue works much like its namesake. The first one to arrive is the first one to be served.

8. In relation to data structures what does synchronization mean?

Making a class thread safe

9. Why do you need to implement a comparator when storing objects on a tree?

As a means of comparing objects so the tree knows which node to store an object on.

The implementation of some trees requires that objects are stored relative to one another. Enabling a comparator allows you store objects of different types in relation to one another.

10. Why are heaps called heaps?

The order of importance is determined by where in the data structure the information is found.

A heap will place the most important element at the top. This can be the highest or lowest depending on implementation. The design of this approach is that one would only take the top value and not try and retrieve one in the middle.
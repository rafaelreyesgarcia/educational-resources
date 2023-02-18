# lists and sets

## lists

lists are commonly represented as objects.

in addition to storing data, they have built-in methods.

lists are common to be declared as strings, integer or gloats.

lists can have mixed element types.

a list is an abstract concept that refers to a container of elements.

array-based list is an ordered collection.

array-based implementations relate to initial sizing while others allow for dynamically growing structures.

many dynamic structures however still have an initial size automatically configured at instantiation.

when the automatic size limit is reached, the array copy itself into a new structure with a larger size allocation.

choosing dynamic arrays might have a cost at runtime.

a linked list works different than an array-based list.

linked lists contain
- data
- pointer to the next item

an empty list can grow dynamically. A new node is added and points to the list.

fast to store large amounts of data.

in each node there must be a reference to the nodes around it and a head and a tail.

the **head** is a unique node that is the start of the list.

the **tail** is the last node of the list.

## more on lists

store elements in a given ordered accessed using an index.

index allow searching in a list.

you need to iterate over the structure using the index, which makes them slower than a set.

list allows all kinds of elements.

no distinction if an element is mutable or immutable.

## sets

a set will store elements in an unordered way.

a set only holds unique elements.

once a value is added to a set it can't change.

sets are fast to search because its internal mechanisms, hash tables.

sets use hash tables to determine where to store elements.

each number passed to a set will have a hashing function applied to it.

a **hashing function** is an algorithm that takes data and maps it to a fixed size value.

the fixed value is theoretically unique and everytime the function is applied to the data, the same value is returned.

> searching in a set can be done in O(1) constant time.

O(1) approach would iterate over entire data structure to check for presence of abscence of a value.

sets apply mapping function to input data to then check the resulting output, if the data exists, the value is returned, otherwise returns false.

**clashing** refers to when the hashing functions return the same unique mapping for two different values.

## mutability

immutable objects can't be changed when created.

sets are immutable structures.

objects added to sets can be treated differently.

in javascript is possible to add mutable objects to a set, while not allowed in python.

## speed

sets use a hashing function to apply an algorithm to an input and generate the same alpha-numeric output.

a hashtable uses the unique hash to store an item in memory.

instead of iterating for every element, just apply the hashing function and check if the value is there.

this allows O(1) constant time but this is also why elements can't be mutable. Object protection is left to the user in javascript.

python and kotlin won't allow elements to be mutated after being added to set. `MutableSet` is a different type in kotlin.

# stacks and queues

stacks and queues are abstract data structures.

unique common principle is how elements are added/removed.

> lists and arrays allow random access, stacks and queues employ sequential access.

## stacks

linear data structures.

elements are stacked on top of one another.

strict FILO basis (first in, last out)

LIFO (last in, first out)

items can only be retrieved from the top of the stack.

`CTRL+Z` undos the very last action

stacks have few methods
- push
- pop
- isEmpty
- isFull
- Peek

popping an item out of a stack takes it from the top

calling pop again will return the next item.

pop or push changes the stack.

peek only allows to view the top item without changing the stack like pop or push.

some languages alllow to search through the stack.

an abstract data type means that there are important characteristics to be enforced when implementing a structure, but there's no built-in versions that can be imported.

LIFO is enforced in stacks.

## queues

it can create, insert, remove and check the stat eof the queue.

queues work on a first-in first-out FIFP basis

the element to be removed is the first in the queue.

structure holds tasks in order of insertion.

retains the order in which elements are inserted.

strict implementation that determines how elements are added/removed.

queues implement a policy that values the time of arrival.

CPU and disk scheduling use queues.

enqueued (add an item to the queue)

dequeue (remove an item from the queue)

simplest approach is to use an array as the container adaptor.

a **container adapter** is defined when a data structure is used to build another type of data structure, in this case, abstract data types like stacks and queues.

because queues only pop elements from the front of the queue, lookup time is always O(1) constant.

python implements variant queue classes.

python includes a priority queue so it assigns importance to elements instead of a FIFP basis.

# trees

give flexibility in adding and searching values.

a tree is a complex data strucutre consisting of nodes linked with one another.

a node can be a parent or a child.

a parent may have connected children.

nodes with no children are referred to as leaf nodes.

nodes can branch off in different directions allowing powerful search and storage features.

graph-like structure that has nodes with data.

**root** top-level node.

**child** nodes follow the root node.

**siblings** nodes with the same parent.

**path** series of connected nodes.

**depth** of a node refers to how many edges there are from the parent to the root.

**height** number of edges from the topmost node to the deepest node.

edges model how each node relates to one another.

**size** of a tree is the total number of nodes.

variants of trees
- binary trees
- B trees
- B plus trees
- quad trees
- AVL trees

connections between nodes indicate a relationship inherent in the data.

topmost content is stored in the upper nodes and in-depth information can be retrieved by traversing a given branch.

efficient to insert and delete data.

non-linear data structures mean there's many ways of traversing the data.

in binary trees, left nodes have lesser values that right nodes.

tree traversing can be done with depth-first or breadth-first method.

depth-first visits every node from topmost to bottom sequentially.

breadth-first involves searching each node on the same level before ascending to the next level, repeating this until root node has been reached.

they can model file systems, classs hierarchies.

## trees in different programming languages

**abstract data type** (ADT)

ADT is a blueprint for how a data structure manifests.

related to the restraints and requirements to ensure a data structure will always operate in the same way.

a tree
- has nodes
- a root node (always at the top, every node descends from the root)
- leaf nodes (unconnected nodes at the base of the tree)

## binary trees

- every node has a max of two child nodes
- every node has a key to identify it
- values less than the parent node are placed in the left
- values greater than the parent are placed in the right
- each node needs a reference to the left and right so the tree can be traversed.

methods needed for a class to function as a binary tree
- lookup method to verify if the value exists or not
- insertion method should know to place items on the left side of the nearest higher value
- removal method that won't break the connection in the overall tree by checking all children nodes after the removal are connected to the next node of the highest value.

searching in trees generally work with this approach. There's no concrete implementation of trees in most programming languages

depth-first (examines each node on a branch until the end node is reached.) or breadth-first (examine all nodes on the same level before stepping into a deeper level) search can be chosen

# Knowledge check: Collection data structures

1. You wish to store a list of grades for a class. Given the choice between a set and a list, which is the more appropriate data structure?

list

2. In relation to data structures what does mutability mean?


It means that it can be changed after it has been created.

3. LIFO and FILO mean the same thing?

true FILO (First In Last Out) is another way of saying LIFO (Last in First Out).

4. Creating a class through the use of a capital T `Stack<T>` is an example of?

Generics

In this way, the object created from the class need not be confined to one specific type until compile time.

5. On what type of data structure would one do a depth first search?

A tree is a series of interconnected nodes that build under one root node. Doing a depth first search, is to follow one branch of nodes to the very deepest one.




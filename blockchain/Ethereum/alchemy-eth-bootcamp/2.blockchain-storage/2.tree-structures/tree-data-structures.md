# tree data structures

> blockchain networks use transactions to change state and keep track of user balances.

blockchains use data structures to store all changing state data.

computer science concepts always draw trees upside down.

**node** is a basic unit of a data structure

top node is known as the **parent** (root)

bottom nodes would be **children** nodes (relative to parent). (leaves)

**binary tree**

a tree is considered binary when each parent has at most two-children

`adjective` tree. 

multiple trees have different properties that will describe the tree.

a binary tree is one where the parent nodes can have at most two children.

a linked-list is also a tree but one where there's only one child per parent forming a chain more like a tree.

```js
// linked list

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// tree node

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

```

file systems in computers use tree structures

**tree vocabulary**

**key** actual data held inside a node

**root** the node without a parent.

**siblings** nodes under the same parent on the same level.

**subtree** isolated tree of a broader tree.

when to use a tree

- if data needs to be stored hierarchically
- efficient data structure for searching and sorting data

> recursive algorithms are used in conjuction with trees

**balanced binary search tree**

efficient to search and sort data with

properties
- binary tree
- left subtree of a node contains nodes with keys lesser than the node's key
- right subtree of a node contains nodes with keys greater than node's key.
- each subtree must be a binary search tree

these rules or properties optimize algorithm design by assuring that some data will be guaranteed to be in certain subtree path. 

> algorithmic complexities tend to stay logarithmic instead of linear.

as you increase and pack more items into trees, the searching algorithms to traverse them don't get much more complicated.

algorithmic complexity depend on the growth of the input.

because of binary search tree enforcement properties, search time always remains `O(log n)` where `n` is the number of nodes in the tree.

data structures should ideally be as close to **constant time** 

Big O notation gives a rough indicator of how an algorithm will perform in terms of an given amount of input elements.

## building a binary search tree

starts with a root node, branches to children nodes. each parent has at most 2 children. it's a search tree because the order of nodes is sorted by the value of data.

binary property
- parents should have at most 2 children.

sorting properties
1. data in children to the left of the parent should be smaller.
2. data in children to the right of the parent should be bigger.

### 1. node

a node should contain data. 

a node should contain references to the left and right children.

**goal**

- complete constructor function. store `data` inside a prop of the same name.
- null properties in left and right as this is the root node

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const node = new Node(5);

console.log(node.data); // 5
console.log(node.left); // null
console.log(node.right); // null
```

### 2. storing the root

a tree will keep track of a reference to the root node.

**goal**

- `Tree` constructor function to store null on the root property

```js
class Tree {
  constructor() {
    this.root = null;
  }
}
```

### 3. add root

method to add nodes in the tree.

- add a root to an empty tree

assume the tree is empty for now

```js

// create a new tree and new node
const tree = new Tree();
const node = new Node(5);

// add the node to the tree using addNode
tree.addNode(node);

// the new node becomes the tree's root
console.log(tree.root.data); // 5
```

### 4. first layer

the bottom-most layer of a tree is call its leaves

if a root already exists we'll need to decide which side to add the new leaf node to

- if new node `data` is less than root data, add it to the **left**
- if new node `data` is  more than root data, add it to the **right**

```js
class Tree {
  constructor() {
    this.root = null;
  }
  addNode(node) {
    if(!this.root) {
      this.root = node;
    } else {
      if (node.data > this.root.data) {
        this.root.right = node;
      }
      this.root.left = node;
    }
  }
}

const tree = new Tree();
const node1 = new Node(5);
const node2 = new Node(3);
const node3 = new Node(7);

tree.addNode(node1);
tree.addNode(node2);
tree.addNode(node3);

console.log(tree.root.left.data); // 3
console.log(tree.root.right.data); // 7
```

### 5. many layers

adding nodes can work for many layers of the tree with iterations or recursion.

**recursive solution**

write a function on `tree` that will take two arguments, parent and child.

function should add child under parent node.

if child data less than parent data, go left
- if parent already has a left node, call this function again having that left node as the parent
- if parent doesn't have a left node, set the new node as left node

if child data is greater than parent data, go right
- if parent already has a right node, call function recursively with the right node as parent.
- if parent doesn't have a right node, set new node as the new right node.

**iterative solution**

iterate until you find the point where node can be added using a `while(true)` and then `break` or `return` after adding the node.

```js
// basic addNode
addNode(node) {
  if (!this.root) {
    this.root = node;
  } else {
    if (node.data > this.root.data) {
      this.root.right = node;
    } else {
      this.root.left = node;
    }
  }
}

// iterative 
addNodeIterative(node) {
  if (!this.root) {
    this.root = node;
    return;
  }
  let parent = this.root;

  while(true) {
    if (node.data < parent.data) {
      if (!parent.left) {
        parent.left = node;
        break;
      } else {
        parent = parent.left;
      }
    }

    if (node.data > parent.data) {
      if(!parent.right) {
        parent.right = node;
        break;
      } else {
        parent = parent.right;
      }
    }
  }
}

// recursive
addNode(node) {
  if (!this.root) {
    this.root = node;
  } else {
    this.addNodeRecursive(this.root, node);
  }
}

addNodeRecursive(parent, child) {
  if (child.data < parent.data) {
    if (parent.left) {
      this.addNodeRecursive(parent.left, child);
    } else {
      parent.left = child;
    }
  }

  if (child.data > parent.data) {
    if (parent.right) {
      this.addNodeRecursive(parent.right, child);
    } else {
      parent.right = child;
    }
  }
}

```

### 6. search 

use the sort order to find nodes in the tree.

**goal**

- `hasNode` method will take a number and search the tree to find a node with that data value.
- return `true` if the node exists, `false` otherwise

```js
const tree = new Tree();
const node1 = new Node(4);

tree.addNode(node1);

console.log(tree.hasNode(4)); // true
console.log(tree.hasNode(7)); // false
```

## merkle trees

data structure that allows efficient verifications that data belongs in a larger set of data

a merkle tree is a collection of hashes reduced to a single hash

```
      ABCDEFGH <-- Merkle Root
       /    \
    ABCD     EFGH
    / \      / \
   AB  CD   EF  GH
  / \  / \  / \ / \
  A B  C D  E F G H
```

each node represents a hash. the merkle root represents the concatenated hashes.

easy and fast way to check for inconsistencies  without having to lookup each individual datapoint.

to agree on a large set of data, nodes on a blockchain use the merkle tree root to verify their data matches other peer's data.

the binary tree structure allows to verify a single piece of data without having all the data.

tree with missing data
```
 ABCDEFGH
       /    \
    ABCD     EFGH
    / \      / \
   -  -     EF  GH
  / \  / \  / \ / \
  - -  - -  E F -  -
```

the average case for verification of a tree is `log2(n)` where `n` is number of nodes in the tree.

for a tree of size 128 it would only take 7 hashes to determine the root.

merkle trees are used to check for inconsistencies in all kinds of distributed systems.

```
          Root 
        /      \
    ABCD        EFGHIJ
     |          /    \
    ABCD     EFGH     IJ
    / \      /   \     |
   AB  CD   EF   GH   IJ
  / \  / \  / \  / \  / \      
  A B  C D  E F  G H  I J
```

to prove `A` is part of the merkle root we don't need the hash of `C` or `D` we need to know the hash of `CD`.

necessary proof for `A`

```
Hash(Hash(Hash(A + B) + CD) + EFGHIJ)
```

### 1. combine two leaves

a merkle tree takes an array of leaf nodes, combines them together, two at a time, layer by layer until they are reduced to a single root node forming a tree-like structure of hashing.

**goal**

- constructor takes two arguments, array of leaf nodes, combination function used to concatenate and hash two leaves together
- add `getRoot` on the class to find the merkle root

```
    Root
    /  \ 
   A    B
```

**combination function**

takes two arguments, left and right leaf node and returns the resulting combination

```
<!-- four-leaf tree -->
    Root   
    / \    
   AB  CD  
  / \  / \ 
  A B  C D
```


- A and B are combined
- C and D are combined
- those two results are combined to get the root hash

```js
class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }
  getRoot() {
    return this.concat(this.leaves[0], this.leaves[1]);
  }

}
```

## 2. multiple layers

**goal**

- update `getRoot` to handle merkle trees with more than two leaf nodes.
- first layer (leaves)
- second layer is combination of leaves
- third layer is the merkle root combination
- handle a single leaf node, two leaf nodes, four leaf nodes and eight leaf nodes.

**purpose of the merkle tree**

```
    ABCD
    /  \ 
   AB  CD
  / \  / \
  A B  C D
```

what's needed to prove `C` is in `ABCD`?

just the concatenation of `AB` and `D` instead of `A`, `B` and `D`

```
Hash(AB, Hash(C, D))
```

this optimization is what makes merkle trees so powerful.

larger trees make this optimization more apparent. 

recommended approach is to break down the tree into layers.

each layer there's a check to see if there's a single element left. If there's only one element left, then it's the root.

alternatively, calculate ahead of time how many layers will be in the tree.


```js
getRoot(leaves = this.leaves) {
  if (leaves.length === 1) {
    return leaves[0];
  }

  const layer = [];
  for (let i = 0; i < leaves.length; i +=2) {
    const left = leaves[i];
    const right = leaves[i + 1];
    layer.push(this.concat(left, right));
  }
  return this.getRoot(layer);
}
```

### 3. odd leavves

what happens in the case of an odd number of leaves in a tree.

any time that there is no right pair to an element, we just want to carry that leaf one layer up

always use up everything towards the left side before filling out the right side of the tree.

**five leaf tree**

```
      Root
     /    \
    ABCD   E
    / \    |
   AB  CD  E
  / \  / \ |
  A B  C D E
```

**seven leaf tree**

```
        Root
       /    \
    ABCD     EFG
    / \      / \
   AB  CD   EF  G
  / \  / \  / \ |
  A B  C D  E F G
```

```js
getRoot(leaves = this.leaves) {
  if (leaves.length === 1) {
    return leaves[0];
  }

  const layer = [];
  for (let i = 0; i < leaves.length; i +=2) {
    const left = leaves[i];
    const right = leaves[i + 1];
    if (right) {
      layer.push(this.concat(left, right));
    } else {
      layer.push(left);
    }
  }
  return this.getRoot(layer);
}
```

### 4. build the proof

only include necessary hashes we need to create the root hash from our target leaf node.

proof of C

```js
[
 { data: 'D', left: false },
 { data: 'AB', left: true },
 { data: 'E', left: false }
]
```

`getProof` function should take an index of a leaf node and return a merkle proof

merkle proof will be an array of objects with `data` and `left` properties.

```js
getProof(index, layer = this.leaves, proof = []) {
  if (layer.length === 1) {
    return proof;
  }
  const newLayer = [];
  for (let i = 0; i < layer.length; i += 2) {
    let left = layer[i];
    let right = layer[i + 1];
    if (!right) {
      newLayer.push(left);
    } else {
      newLayer.push(this.concat(left, right));
      if (i === index || i === index - 1) {
        let isLeft = !(index % 2);
        proof.push({
          data: isLeft ? right : left,
          left: !isLeft
        });
      }
    }
  }
  return this.getProof(Math.floor(index / 2), newLayer,proof);
}
```

### 5. verify proof

**goal**

- `proof` array of objects with `data` and `left` properties
- `node` leaf node trying to prove is within the merkle tree
- `root` valid merkle root
- `concat` method used to combine leaf nodes

take `node` and combine nwith all data provided in the `proof`


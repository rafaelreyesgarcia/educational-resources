// 1. node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
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
  // 6. search
  hasNode(data) {
    return this.searchRoot(this.root, data);
  }
  searchRoot(root, data) {
    if (!root) {
      return false;
    }
    if(root.data === data) {
      return true;
    }
    if(root.data > data) {
      return this.searchRoot(root.left, data);
    }
    if(root.data < data) {
      return this.searchRoot(root.right, data);
    }
  }
}

const tree = new Tree();
const root = new Node(5);
const node2 = new Node(3);
const node3 = new Node(7);
const node4 = new Node(2);
const node5 = new Node(10);
const node6 = new Node(1);

tree.addNode(root);

console.log(tree);

tree.addNode(node2);
tree.addNode(node3);
tree.addNode(node4);
tree.addNode(node5);
tree.addNode(node6);

console.log(tree);

console.log(tree.hasNode(4)); // true
console.log(tree.hasNode(7)); // false


// MERKLE TREE

// 1. combine two leaves

class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }
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
    return this.getProof(Math.floor(index / 2), newLayer, proof);
  }
}

const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const oddLeaves = ['A', 'B', 'C', 'D', 'E'];
const concat = (a, b) => a + b;

const merkleTree = new MerkleTree(leaves, concat);
const oddMerkle = new MerkleTree(oddLeaves, concat);

console.log(merkleTree.getRoot());
console.log(oddMerkle.getRoot());

function verifyProof(proof, node, root, concat) {
  let data = node;
  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      data = concat(proof[i].data, data);
    }
    else {
      data = concat(data, proof[i].data);
    }
  }
  return data === root;
}
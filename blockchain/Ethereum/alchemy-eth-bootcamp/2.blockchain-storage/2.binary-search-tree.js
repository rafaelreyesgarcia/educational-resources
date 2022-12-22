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
      if (node.data > this.root.data) {
        this.root.right = node;
      } else {
        this.root.left = node;
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

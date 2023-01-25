// const TrieNode = require('./TrieNode');

// 1. trie node
class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = {};
    this.isWord = false;
  }
}

// 1. trie
class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  // 2. simple tree insert
  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      node.children[word[i]] = new TrieNode(word[i]);
      node = node.children[word[i]];

      if (i == word.length - 1) {
        node.isWord = true;
      }
    }
  }
  contains(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (node.children[word[i]]) { // if the letter exists as a children node, set that as the node for next iteration
        node = node.children[word[i]];
      } else {
        return false; // the first iteration where the letter is not found as a child node, it returns false
      }
      // if all letters where found to be children then the last iteration will set the node to the last letter of the word.
    }
    return node.isWord; // the last letter node will have isWord set to true.
  }
}

/*
Trie.node {
  key: null for root, the letter string of a word
  children: {nodeProp: nodeValue(TrieNode)}, empty for the last letter of a word
  isWord: false, true for the last letter of a word
}
*/

module.exports = TrieNode;


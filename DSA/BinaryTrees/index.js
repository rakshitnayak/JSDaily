class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertAtNode(this.root, newNode);
    }
  }

  // here node is root node
  insertAtNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertAtNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertAtNode(node.right, newNode);
      }
    }
  }
}

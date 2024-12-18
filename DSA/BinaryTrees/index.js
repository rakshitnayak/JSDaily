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

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  // In order successor : it traverses to the right sub tree of key & return smallest key in the right subtree
  deleteNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // in order travesral
  inorderTraversal() {
    const result = [];
    this.inorder(this.root, result);
    return result;
  }

  inorder(node, result) {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.key);
      this.inorder(node.right, result);
    }
  }

  // pre order travesral
  preorderTraversal() {
    const result = [];
    this.preorder(this.root, result);
    return result;
  }

  preorder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
  }

  // post order travesral
  postorderTraversal() {
    const result = [];
    this.postorder(this.root, result);
    return result;
  }

  postorder(node, result) {
    if (node !== null) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.key);
    }
  }
}

// Define the Node class
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// sample binary tree
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

// -----------------------------------------------------------------------------------------------------

const depthFirstTraversal = (root) => {
  if (root === null) {
    return []; // Return an empty array for a null tree
  }
  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key); // Add only the key value to the array

    // Push right and left child nodes onto the stack
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return values; // Return the list of key values
};

// Test the depthFirstTraversal function
console.log(depthFirstTraversal(root), "depth first traversal iterative"); // Output: [1, 2, 4, 5, 3, 6]

const depthFirstTraversalRecursive = (root) => {
  if (root === null) {
    return [];
  }

  const leftValues = depthFirstTraversalRecursive(root.left);
  const rightValues = depthFirstTraversalRecursive(root.right);

  return [root.key, ...leftValues, ...rightValues];
};

console.log(
  depthFirstTraversalRecursive(root),
  "depth first traversal recursive"
); // Output: [1, 2, 4, 5, 3, 6]

// -----------------------------------------------------------------------------------------------------

const breadthFirstSearch = (root) => {
  if (root === null) {
    return [];
  }

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values;
};
console.log(breadthFirstSearch(root), "breadth first search iterative"); // Output: [1, 2, 3, 4, 5, 6]

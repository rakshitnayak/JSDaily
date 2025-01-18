// Depth-first search iterative approach
function depthFirstSearchIterative(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop(); // Pop the last element
    if (!visited.has(node)) {
      visited.add(node); // Mark node as visited
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor); // Push unvisited neighbors
        }
      }
    }
  }

  return [...visited]; // Return visited nodes in order
}

// Depth-first search recursive approach
function depthFirstSearchRecursive(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start); // Mark node as visited
    for (const neighbor of graph[start]) {
      depthFirstSearchRecursive(graph, neighbor, visited); // Recursively visit neighbors
    }
  }

  return [...visited]; // Return visited nodes in order
}

// Example graph
const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

// Example usage
const iterativeResult = depthFirstSearchIterative(graph, "a");
console.log("Visited nodes (iterative):", iterativeResult);

const recursiveResult = depthFirstSearchRecursive(graph, "a");
console.log("Visited nodes (recursive):", recursiveResult);

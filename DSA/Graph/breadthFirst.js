const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function breadthFirstSearch(graph, start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue the front element
    if (!visited.has(node)) {
      visited.add(node); // Mark node as visited
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor); // Enqueue unvisited neighbors
        }
      }
    }
  }

  return [...visited]; // Return visited nodes in order
}

// Example usage:
const result = breadthFirstSearch(graph, "a");
console.log("Visited nodes:", result);

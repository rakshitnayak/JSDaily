// you need to count the number of connected nodes

function countIsland(graph) {
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      for (let n of graph[node]) {
        dfs(n);
      }
    }
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }

  return count;
}

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

console.log(countIsland(graph));

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // ADDING A VERTEX
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // ADDING AN EDGE
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // REMOVING AN EDGE
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // REMOVING A VERTEX
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(v, vertex);
    });
    delete this.adjacencyList[vertex];
  }

  // DFS RECURSIVE
  // The function should accept a starting node
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store visited vertices
  // Create a helper function which accepts a vertex
  // The helper function should return early if the vertex is empty
  // The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  // Loop over all of the values in the adjacencyList for that vertex
  // If any of those values have not been visited, recursively invoke the helper function with that vertex
  // Invoke the helper function with the starting vertex
  // Return the result array

  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const v = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      v[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  // DFS ITERATIVE
  // The function should accept a starting node
  // Create a stack to help us keep track of vertices (use a list/array)
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store visited vertices
  // Add the starting vertex to the stack, and mark it visited
  // While the stack has something in it:
  // Pop the next vertex from the stack
  // If that vertex hasn't been visited yet:
  // Mark it as visited
  // Add it to the result list
  // Push all of its neighbors into the stack
  // Return the result array

  dfsIterative(start) {
    const stack = [];
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  // BREATH FIRST SEARCH (BFS)
  // The function should accept a starting vertex
  // Create a queue (you can use an array) and place the starting vertex in it
  // Create an array to store the nodes visited
  // Create an object to store nodes visited
  // Mark the starting vertex as visited
  // Loop as long as there is anything in the queue
  // Remove the first vertex from the queue and push it into the array that stores nodes visited
  // Loop over each vertex in the adjacency list for the vertex you are visiting
  // If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  // Once you have finished looping, return the array of visited nodes

  bfs(start) {
    const queue = [];
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    queue.push(start);
    visited[start] = true;

    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));
console.log(g);

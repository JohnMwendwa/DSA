class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // ADDING A VERTEX
  // Write a method called addVertex, which accepts a name of a vertex
  // It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // ADDING AN EDGE
  // This function should accept two vertices, we can call them vertex1 and vertex2
  // The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  // The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // REMOVING AN EDGE
  // This function should accept two vertices, we'll call them vertex1 and vertex2
  // The function should reassign the key of vertex1 to be an array that does not contain vertex2
  // The function should reassign the key of vertex2 to be an array that does not contain vertex1
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // REMOVING A VERTEX
  // The function should accept a vertex to remove
  // The function should loop as long as there are any other vertices in the adjacency list for that vertex
  // Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  // Delete the key in the adjacency list for that vertex
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(v, vertex);
    });
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Aspen", "Tokyo");
g.addEdge("Dallas", "Aspen");
// g.removeEdge("Dallas", "Tokyo");
g.removeVertex("Dallas");
console.log(g);

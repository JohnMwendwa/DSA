class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
  // BFS Traversal
  BFS() {
    // Create a queue and a variable to store the values of nodes visited
    // Place the root node in the queue
    // Loop as long as there is anything in the queue
    // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    // If there is a left property on the node dequeued - add it to the queue
    // If there is a right property on the node dequeued - add it to the queue
    // Return the variable that stores the values

    let node = this.root,
      data = [],
      queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  //DFS PreOrder Traversal
  DFSPreOrder() {
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    // Push the value of the node to the variable that stores the values
    // If the node has a left property, call the helper function with the left property on the node
    // If the node has a right property, call the helper function with the right property on the node
    // Invoke the helper function with the current variable
    // Return the array of values

    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  // DFS PostOrder Traversal
  DFSPostOrder() {
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    // If the node has a left property, call the helper function with the left property on the node
    // If the node has a right property, call the helper function with the right property on the node
    // Push the value of the node to the variable that stores the values
    // Invoke the helper function with the current variable
    // Return the array of values

    let data = [];
    let current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };

    traverse(current);
    return data;
  }

  // DFS InOrder Traversal
  DFSInOrder() {
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    // If the node has a left property, call the helper function with the left property on the node
    // Push the value of the node to the variable that stores the values
    // If the node has a right property, call the helper function with the right property on the node
    // Invoke the helper function with the current variable
    // Return the array of values

    let data = [];
    let current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return data;
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS()); // [10, 6, 15, 3, 8, 20]

console.log(tree.DFSPreOrder()); // [10, 6, 3, 8, 15, 20]

console.log(tree.DFSPostOrder()); // [3, 8, 6, 20, 15, 10]

console.log(tree.DFSInOrder()); // [3, 6, 8, 10, 15, 20]

// ARRAY implementation
const stack = [];

// Adding and removing from end
stack.push("book1");
stack.push("book2");
stack.push("book3");

stack.pop(); //book3
stack.pop(); //book2
stack.pop(); //book1

// Adding and removing from begining
stack.unshift("Github");
stack.unshift("LinkedIn");
stack.unshift("Youtube");

stack.shift(); //Youtube
stack.shift(); //LinkedIn
stack.shift(); //Github

// LINKED LIST implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // The function should accept a value
    // Create a new node with that value
    // If there are no nodes in the stack, set the first and last property to be the newly created node
    // If there is at least one node, create a variable that stores the current first propery on the stack
    // Reset the first property to be the newly created node
    // Set the next property on the node to be the previously created variable
    // Increment the size of the stack by 1

    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let firstNode = this.first;
      this.first = newNode;
      newNode.next = firstNode;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;

    const nodeToRemove = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = nodeToRemove.next;
      nodeToRemove.next = null;
    }

    this.size--;
    return nodeToRemove;
  }
}

const stack2 = new Stack();
stack2.push("hey");
stack2.push("there");
console.log(stack2.pop());
console.log(stack2);

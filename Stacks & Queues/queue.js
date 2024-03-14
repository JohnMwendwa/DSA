// BUIDING A QUEUE  using arrays
const q = [];
// ADD to end of array
q.push(1);
q.push(2);
q.push(3);

// REMOVE from beginning
q.shift();

// ADD to beginning
q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");

//REMOVE from end
q.pop();

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enque(val) {
    // This function accepts some value
    // Create a new node using that value passed to the function
    // If there are no nodes in the queue, set this node to be the first and last property of the queue
    // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node

    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  deque() {
    // If there is no first property, just return null
    // Store the first property in a variable
    // See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
    // If there is more than 1 node, set the first property to be the next property of first
    // Decrement the size by 1
    // Return the value of the node dequeued

    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const queue = new Queue();
queue.enque("FIRST");
queue.enque("SECOND");
queue.enque("THIRD");
console.log(queue);
console.log(queue.deque());
console.log(queue.deque());
console.log(queue.deque());
console.log(queue);

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// Min Binary Heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // Insertion
  enque(val, priority) {
    // Push the value to the end of the array
    // Bubble up :
    // Create a variable called index which is the length of the values property - 1
    // Create a variable called parentIndex which is the floor of (index-1)/2
    // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    // Swap the value of the values element at the parentIndex with the value of the element property at the child index
    // Set the index to be the parentIndex, and start over

    let node = new Node(val, priority);
    this.values.push(node);
    this.bubbleDown();
  }

  bubbleDown() {
    let idx = this.values.length - 1;
    let element = this.values[idx].priority;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx].priority;

      if (parent <= element) break;

      let temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[idx];
      this.values[idx] = temp;
      idx = parentIdx;
    }

    return this;
  }

  // Removal
  deque() {
    // swap the first value in the values property with the last one
    // Pop from the values property, so you can return the value at the end
    // Have the new root "sink down" to the correct spot
    // Your parent index starts at 0 (the root)
    // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    // Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
    // If the left or right child is less than the element...swap. If both left and right children are lesser, swap with the smallest child
    // The child index you swapped to now becomes the new parent index
    // Keep looping and swapping until neither child is less than the element
    // Return the old root

    let oldRoot = this.values[0];
    let idx = this.values.length - 1;

    if (this.values.length > 0) {
      this.values[0] = this.values[idx];
      this.values[idx] = oldRoot;
      this.values.pop();
    }

    this.sinkUp();
  }

  sinkUp() {
    let idx = this.values.length - 1;
    let parentIdx = 0;

    while (true) {
      let leftChildIndex = 2 * parentIdx + 1;
      let rightChildIndex = 2 * parentIdx + 2;
      let parent = this.values[parentIdx]?.priority;
      let leftChild = this.values[leftChildIndex]?.priority;
      let rightChild = this.values[rightChildIndex]?.priority;

      if (leftChildIndex > idx) break;

      if (parent < leftChild && parent < rightChild) break;

      let temp = this.values[parentIdx];
      if (leftChild < rightChild) {
        this.values[parentIdx] = this.values[leftChildIndex];
        this.values[leftChildIndex] = temp;
        parentIdx = leftChildIndex;
      } else {
        if (rightChildIndex > idx) break;
        this.values[parentIdx] = this.values[rightChildIndex];
        this.values[rightChild] = temp;
        parentIdx = rightChildIndex;
      }
    }
  }
}

let queue = new PriorityQueue();
queue.enque(41, 5);
queue.enque(39, 5);
queue.enque(33, 4);
queue.enque(18, 3);
queue.enque(27, 2);
queue.enque(12, 1);
queue.enque(55, 1);

console.log(queue);

queue.deque();
queue.deque();
queue.deque();
queue.deque();
queue.deque();
console.log(queue);

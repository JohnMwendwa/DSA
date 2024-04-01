class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Insertion
  insert(val) {
    // Push the value to the end of the array
    // Bubble up :
    // Create a variable called index which is the length of the values property - 1
    // Create a variable called parentIndex which is the floor of (index-1)/2
    // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    // Swap the value of the values element at the parentIndex with the value of the element property at the child index
    // Set the index to be the parentIndex, and start over

    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let elem = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (elem <= parent) break;
      this.values[parentIndex] = elem;
      this.values[index] = parent;
      index = parentIndex;
    }

    return this;
  }

  // Removal
  extractMax() {
    // swap the first value in the values property with the last one
    // Pop from the values property, so you can return the value at the end
    // Have the new root "sink down" to the correct spot
    // Your parent index starts at 0 (the root)
    // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    // Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
    // If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child
    // The child index you swapped to now becomes the new parent index
    // Keep looping and swapping until neither child is larger than the element
    // Return the old root
    let oldRoot = this.values[0];
    let idx = this.values.length - 1;
    const elements = this.values;

    if (elements.length > 0) {
      elements[0] = elements[idx];
      elements[idx] = oldRoot;
      elements.pop();
    }

    this.sinkDown();

    return oldRoot;
  }

  sinkDown() {
    const elements = this.values;
    let parentIdx = 0;

    while (true) {
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChildIdx = 2 * parentIdx + 1;

      if (!elements[leftChildIdx]) break;
      console.log(parentIdx, leftChildIdx, rightChildIdx);

      if (
        elements[leftChildIdx] < elements[parentIdx] &&
        elements[rightChildIdx] < elements[parentIdx]
      )
        break;

      let temp;
      if (elements[leftChildIdx] > elements[rightChildIdx]) {
        temp = elements[parentIdx];
        elements[parentIdx] = elements[leftChildIdx];
        elements[leftChildIdx] = temp;
        parentIdx = leftChildIdx;
      } else {
        if (!elements[rightChildIdx]) break;
        temp = elements[parentIdx];
        elements[parentIdx] = elements[rightChildIdx];
        elements[rightChildIdx] = temp;
        parentIdx = rightChildIdx;
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// heap.insert(42);

console.log(heap);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap);

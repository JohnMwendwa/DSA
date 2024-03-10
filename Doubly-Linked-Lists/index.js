class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // Create a new node with the value pased to the function
    // If the head property is null, set the head and tail to be the newly created node
    // If not, set the next property on the tail to be that node
    // Set the previous property on the newly created node to be the tail
    // Set the tail to be the newly created node
    // Increment the length
    // Return the Doubly Linked List

    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    // If there is no head,return undefined
    // Store the current tail in a variable to return later
    // If the length is 1, set the head and tail to be be null
    // Update the tail to be the previous Node
    // Set the newTail's next to be null
    //Decrement the length
    // Return the value removed
    if (!this.head) return undefined;
    const tail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
    }

    this.length--;
    return tail;
  }

  // Remove from the beginning
  shift() {
    // If length is 0, return undefined;
    // Store the current head property in a variable
    /* If the length is one
        -Set the head to be null
        -Set the tail to be null
    */
    //  Update the head to be the next of the old head
    // Set the new head's prev property to null
    // Set the old hed's next to null
    // Decrement the length
    // Return old head

    if (!this.head) return undefined;
    const nodeToRemove = this.head;

    if (this.length === 1) {
      return this.pop();
    } else {
      this.head = nodeToRemove.next;
      this.head.prev = null;
      nodeToRemove.next = null;
    }

    this.length--;
    return nodeToRemove;
  }

  // Add to the beginning
  unshift(val) {
    // Create a new node with the value passed to the function
    /* If the length is 0;
        -Set the head to be the new node
        -Set the tail to be the new node
     */
    /*Otherwise
        -Set the prev property on the head of the list to be the new node
        -Set the next proprty on the new node to be the head property
        -Update the head to be the new node
    */
    //  Increment the length
    // Return the list
    const newNode = new Node(val);

    if (!this.head) {
      return this.push(val);
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Find a node at a specific position
  get(index) {
    // If the index is less than 0 or greater or equal to the length, return null
    /* If the index is less than or equal to half the length of the list
        - Loop through the list starting from the head and loop towards the middle
        - Return the node once it is found
     */
    /* If the index is greater than half the length of the list
        - Loop through the list starting from the tail and loop towards the middle
        - Return the node once it is found
    */
    if (index < 0 || index >= this.length) return null;

    let currentNode;

    if (index <= this.length / 2) {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }

    return currentNode;
  }

  // REPLACE the value of a node at a specificied index
  set(index, val) {
    // Create a variable which is the result of the get method at the index passed to the function
    // If the get method returns a valid node, set the value of that node to be the value passed to the function
    // Return true
    // Otherwise, return false

    const node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  // INSERT a node at a specific position
  insert(index, val) {
    // If the index is less than zero or greater than or equal to the length, return false
    // If the index is 0, unshift
    // If the index is the same as the length, push
    // Use the get method to access the index - 1
    // Set the next and prev properties on the correct nodes to link everything together
    // Increment the length
    // Return true
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  // REMOVE a node at a specific position
  remove(index) {
    // If the index is less than zero or greater than or equal to the length, return undefined
    // If the index is 0, shift
    // If the index is the same as the length - 1, pop
    // Use the get method to retrieve the item to be removed
    // Update the next and prev properties to remove the found node from the list
    // Set the next and prev to null on the found node
    // Decrement the length
    // Return the removed node
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const nodeToRemove = this.get(index);
    const prevNode = nodeToRemove.prev;
    const nextNode = nodeToRemove.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;

    this.length--;
    return nodeToRemove;
  }
}

let list = new DoublyLinkedList();

list.push(2);
list.push(3);
// list.unshift(1);
// list.push(4);
// console.log(list);
// console.log(list.shift());
console.log(list.insert(2, "Hey there"));
console.log(list.remove(2));
console.log(list);

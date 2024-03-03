// Piece of date - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// without linked list class
// let first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// with linked class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // -Create a new node using the value passed to the function
    // -If there is no head property on the list,set the head and tail to be the newly created node
    // -Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    // -increment the length by one
    // -Return the linked list
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // -If there are no nodes in the list, return undefined
    // -Loop through the list until you reach the tail
    // -Set the next property of the 2nd to last node to be null
    // -Set the tail to be the 2nd to last node
    // -decrement the length of the list by 1
    // -Return the value of the node removed

    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    // check if length is 0
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.val;
  }

  //Remove from the beginning
  shift() {
    // -If there are no nodes,return undefined
    if (this.length === 0) return undefined;
    // -Store the current head property in a variable
    let current = this.head;
    // -Set the head property to be the current head's next property
    this.head = this.head.next;
    // -Decrement the length by 1
    this.length--;
    // set tail to null
    if (this.length === 0) this.tail = null;
    // -Return the value of the node removed
    return current.val;
  }

  // Add to beginning
  unshift(val) {
    // -This function should accept a value
    // -Create a new node using the value passed to the function
    // -If there is no head property on the list, set the head and tail to be the newly created node
    // -Otherwise set the newly created node's next property to be the current head property on the list
    // -Set the head property on the list to be that newly created node
    // -Increment the length of the list by 1
    // -Return the linked list

    let newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  // get item by index
  get(idx) {
    // -This function should accept an index
    // -If the index is less than zero or greater than or equal to the length of the list, return null
    // -Loop through the list until you reach the index and return the node at that specific index

    if (idx >= this.length || idx < 0) return null;

    let current = this.head;
    let counter = 0;

    while (counter !== idx) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // replace value at certain index
  set(idx, value) {
    // -This function should accept an index and a value
    // -Use your get function to find the specific node
    // -If the node is not found,return false
    // -If the node is found, set the value of that node to be the value passed to the function and return true
    let foundNode = this.get(idx);

    if (!foundNode) return false;

    foundNode.val = value;
    return true;
  }

  // Insert a node at specified index
  insert(idx, value) {
    // -If the index is less than zero or greater than the length, return false
    // -If the index is the same as the length,push a new node to the end of the list
    // -If the index is 0,ushift a new node to the start of the list
    // -Otherwise, using the get method, access the node at the index -1
    // -Set the next property on that node to be the new node
    // -set the next property on the new node to be the previous next
    // -Increment the length
    // -Return true

    let newNode = new Node(value);

    if (idx < 0 || idx > this.length) return false;

    if (idx === this.length) return !!this.push(value);

    if (idx === 0) return !!this.unshift(value);

    let prevNode = this.get(idx - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  // Remove node at a certain index
  remove(idx) {
    // -If the index is less than zero or greater tnan or equal to the length, return undefined
    // -If the index is the same as the length - 1, pop
    // -If the index is 0, shift
    // -Otherwise,using the get method, access the node at the index-1
    // -Set the next property on that node to be the net of the next node
    // -Decrement the length
    // -Return the value of the node removed

    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let prevNode = this.get(idx - 1);
    let currNode = prevNode.next;
    prevNode.next = currNode.next;
    this.length--;
    return currNode.val;
  }

  reverse() {
    // -Swap the head and tail
    // -Create a variable called next
    // -Create a variable called prev
    // -Create a variable called node and initialize it to the head property
    // -Loop through the list
    // -Set next to be the next property on whatever node is
    // -Set the next property on the node to be whatever prev is
    // -Set prev to be value of the node variable
    // -Set the node variable to be the value of the next variable
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

let list = new SinglyLinkedList();
list.push("hey");
list.push("you");
list.push("haha");
list.push("huhu");
// list.push("there");
// list.get(2);

console.log(list);
list.reverse();
console.log(list);

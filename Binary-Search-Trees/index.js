class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node
  inser(value) {
    // - Create a new node
    // - Starting at the root
    // - Check if there is a root, if not - the root now becomes that new node!
    // - If there is a root, check if the value of the new node is greater than or less than the value of the root
    // - If it is greater
    // - Check to see if there is a node to the right
    // - If there is, move to that node and repeat these steps
    // - If there is not, add that node as the right property
    // - If it is less
    // - Check to see if there is a node to the left
    // - If there is, move to that node and repeat these steps
    // - If there is not, add that node as the left property

    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
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

  // Find a node
  find(value) {
    // - Starting at the root
    // - Check if there is a root, if not - we're done searching!
    // - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    // - If not, check to see if the value is greater than or less than the value of the root
    // - If it is greater
    // - Check to see if there is a node to the right
    // - If there is, move to that node and repeat these steps
    // - If there is not, we're done searching!
    // - If it is less
    // - Check to see if there is a node to the left
    // - If there is, move to that node and repeat these steps
    // - If there is not, we're done searching!

    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }
}

const tree = new BinarySearchTree();
tree.inser(10);
tree.inser(5);
tree.inser(13);
tree.inser(11);
tree.inser(2);
tree.inser(16);
tree.inser(7);
console.log(tree.find(13));
console.log(tree.find(8));

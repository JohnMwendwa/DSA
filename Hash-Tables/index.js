class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }

  //   SET
  //   - Accepts a key and a value
  //   - Hashes the key
  //   - Stores the key-value pair in the hash table array via separate chaining

  set(key, value) {
    let idx = this._hash(key);

    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }

    this.keyMap[idx].push([key, value]);
  }

  //  GET
  //  - Accepts a key
  //  - Hashes the key
  //  - Retrieves the key-value pair in the hash table
  //  - If the key isn't found, returns undefined

  get(key) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) return undefined;

    for (let i = 0; i < this.keyMap[idx].length; i++) {
      if (this.keyMap[idx][i][0] === key) return this.keyMap[idx][i][1];
    }
  }

  //   Keys
  //   - Loops through the hash table array and returns an array of keys in the table

  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }

  //  Values
  //  - Loops through the hash table array and returns an array of values in the table
  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }
}

let table = new HashTable(13);

table.set("darkblue", "#0008b");
table.set("salmon", "#fa8072");
table.set("blue", "blue");
table.set("red", "blue");

console.log(table);
console.log(table.get("salmon"));
console.log(table.values());
console.log(table.keys());

// Unoptimied solution
function hash(key, arrayLength) {
  let total = 0;

  for (let i = 0; i < key.length; i++) {
    let char = key[i].charCodeAt(0) - 96;
    total = (total + char) % arrayLength;
  }

  return total;
}

// Optimized solution

function hash(key, arrayLength) {
  let total = 0;
  let PRIME_NUMBER = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i].charCodeAt(0) - 96;
    total = (total * PRIME_NUMBER + char) % arrayLength;
  }

  return total;
}

console.log(hash("pink", 11));
console.log(hash("green", 11));
console.log(hash("purple", 11));

// Topics to explore
// - Why do hash functions use prime numbers?
// - Does making array size a prime number help in hash table implementation?

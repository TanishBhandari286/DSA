let n = 5;
let total = 0;
function sum(x) {
  if (x > n) {
    return;
  }
  total = total + x;
  sum(++x);
  return total;
}

console.log(sum(1));

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

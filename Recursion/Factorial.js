let n = 5;

function fact(n) {
  if (n <= 1) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(n));

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

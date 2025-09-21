function CountDigit(num) {
  let count = 0;
  num = Math.abs(num); // handling -ve numbers by converting them
  while (num > 0) {
    if (num == 0) {
      return 1;
    }
    num = Math.floor(num / 10); // avoid floating point
    count++;
  }
  return count;
}

console.log(CountDigit(259));

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: uses recursion (watch stack depth)
// Easy: Fast/slow pointers uses (middle, cycle detect).
// Medium: Reverse k-group nodes; in-place pointer manipulation.
// Hard: Copy list with random pointer; O(n) time/O(1) extra trick.

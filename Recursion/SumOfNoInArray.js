let arr = [1, 2, 3, 4, 5];
let total = 0;
function arrCount(arr, x = 0) {
  if (x == arr.length) {
    return 0;
  }
  total = total + arr[x];
  x = x + 1;
  arrCount(arr, x);
  return total;
}

console.log(arrCount(arr));

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

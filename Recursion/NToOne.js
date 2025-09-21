let num = 19;
function fun(num) {
  if (num == 0) {
    return;
  }

  console.log(num);

  num -= 1;

  fun(num);
}
console.log(fun(num));

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

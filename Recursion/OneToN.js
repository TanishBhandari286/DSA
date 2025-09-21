let n = 20;
function numprint(x) {

  if(x>n){
    return
  }
console.log(x);
numprint(++x)
  
}
console.log(numprint(1));

// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

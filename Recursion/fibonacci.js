/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2){
        return n
    }
    return fib(n-1)+ fib(n-2)
};
// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

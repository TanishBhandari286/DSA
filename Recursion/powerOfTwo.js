/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1){
        return true
    }else if(n<1|| (n%2!==0)){
        return false
    }
    n = n/2
    isPowerOfTwo(n)
};
// --- Auto Review (DSA) ---
// DSA Interview Questions (auto-generated)
// Easy: Explain the time complexity of binary search and when it applies.
// Medium: Given an array with duplicates, find all unique triplets that sum to zero.
// Hard: Implement a lock-free concurrent queue and discuss memory ordering guarantees.

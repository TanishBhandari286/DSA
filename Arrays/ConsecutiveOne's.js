/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
let count1 = 0
    for(let i = 0; i<nums.length;i++){
 if(nums[i]==1){
    count1++

 }else{
    max = Math.max(count1,max)
    count1 = 0
 }
    }
    return Math.max(count1,max)
};
// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Move zeros to the end in-place while keeping order.
// Medium: Container With Most Water: why pointers meet-in-the-middle works.
// Hard: Trap Rain Water in O(n) with two pointers; derive left/right max logic.

// --- Auto Review (DSA) ---
// DSA Review (Binary Search)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Given a sorted array with duplicates, find first and last occurrence of a target.
// Medium: Peak element in a mountain array. Why two pointers won't work as cleanly?
// Hard: K-th smallest pair distance using BS on answer; justify monotonic predicate.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Detect and remove cycle (Floyd) and find cycle start.
// Medium: Merge two sorted lists; iterative vs. recursive tradeoffs.
// Hard: LRU cache with list+hash; operations and complexity.

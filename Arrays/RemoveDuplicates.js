/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unique = 0;
  let k = 1;
  if (nums.length < 2) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[unique]) {
      unique++;
      nums[unique] = nums[i];
      k++;
    }
  }
  return k;
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

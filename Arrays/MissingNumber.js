/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let arrcount = 0;
  let normalcount = 0;
  for (let i = 0; i < nums.length; i++) {
    arrcount += nums[i];
  }
  for (let j = 1; j < nums.length; j++) {
    normalcount += j;
  }
  return normalcount - arrcount;
};

// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: has nested loops (likely O(n^2) or worse)
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.

// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: has nested loops (likely O(n^2) or worse)
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.

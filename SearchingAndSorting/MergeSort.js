/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));
  return merge(left, right);
};

function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      res.push(right[j]);
      j++;
    } else {
      res.push(left[i]);
      i++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

// --- Auto Review (DSA) ---
// DSA Review (Binary Search)
// Complexity hints: uses recursion (watch stack depth)
// Easy: Explain binary search and its invariants. When does it fail?
// Medium: Search in a rotated sorted array in O(log n); outline pivot detection vs. modified BS.
// Hard: Find median of two sorted arrays in O(log(min(m,n))). Describe partition logic.

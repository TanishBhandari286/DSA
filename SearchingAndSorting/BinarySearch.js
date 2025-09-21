/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// --- Auto Review (DSA) ---
// DSA Review (Binary Search)
// Complexity hints: no obvious hotspots detected
// Easy: Given a sorted array with duplicates, find first and last occurrence of a target.
// Medium: Peak element in a mountain array. Why two pointers won't work as cleanly?
// Hard: K-th smallest pair distance using BS on answer; justify monotonic predicate.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: no obvious hotspots detected
// Easy: Detect and remove cycle (Floyd) and find cycle start.
// Medium: Merge two sorted lists; iterative vs. recursive tradeoffs.
// Hard: LRU cache with list+hash; operations and complexity.

// --- Auto Review (DSA) ---
// DSA Review (Linked List)
// Complexity hints: no obvious hotspots detected
// Easy: Detect and remove cycle (Floyd) and find cycle start.
// Medium: Merge two sorted lists; iterative vs. recursive tradeoffs.
// Hard: LRU cache with list+hash; operations and complexity.

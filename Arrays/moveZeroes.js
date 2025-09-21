/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p1 = 0
    let p2 = nums.length-1

    for(let i = 0; i<nums.length;i++){
        if(nums[i]!=0){
            let temp = nums[p1]
            nums[p1] = nums[i]
            nums[i] = temp
            p1++
        }
    }
};
// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.

// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.

// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Left/right pointer pattern: when is it preferable to hashing?
// Medium: 3Sum (unique triplets). How do you avoid duplicates efficiently?
// Hard: Minimum window substring vs. sliding window with counts; correctness proof.

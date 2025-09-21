/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = arr[0]
    for(let i = 1; i<nums.length;i++){
        ans = ans^nums[i]
    }
    return ans
};
// --- Auto Review (DSA) ---
// DSA Review (Two Pointers)
// Complexity hints: iterative loop(s) present (baseline O(n))
// Easy: Move zeros to the end in-place while keeping order.
// Medium: Container With Most Water: why pointers meet-in-the-middle works.
// Hard: Trap Rain Water in O(n) with two pointers; derive left/right max logic.

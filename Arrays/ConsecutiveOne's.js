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

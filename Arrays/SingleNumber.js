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
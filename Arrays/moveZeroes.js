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
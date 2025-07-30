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
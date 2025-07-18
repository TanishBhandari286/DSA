/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let unique = 0;
   if(nums.length==0){
    return nums.length
   }
   
   for(let i = 0 ; i<nums.length;i++){
    if(nums[i]!=val){
        nums[unique] = nums[i]
        unique++
    }
   }
   return unique
};
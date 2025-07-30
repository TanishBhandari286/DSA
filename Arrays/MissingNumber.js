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

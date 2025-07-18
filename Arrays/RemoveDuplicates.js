/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unique = 0;
  let k = 1;
  if (nums.length < 2) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[unique]) {
      unique++;
      nums[unique] = nums[i];
      k++;
    }
  }
  return k;
};


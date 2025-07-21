/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1copy = nums1;

  let totlen = m + n - 1;
  let mindex = 0;
  let nindex = 0;

  for (let i = 0; i < totlen; i++) {
    if (nums1copy[mindex] <= nums2[nindex]) {
      nums1[i] = nums1copy[mindex];
      mindex++;
    } else {
      nums1[i] = nums2[nindex];
      nindex++;
    }
  }
};

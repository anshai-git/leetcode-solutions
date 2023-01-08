/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n

  if(n == 0 || m == 0){
    for(let i = 0; i < Math.max(n,m); i++) {nums1[i] = (nums1[i] || nums2[i]) || (nums2[i] || nums1[i])}
  } else {
    while(k--) {
      if(nums2[j] == undefined || nums1[i] >= nums2[j]) {
        nums1[k] = nums1[i--]
      } else {
        nums1[k] = nums2[j--]
      }
    }
  }
};

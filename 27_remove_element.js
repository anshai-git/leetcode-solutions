/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
  let tail= nums.length-1

  let i = 0
  while(i <= tail) {
    if(nums[i] == val) {
      nums[i] = nums[tail]
      tail--
    } else {
      i++
    }
  }
  return i
}

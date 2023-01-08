/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let index_by_num = new Map()

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(index_by_num.has(num) && Math.abs(index_by_num.get(num) - i) <= k) return true
    index_by_num.set(num, i)
  }

  return false

};

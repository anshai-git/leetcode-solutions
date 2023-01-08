/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let elements = new Set()

  for(let n of nums) {
    if (elements.has(n)) return true
    elements.add(n)
  }

  return false
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if(nums.length == 1) return nums[0]
  return nums.reduce((acc, curr) => acc ^ curr, 0)
  
  // const values = new Set()

  // for(let num of nums) {
  //   if(values.has(num)) {
  //     values.delete(num)
  //   } else {
  //     values.add(num)
  //   }
  // }
  // return values.values().next().value
};

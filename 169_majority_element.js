/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let charMap = new Map()
    if(nums.length == 1) return nums[0]

    for (let num of nums) {
      if(charMap.has(num)) {
        let new_val = charMap.get(num) + 1
        charMap.set(num, charMap.get(num) + 1)
        if(new_val > nums.length/2) return num
      } else {
        charMap.set(num, 1)
      }
    }

};

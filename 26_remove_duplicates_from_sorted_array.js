/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let swap_index = 0
    let current_num = -101

    for(let i = 0; i < nums.length; i++) {
      if(nums[i] != current_num) {
        nums[swap_index++] = nums[i]
        current_num = nums[i]
      }
    }
    return swap_index
};

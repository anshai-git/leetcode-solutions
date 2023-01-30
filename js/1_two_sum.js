/**
    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution,
    and you may not use the same element twice.

    You can return the answer in any order.

    # Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    # Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

    # Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]

    Constraints:
    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

    # Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

function two_sum(nums, target) {
    // Create a map to cache each number that we check
    let index_by_number = new Map()

    // Go through each number in the list
    // At each iteration we have to check if the cache contains number
    // that with the current number ads up to the target:
    // with other words:
    // Check if the cache contains the difference between the target and the current number

    for (let [index, num] of nums.entries()) {

        // compute the difference between the target and the current number
        let difference = target - num

        // check if the map contains the difference and return appropriately or continue the cycle
        if (index_by_number.has(difference)) return [index, index_by_number.get(difference)]
        
        // save the number at each iteration
        index_by_number.set(num, index)
    }
}

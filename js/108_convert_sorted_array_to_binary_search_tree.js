/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(!nums.length) return null
  return build_tree(nums, 0, nums.length-1)
};

 var build_tree = function(arr, left, right){
    if(left > right) return null

    const mid = Math.floor(left + (right - left) / 2)
    const node = new TreeNode(arr[mid]);
    node.left = build_tree(arr, left, mid - 1)
    node.right = build_tree(arr, mid + 1, right)
    
    return node
    }

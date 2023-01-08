/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(!root && targetSum >= 0) return false
  return get_sum(root, targetSum, 0)
}

var get_sum = function(node, target, sum) {
  if(!node) return false
  if((!node.left && !node.right) && (target == sum + node.val)) return true
  return get_sum(node.left, target, sum + node.val) || get_sum(node.right, target, sum + node.val)
}

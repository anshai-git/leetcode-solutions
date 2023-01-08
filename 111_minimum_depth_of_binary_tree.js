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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    let result = {value: null}
    count_nodes(root, 1, result)
    return result.value
}

var count_nodes = function(node, index, res) {
  if(!node) return
  if(node.left == null && node.right == null && 
    (!res.value || index < res.value)) {
      res.value = index
  }
  count_nodes(node.left, index+1, res), count_nodes(node.right, index+1, res)
}

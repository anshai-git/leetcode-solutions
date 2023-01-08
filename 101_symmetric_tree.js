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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return is_mirror(root, root)
};

var is_mirror = function(root1, root2) {
  if(!root1 || !root2) return root1 == root2

  return (root1.val == root2.val) && is_mirror(root1.left, root2.right) && is_mirror(root1.right, root2.left)
}

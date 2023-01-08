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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let list = []

  // rec(root, list)

  return list
}

let iter = function(node, list) {
  let stack = []


}

let rec = function(node, list) {
  if(!node) return
  
  rec(node.left, list)
  rec(node.right, list)
  if(node?.val) list.push(node.val)
}

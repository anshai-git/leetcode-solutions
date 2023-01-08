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
var preorderTraversal = function(root) {
  let list = []

  iter(root, list)
  return list
  // rec(root, list)
  // return list
}

let iter = function(root, list) {
  if(!root) return []

  let stack = []
  let current = root

  while(current || stack.length) {
    while(current) {
      list.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
}

var rec = function(node, list) {
  if(!node) return

  list.push(node.val)
  rec(node.left, list)
  rec(node.right, list)
}

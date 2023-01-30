function invert(node) {
  if (!node) return

  invert(node.left)
  invert(node.right)

  if (node.left && node.right) {
    let temp = node.left?.val
    node.left.val = node.right.val 
    node.right.val = temp
  }
}

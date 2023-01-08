/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  return reverse_ls(null, head)
};

function reverse_ls(current, next) {
  if (!next) return current

  let res = reverse_ls(next, next.next)
  next.next = current
  return res
}

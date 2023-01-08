/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let current = head, prev = null

  while (current) {
    if (current == head && current.val == val) {
      head = current = head.next
    } else if (current.val == val) {
      current = current.next
      prev.next = current
    } else {
      prev = current
      current = current.next
    }
  }

  return head
};

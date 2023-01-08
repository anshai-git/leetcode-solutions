/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let current = head

  let pos = 0
  while(current) {
    current.pos = pos++
    if(current.next && current.next.pos < pos) return true
    current = current.next
  }

  return false
}

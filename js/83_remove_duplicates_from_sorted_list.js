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
var deleteDuplicates = function(head) {
  let current = head
  let result_head = current

  while(head?.val != null) {
    if(current.val != head.val) {
      current.next = head
      current = current.next
    }
    head = head.next
  }

  if(current?.val == current?.next?.val && current != null) current.next = null

  return result_head
};

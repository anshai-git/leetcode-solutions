/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    if(l1 === null) {
      return l2
    }

    if(l2 === null) {
      return l1
    }

    let full = new ListNode()
    let full_iterator = full
    while (l1 && l2) {
      if(l1.val <= l2.val) {
        full_iterator.next = l1
        l1 = l1.next
      } else {
        full_iterator.next = l2
        l2 = l2.next
      }
      full_iterator = full_iterator.next
    }

    if(l1) {
      full_iterator.next = l1
    } else {
      full_iterator.next = l2
    }

  return full.next
};

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 };
 
 /**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing 
 * together the nodes of the first two lists.
 * 
 * Return the head of the merged linked list.
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 const mergeTwoLists = (l1, l2) => {
  let list = new ListNode();
  let head = list;
  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          list.next = new ListNode(l1.val);
          l1 = l1.next;
      } else {
          list.next = new ListNode(l2.val);
          l2 = l2.next;
      }
      list = list.next
  }
  
  if (l1 !== null)
      list.next = l1
  if (l2 !== null)
      list.next = l2
  
  return head.next;
};

module.exports = { mergeTwoLists };
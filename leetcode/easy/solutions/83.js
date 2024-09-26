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
const deleteDuplicates = (a) => {
  let b=a;
  while(b!=null&&b.next!=null)b.val==b.next.val?b.next=b.next.next:b=b.next; 
  return a;  
};
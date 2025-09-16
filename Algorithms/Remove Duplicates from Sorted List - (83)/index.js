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

    let el = head;

    while ( el && el.next)
    {
        if (el.val == el.next.val)
        {
            el.next = el.next.next;
        }
        else{
            el = el.next
        }       
    }

    return head;
};
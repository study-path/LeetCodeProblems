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
var mergeTwoLists = function(list1, list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;
    var head = list1;
        while(list1.next!=null){
        list1 = list1.next;
    }
    var count = 0;
    list1.next = list2;
    var temp = head;
    while(temp!=null){
        temp = temp.next;
        count++;
    }
    for(var i = 0; i< count-1;i++){
        temp1 = head;
        for(var j=0; j<count-1-i;j++){
            if(temp1.val>temp1.next.val){
                var temp2 = temp1.val;
                temp1.val = temp1.next.val;
                temp1.next.val = temp2;
            }
            temp1 = temp1.next;
        }
    }
    return head;  
    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var a = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null,
        }
    }
};
var b = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null,
        }
    }
};

var mergeTwoLists = function(l1, l2) {
    let l3 = null;
    let tail = null;
    while(l1 ||  l2) {
        let node = null;
        if (l1 && l2) {
            if (l1.val <= l2.val) {
                node = l1;
                l1 = l1.next;

                if (l3 === null) {
                    l3 = node;
                    tail = node;
                } else {
                    tail.next = node;
                    tail = node;
                }
            } else {
                node = l2;
                l2 = l2.next;
                
                if (l3 === null) {
                    l3 = node;
                    tail = node;
                } else {
                    tail.next = node;
                    tail = node;
                }
            }
        } else if (l1) {
            node = l1;
            if (l3 === null) {
                l3 = node;
                tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
        } else if (l2) {
            node = l2;
            if (l3 === null) {
                l3 = node;
                tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
        }
        node.next = null;
    }
    return l3;
};
// var mergeTwoLists = function(l1, l2) {
//     const arr = l1.concat(l2);
//     return arr.sort();
// };
console.log( mergeTwoLists(a, b));
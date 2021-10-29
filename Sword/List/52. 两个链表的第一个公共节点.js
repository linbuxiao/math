/**
 * 输入两个链表，找出它们的第一个公共节点。
 * 如下面的两个链表：
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export const getIntersectionNode = function (headA, headB) {
  // 1. 相交的不能是索引0
  // 2. 不能改变原链表
  // 3. 返回的应该是一个引用

  let A = headA;
  let B = headB;
  while (A !== B) {
    A = A ? A.next : headB;
    B = B ? B.next : headA;
  }

  return A;
};

/**
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
 *
 * 给定一个链表: 1->2->3->4->5, 和 k = 2.
 * 4->5.
 */
import {ListNode} from "../../Utils";

// 快慢双指针，应该是最优解了
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if(!head) return head
  let slow = head
  let fast = head
  while (k - 1 && fast.next) {
    fast = fast.next
    k--
  }
  while (slow.next && fast.next !== null) {
    slow = slow.next
    fast = fast.next
  }

  return  slow
};
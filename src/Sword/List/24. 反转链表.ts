/**
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 1->2->3->4->5->NULL
 * 5->4->3->2->1->NULL
 */
import { ListNode } from "../../Utils";

// 这里的写法是拆分为数组后再拼接
export function reverseList_1(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let cur = head;
  let prev: ListNode;
  let arr = [];
  while (cur) {
    prev = cur;
    cur = cur.next!;
    prev.next = null;
    arr.unshift(prev);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }

  return arr[0];
}

// 两两替换
export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let left = null;
  let cur: ListNode | null = head;

  while (cur) {
    let right = cur.next as ListNode;
    cur.next = left;
    left = cur;
    cur = right;
  }

  return left;
}

/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * head = [1,3,2]
 * [2,3,1]
 */

import { ListNode } from "../../Utils";

export function reversePrint(head: ListNode | null): number[] {
  let s: number[] = [];
  let cur = head;
  while (cur) {
    s.unshift(cur.val);
    cur = cur.next;
  }

  return s;
}

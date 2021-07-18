/**
 *  给定一个单链表 L 的头节点 head ，单链表 L 表示为：

 L0→ L1→ … → Ln-1→ Ln
 请将其重新排列后变为：

 L0 → Ln→ L1→ Ln-1→ L2→ Ln-2→ …

 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

import { ListNode } from "../Utils";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */

export function reorderList(head: ListNode | null): void {
  if (!head) return;
  let cur: ListNode | null = head;
  let arr = [];
  while (cur) {
    // 保存在数组内后，保持索引不变。
    arr.push(cur);
    cur = cur.next;
  }

  let left = 1;
  let right = arr.length - 1;
  while (left <= right) {
    head.next = arr[right];
    right--;
    head = head.next;
    head.next = arr[left];
    left++;
    // 此时head.next已为有值
    head = head.next;
  }
  head.next = null;
}

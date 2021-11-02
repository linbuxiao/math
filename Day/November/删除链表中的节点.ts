// 请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点head ，只能直接访问 要被删除的节点 。

import { ListNode } from "../../type.ts";

// 题目数据保证需要删除的节点 不是末尾节点 。

export function deleteNode(root: ListNode | null): void {
  if (root === null || root.next === null) return;
  root.val = root.next.val;
  root.next = root.next.next;
}

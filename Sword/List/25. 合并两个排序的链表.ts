/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */
import { ListNode } from "../../Utils";

// 插入法太费劲了。我们试一下单起一个节点去接
export function mergeTwoLists_1(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  let p1: ListNode | null = l1;
  let p2: ListNode | null = l2;
  while (p1 && p2) {
    p1.next = null; // 截断第一个节点
    while (p2.next) {
      if (p2.next.val < p1.val) {
        // 向后过度
        p2 = p2.next;
      } else {
        // 插入
        let next: any = p2.next;
        p2.next = p1;
        p1.next = next;
        p2 = p2.next;
        break;
      }
    }
    p1 = p1.next;
  }

  return l2;
}

// 构造新链表
export function mergeTwoLists_2(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let p = new ListNode();
  let cur = p;
  let [p1, p2] = [l1, l2];
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      cur.next = p1;
      p1 = p1.next;
    } else {
      cur.next = p2;
      p2 = p2.next;
    }
    cur = cur.next;
  }

  p.next = p1 ? p1 : p2;

  return p;
}

// 递归解法
export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

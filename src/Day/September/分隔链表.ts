// 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。

import { ListNode } from "../../Utils";

// 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。

// 这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。

// 返回一个由上述 k 部分组成的数组。

export function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  // 具体含义为：如何把一个整数分割成k个部分，且两部分差值不能超过1。
  // 取余，然后从第一个开始遍历往后加1，直到把余数加完

  // 遍历一遍获取总长度
  if (head === null) return new Array(k).fill(null);
  let len = 1;
  let cur: ListNode | null = head;
  while (cur.next) {
    cur = cur.next;
    len++;
  }

  let n = len % k;
  const m = new Array(k).fill(Math.floor(len / k));

  while (n > 0) {
    for (let i = 0; i < m.length && n > 0; i++) {
      m[i]++;
      n--;
    }
  }
  const ans: (ListNode | null)[] = [];

  cur = head;
  for (let i = 0; i < m.length; i++) {
    if (m[i] === 0) {
      ans.push(null);
      continue;
    }
    let p = 0;
    let node = new ListNode();
    let c = node;
    while (p < m[i] && cur) {
      c.val = cur.val;
      if (p !== m[i] - 1) {
        c.next = new ListNode();
        c = c.next;
      }
      cur = cur.next;
      p++;
    }
    ans.push(node);
  }

  return ans;
}

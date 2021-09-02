// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function getKthFromEnd(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (head === null) return null;

  // 获取链表长度
  function getLen(head: ListNode | null): number {
    if (head === null) return 0;

    let len = 0;
    let cur: ListNode | null = head;
    while (cur) {
      len++;
      cur = cur.next;
    }

    return len;
  }

  let len = getLen(head) - k;

  let cur: ListNode | null = head;

  while (len > 0 && cur) {
    cur = cur.next;
    len--;
  }

  return cur;
}

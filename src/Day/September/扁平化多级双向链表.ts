// 多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。

// 给你位于列表第一级的头节点，请你扁平化列表，使所有结点出现在单级双链表中。

class DNode {
  val: number;
  prev: DNode | null;
  next: DNode | null;
  child: DNode | null;
  constructor(val?: number, prev?: DNode, next?: DNode, child?: DNode) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

export function flatten(head: DNode | null): DNode | null {
  let newHead = new DNode();
  let prev: DNode | null = null;
  let cur = newHead;
  function reconcile(head: DNode | null) {
    if (head === null) return;
    cur.val = head.val;
    if (head.child || head.next) {
      cur.next = new DNode();
      prev = cur;
      cur = cur.next;
      cur.prev = prev;
    }
    if (head.child) {
      reconcile(head.child);
    }
    if (head.next) {
      reconcile(head.next);
    }
  }

  reconcile(head);
  prev!.next = null;
  return newHead;
}

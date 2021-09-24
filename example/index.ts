import { flatten } from "../src/Day/September/扁平化多级双向链表";

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

console.log(flatten(new DNode(1, undefined, new DNode(2, undefined, null))));

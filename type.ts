export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class NestedInteger {
  _integer: number | null;
  _list: NestedInteger[];
  constructor(val?: number) {
    this._integer = val === undefined ? null : val;
    this._list = [];
  }

  isInteger(): boolean {
    return this._integer !== null;
  }

  getInteger(): number | null {
    return this._integer;
  }

  setInteger(i: number) {
    this._integer = i;
  }

  getList(): NestedInteger[] {
    return this._list;
  }

  add(ni: NestedInteger) {
    this._list.push(ni);
    this._integer = null;
  }
}

// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

class NtreeNode {
  val: number;
  children: NtreeNode[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function levelOrder(root: NtreeNode | null): number[][] {
  if (root === null) return [];

  const queue: NtreeNode[] = [];
  queue[0] = root;
  const res: number[][] = [];
  res[0] = [root.val];

  while (queue.length) {
    const tmp: NtreeNode[] = [];
    const values: number[] = [];
    while (queue.length) {
      const node = queue.shift()!;
      if (node.children.length !== 0) {
        for (let i = 0; i < node.children.length; i++) {
          tmp.push(node.children[i]);
          values.push(node.children[i].val);
        }
      }
    }
    queue.push(...tmp);
    values.length && res.push(values);
  }

  return res;
}

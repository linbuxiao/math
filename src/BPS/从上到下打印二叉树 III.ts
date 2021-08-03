// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

import { TreeNode } from "../Utils";

export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  let num = 0; // 一层
  const queue: TreeNode[] = [];
  queue[0] = root;
  const res: number[][] = [];
  res[0] = [root.val];

  while (queue.length) {
    const tmp: TreeNode[] = [];
    const values: number[] = [];
    num++;
    while (queue.length) {
      const node = queue.shift()!;
      if (node.left) {
        tmp.push(node.left);
        values.push(node.left.val);
      }
      if (node.right) {
        tmp.push(node.right);
        values.push(node.right.val);
      }
    }
    if (num % 2) {
      // 右 -> 左
      values.reverse();
    }
    queue.push(...tmp);
    values.length && res.push(values);
  }

  return res;
}

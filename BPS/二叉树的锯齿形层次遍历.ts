// 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

import { TreeNode } from "../Utils";

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
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

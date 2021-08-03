// 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

import { TreeNode } from "../Utils";

// 之前是自顶向上，这次是自下至顶

export function levelOrderBottom(root: TreeNode | null): number[][] {
  // 把所有节点从右至左遍历到队列里，然后挨个弹出
  // 队列实现
  if (root === null) return [];
  const queue: TreeNode[] = [];
  const res: number[][] = [];
  res.push([root.val]);
  queue.push(root);
  while (queue.length) {
    const tmp: TreeNode[] = [];
    const values: number[] = [];
    while (queue.length) {
      const node = queue.shift()!;
      if (node.left !== null) {
        tmp.push(node.left);
        values.push(node.left.val);
      }
      if (node.right !== null) {
        tmp.push(node.right);
        values.push(node.right.val);
      }
    }
    if (values.length) {
      res.push(values);
    }
    queue.push(...tmp);
  }

  return res.reverse();
}

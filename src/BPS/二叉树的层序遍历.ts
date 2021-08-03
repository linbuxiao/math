// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

import { TreeNode } from "../Utils";

export function levelOrder(root: TreeNode | null): number[][] {
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

  return res;
}

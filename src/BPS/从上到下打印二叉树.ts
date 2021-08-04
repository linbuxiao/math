// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

import { TreeNode } from "../Utils";

export function levelOrder(root: TreeNode | null): number[] {
  if (root === null) return [];

  const queue: TreeNode[] = [];
  queue[0] = root;
  const res: number[] = [];
  res[0] = root.val;

  while (queue.length) {
    const tmp: TreeNode[] = [];
    while (queue.length) {
      const node = queue.shift()!;
      if (node.left) {
        tmp.push(node.left);
        res.push(node.left.val);
      }
      if (node.right) {
        tmp.push(node.right);
        res.push(node.right.val);
      }
    }

    queue.push(...tmp);
  }

  return res;
}

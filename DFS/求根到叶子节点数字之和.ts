/**
 * 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
 * 每条从根节点到叶节点的路径都代表一个数字
 */

import { TreeNode } from "../Utils";

export function sumNumbers(root: TreeNode | null): number {
  const helper = (root: TreeNode | null, sum = 0): number => {
    if (root === null) return 0;
    const val = sum * 10 + root.val;
    if (root.left === null && root.right === null) return val;

    return helper(root.left, val) + helper(root.right, val);
  };

  return helper(root, 0);
}

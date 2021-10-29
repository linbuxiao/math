/**
 * 给定一个二叉树，找出其最大深度。
 */

import { TreeNode } from "../Utils";

export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
}

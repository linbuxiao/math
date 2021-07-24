/**
 * 给定一个二叉树，找出其最小深度。
 */

import { TreeNode } from "../Utils";

export function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  if (left === 0 || right === 0) return left + right + 1;
  return Math.min(left, right) + 1;
}

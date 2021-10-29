/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 */

import { TreeNode } from "../Utils";

export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let leftDeep = maxDepth(root.left);
  let rightDeep = maxDepth(root.right);

  return Math.max(leftDeep, rightDeep) + 1;
}

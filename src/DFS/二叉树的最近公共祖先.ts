/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 */

import { TreeNode } from "../Utils";

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === p || root === q || root === null) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) return root;
  if (left === null && right === null) return null;

  return left === null ? right : left;
}

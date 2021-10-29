/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

import { TreeNode } from "../Utils";

export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;

  const helper = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    return helper(p.left, q.right) && helper(p.right, q.left);
  };

  return helper(root.left, root.right);
}

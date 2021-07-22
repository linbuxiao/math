/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

import { TreeNode } from "../Utils";

export function isSymmetric(root: TreeNode | null): boolean {
  if(root === null) return false

  if(isSymmetric(root.left) === isSymmetric(root.right)) {
    return true
  }
  return false
};
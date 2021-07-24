/**
 * 翻转一棵二叉树。
 */

import { TreeNode } from "../Utils";

export function invertTree(root: TreeNode | null): TreeNode | null {
  // const swap = (root: TreeNode | null) : TreeNode | null => {

  // }

  if (root === null) return null;
  if (root.left === null && root.right === null) return root;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

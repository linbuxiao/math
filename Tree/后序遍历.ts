// 二叉树的后序遍历

import { TreeNode } from "../Utils";

function postorderTraversal(
  root: TreeNode | null,
  res: number[] = [],
): number[] {
  if (root === null) return res;
  postorderTraversal(root.left, res);
  postorderTraversal(root.right, res);
  res.push(root.val);
  return res;
}

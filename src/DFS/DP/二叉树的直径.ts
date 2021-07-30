/**
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 */

import { TreeNode } from "../../Utils";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;
  const dfs = (root: TreeNode | null) => {
    if (root === null) return 0;
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);
    res = Math.max(res, left + right);
    return Math.max(left + right) + 1;
  };

  dfs(root);
  return res;
}

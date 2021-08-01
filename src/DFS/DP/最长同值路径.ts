// 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

import { TreeNode } from "../../Utils";

export function longestUnivaluePath(root: TreeNode | null): number {
  if (root === null) return 0;

  let max = 0;

  const dfs = (root: TreeNode | null): number => {
    if (root === null) return 0;
    let num = 1;
    const left = dfs(root.left);
    const right = dfs(root.right);
    if (root.left !== null) {
      if (root.left.val === root.val) num = left + 1;
    }

    if (root.right !== null) {
      if (root.right.val === root.val) num = Math.max(num, right + 1);
    }

    if (root.left !== null && root.right !== null) {
      if (root.right.val === root.val && root.left.val === root.val) {
        max = Math.max(left + right + 1, max);
      }
    }

    max = Math.max(num, max);

    return num;
  };

  dfs(root);
  return max - 1;
}

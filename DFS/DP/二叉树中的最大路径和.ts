/**
 * 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

 * 路径和 是路径中各节点值的总和。

 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 */

import { TreeNode } from "../../Utils";

export function maxPathSum(root: TreeNode | null): number {
  if (root === null) return 0;
  let res = root.val;

  const dfs = (root: TreeNode | null): number => {
    if (root === null) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    res = Math.max(
      res,
      left + right + root.val,
      left + root.val,
      right + root.val,
      root.val,
    );
    return Math.max(left, right, 0) + root.val;
  };

  dfs(root);

  return res;
}

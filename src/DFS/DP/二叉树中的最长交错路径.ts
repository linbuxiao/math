/**
 * 给你一棵以 root 为根的二叉树，二叉树中的交错路径定义如下：

 * 选择二叉树中 任意 节点和一个方向（左或者右）。
 * 如果前进方向为右，那么移动到当前节点的的右子节点，否则移动到它的左子节点。
 * 改变前进方向：左变右或者右变左。
 * 重复第二步和第三步，直到你在树中无法继续移动。
 * 交错路径的长度定义为：访问过的节点数目 - 1（单个节点的路径长度为 0 ）。

 * 请你返回给定树中最长 交错路径 的长度。
 */

import { TreeNode } from "../../Utils";

export function longestZigZag(root: TreeNode | null): number {
  if (root === null) return 0;
  let max = 0;

  const dfs = (root: TreeNode | null): [number, number] => {
    if (root === null) return [0, 0];

    const left = dfs(root.left);
    const right = dfs(root.right);
    let l = left[1] + 1;
    let r = right[0] + 1;

    max = Math.max(l, r, max);

    return [l, r];
  };

  dfs(root);
  return max - 1;
}

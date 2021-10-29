/**
 * 给定一个二叉树，你需要找出二叉树中最长的连续序列路径的长度。
 * 请注意，该路径可以是递增的或者是递减。例如，[1,2,3,4] 和 [4,3,2,1] 都被认为是合法的，而路径 [1,2,4,3] 则不合法。另一方面，路径可以是 子-父-子 顺序，并不一定是 父-子 顺序。
 */

import { TreeNode } from "../../Utils";

// 这道题不一定是父子关系
// 且可以是递减

// 不一定是子父关系，带来的影响是，可以以一个节点作为根节点，而非单选一边

// 首先我们还是判断是否是一个连续序列

// 觉得这道题可能 可以用回溯去解决。但是回溯更适合做查找，而不是计数。计数的话理想解还是维护一个最大值。

export function longestConsecutive(root: TreeNode | null): number {
  if (root === null) return 0;
  let max = 0;

  const dfs = (root: TreeNode | null) => {
    if (root === null) return [0, 0];
    let inr = 1; // 升序
    let der = 1; // 降序

    let left = dfs(root.left);
    let right = dfs(root.right);

    if (root.left) {
      if (root.left.val === root.val + 1) inr = left[0] + 1;
      if (root.left.val === root.val - 1) der = left[1] + 1;
    }

    if (root.right) {
      if (root.right.val === root.val + 1) inr = Math.max(right[0] + 1, inr);
      if (root.right.val === root.val - 1) der = Math.max(right[1] + 1, der);
    }

    max = Math.max(max, inr + der - 1);

    return [inr, der];
  };

  dfs(root);

  return max;
}

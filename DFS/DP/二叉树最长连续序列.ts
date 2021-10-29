/**
 * 给你一棵指定的二叉树，请你计算它最长连续序列路径的长度。
 * 该路径，可以是从某个初始结点到树中任意结点，通过「父 - 子」关系连接而产生的任意路径。
 * 这个最长连续的路径，必须从父结点到子结点，反过来是不可以的。
 */

import { TreeNode } from "../../Utils";

export function longestConsecutive(root: TreeNode | null): number {
  if (root === null) return 0;
  let max = 0;

  // 每次都返回一个数， 没有则返回0， 有的则 + 1
  const dfs = (root: TreeNode | null, num: number, lastNum: number): number => {
    // console.log(max)
    if (root === null) return num;
    if (root.val === lastNum + 1) {
      const left = dfs(root.left, num, root.val);
      const right = dfs(root.right, num, root.val);
      max = Math.max(left, right, max);
      return Math.max(left, right) + 1;
    }

    const left = dfs(root.left, 1, root.val);
    const right = dfs(root.right, 1, root.val);
    max = Math.max(left, right, max);
    return num;
  };

  dfs(root, 1, root.val - 1);

  return max;
}

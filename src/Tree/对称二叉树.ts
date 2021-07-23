/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

import { TreeNode } from "../Utils";

// 序列化对比法
export function isSymmetric(root: TreeNode | null): boolean {
  // 遍历左树，并序列化到转化为字符串。
  // 遍历右数，期间反转所有左右树，判断是否相等

  if (root === null) return true;

  const dfsHelper = (root: TreeNode | null, reverse = false) => {
    let node = "";
    if (!root) return node;
    node = dfs(root, reverse);
    return node;
  };

  const dfs = (root: TreeNode | null, reverse = false): string => {
    if (root === null) return "";

    const left = dfsHelper(root.left, reverse);
    const right = dfsHelper(root.right, reverse);

    if (reverse) {
      return `root${root.val}-left${right}-right${left}`;
    }
    return `root${root.val}-left${left}-right${right}`;
  };

  console.log(dfs(root.left));
  console.log(dfs(root.right, true));

  if (dfs(root.left) === dfs(root.right, true)) {
    return true;
  }

  return false;
}

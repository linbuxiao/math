/**
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 */

import { TreeNode } from "../Utils";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 递归解法
// 1. 确定函数的 参数 和 返回值
// 2. 确定终止条件
// 3. 确定单层递归的逻辑
export function preorderTraversal_1(
  root: TreeNode | null,
  res: number[] = []
): number[] {
  if (!root) return res;
  res.push(root.val);
  preorderTraversal_1(root.left, res);
  preorderTraversal_1(root.right, res);
  return res;
}

export function preorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (root === null) return;
    res.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return res;
}

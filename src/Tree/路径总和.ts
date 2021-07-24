// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 叶子节点 是指没有子节点的节点。

// 输入：root = [1,2,3], targetSum = 5
// 输出：false

import { TreeNode } from "../Utils";

// 递归法的思路是
// 访问每一个节点时，用sum 减去 当前节点累加的值，如果下一个为这个值，并且它为叶子节点。则返回true。
// 如果都没有，则返回false
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  if (root.left === null && root.right === null) return root.val === targetSum;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

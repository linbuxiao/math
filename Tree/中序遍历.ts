// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

import { TreeNode } from "../Utils";

function inorderTraversal(root: TreeNode | null, res: number[] = []): number[] {
  if (!root) return res;
  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);
  return res;
}

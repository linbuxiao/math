/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 * root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 3
 */

import { TreeNode } from "../Utils";

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  // 这其实是一个搜索问题，但是我没写过搜素（干
  // 如果一个节点搜索左边为true，搜索右边也为true，那么这个节点就是父节点

  // 递归解法

  if (root === null || root === p || root === q) return root; // 这里就是搜索

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) return root;
  if (left === null && right === null) return null;

  return left === null ? right : left;
}

/**
 * 给定一个根为 root 的二叉树，每个节点的深度是 该节点到根的最短距离 。
 * 如果一个节点在 整个树 的任意节点之间具有最大的深度，则该节点是 最深的 。
 * 一个节点的 子树 是该节点加上它的所有后代的集合。
 * 返回能满足 以该节点为根的子树中包含所有最深的节点 这一条件的具有最大深度的节点。
 */

import { TreeNode } from "../../Utils";

export function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const dfs = (
    root: TreeNode | null,
    num: number,
  ): { root: TreeNode | null; num: number } => {
    if (root === null) return { root, num: num - 1 };
    const left = dfs(root.left, num + 1);
    const right = dfs(root.right, num + 1);

    if (left.num === right.num) return { root, num: left.num };

    return left.num > right.num ? left : right;
  };

  const res = dfs(root, 0);

  return res.root;
}

/**
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 */

// 序列化递归处理
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

import { TreeNode } from "../Utils";

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const map = new Map<string, number>();
  const result: Array<TreeNode> = [];
  const dfs = (
    root: TreeNode | null,
    map: Map<string, number>,
    result: Array<TreeNode>,
  ): string => {
    if (!root) return "";
    let str = `${root.val}-${dfs(root.left, map, result)}-${
      dfs(
        root.right,
        map,
        result,
      )
    }`;
    if (map.has(str)) {
      map.set(str, map.get(str)! + 1);
      if (map.get(str) === 2) result.push(root);
    }

    return str;
  };

  dfs(root, map, result);
  return result;
}

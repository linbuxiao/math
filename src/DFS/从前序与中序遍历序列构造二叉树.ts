/**
 * 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
 */

import { TreeNode } from "../Utils";

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const map = new Map(inorder.map((v, i) => [v, i]));
  let rootIndex = 0;

  const helper = (l: number, r: number): TreeNode | null => {
    if (l > r) return null;
    const index = map.get(preorder[rootIndex])!;
    const node = new TreeNode(preorder[rootIndex]);
    rootIndex++;
    node.left = helper(l, index - 1);
    node.right = helper(index + 1, r);
    return node;
  };

  return helper(0, inorder.length - 1);
}

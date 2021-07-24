/**
 * 返回与给定前序遍历 preorder 相匹配的二叉搜索树（binary search tree）的根结点。
 *
 * [8,5,1,7,10,12]
 * [8,5,10,1,7,null,12]
 */

import { TreeNode } from "../Utils";

export function bstFromPreorder(preorder: number[]): TreeNode | null {
  const middle = [...preorder].sort((a, b) => a - b);
  const map = new Map(middle.map((v, i) => [v, i]));
  let rootIndex = 0;

  const helper = (l: number, r: number): TreeNode | null => {
    if (l > r) return null;
    const node = new TreeNode(preorder[rootIndex]);
    const index = map.get(node.val)!;
    rootIndex++;
    node.left = helper(l, index - 1);
    node.right = helper(index + 1, r);
    return node;
  };

  return helper(0, preorder.length - 1);
}

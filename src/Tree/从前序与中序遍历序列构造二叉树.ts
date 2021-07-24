/**
 * 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 */

import { TreeNode } from "../Utils";

export function buildTree_1(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  // 那么前序的特点就是，最前面的元素为root
  if (preorder.length === 0) return null;

  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  if (preorder.length === 1) return root;

  let rootIndex: number;

  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === rootVal) {
      rootIndex = i;
      break;
    }
  }

  // 切割中序数组
  const leftInorder = inorder.slice(0, rootIndex!);
  const rightInorder = inorder.slice(rootIndex! + 1);

  // 切割前序数组
  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);

  root.left = buildTree_1(leftPreorder, leftInorder);
  root.right = buildTree_1(rightPreorder, rightInorder);

  return root;
}

// 减少遍历次数
// 不关心切割前序队列，只关心根节点位置
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const map = new Map(inorder.map((v, i) => [v, i]));
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

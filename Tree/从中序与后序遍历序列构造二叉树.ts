/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 你可以假设树中没有重复的元素。
 *
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 *
 * 给出如下二叉树：
 * [3,9,20,null,null,15,7]
 */

// 特点
// 后序遍历的最后一个节点必为根节点

import { TreeNode } from "../Utils";

// 切割法
export function buildTree_1(
  inorder: number[],
  postorder: number[],
): TreeNode | null {
  if (postorder.length === 0) return null;

  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);

  if (postorder.length === 1) return root;

  let rootIndex: number;

  // 拿到根节点在中序中的索引，分割
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === rootVal) {
      rootIndex = i;
      break;
    }
  }

  // 切割中序数组，得到 中序左数组和中序右数组
  // 左闭右开区间
  const leftInorder = inorder.slice(0, rootIndex!);
  const rightInorder = inorder.slice(rootIndex! + 1);

  // 切割后序数组，得到 后序左数组和后序右数组
  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(
    leftInorder.length,
    postorder.length - 1,
  );

  root.left = buildTree_1(leftInorder, leftPostorder);
  root.right = buildTree_1(rightInorder, rightPostorder);

  return root;
}

// 不切割多次的做法
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const n = inorder.length;
  let postIndex = n - 1;
  const map = new Map(inorder.map((v, i) => [v, i]));
  const helper = (l: number, r: number): TreeNode | null => {
    if (l > r) return null;
    const node = new TreeNode(postorder[postIndex]);
    const index = map.get(node.val)!;
    postIndex--;
    node.right = helper(index + 1, r);
    node.left = helper(l, index - 1);
    return node;
  };

  return helper(0, n - 1);
}

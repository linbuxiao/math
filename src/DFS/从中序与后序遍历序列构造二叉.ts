/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 */

import { TreeNode } from "../Utils";

export function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  const n = inorder.length;
  const map = new Map(inorder.map((v, i) => [v, i]));
  let rootIndex = n - 1;

  const helper = (l: number, r: number): TreeNode | null => {
    if (l > r) return null;
    const node = new TreeNode(postorder[rootIndex]);
    const index = map.get(node.val)!;
    rootIndex--;

    // 需要按照根右左的顺序遍历
    node.right = helper(index + 1, r);
    node.left = helper(l, index - 1);

    return node;
  };

  return helper(0, n - 1);
}

// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

import { TreeNode } from "../../Utils";

// @递归
function kthSmallest_1(root: TreeNode | null, k: number): number {
  /**
   * 二叉搜索树的特性：
   * 1. 结点的左子树只包含小于当前结点的数。
   * 2. 结点的右子树只包含大于当前结点的数。
   * 3. 所有左子树和右子树自身必须也是二叉搜索树。
   *
   * 此题是找到第k个最小元素，最小元素是左下角。
   * 所以按照 左 -> 根 -> 右的中序遍历，找到第k个元素即可。
   */
  const res: number[] = [];
  const recursion = (root: TreeNode | null) => {
    if (root === null) return;
    recursion(root.left);
    res.push(root.val);
    recursion(root.right);
  };

  recursion(root);

  return res[k - 1];
}

// @栈
function kthSmallest(root: TreeNode | null, k: number): number {
  const stack = [];
  const res = [];
  let p = root;
  while (stack.length || p !== null) {
    while (p) {
      stack.push(p);
      p = p.left;
    } // 此时第一次进入栈，栈中堆满了所有左侧的节点
    const node = stack.pop()!; // 弹出第一个左侧节点
    res.push(node.val); // 置入值
    /**
     * 此时右侧节点为null，但stack中有上一个左侧节点，
     * 也就是当前的根节点，完成了 left -> root
     * 根节点接着会找到右侧节点，完成余下 root -> right
     */
    p = node.right;
  }

  return res[k - 1];
}

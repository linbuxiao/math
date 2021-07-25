/**
 * 迭代法
 */

import { TreeNode } from "../Utils";

/**
 * 前序遍历
 * @param root
 * @returns
 */
export function preorderTraversal(root: TreeNode | null): number[] {
  const list: number[] = [];
  const stack: (TreeNode | null)[] = [];
  if (root === null) return list;
  stack.push(root);

  while (stack.length) {
    const node = stack.pop()!;
    list.push(node.val);
    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left); // 先进后厨
  }

  return list;
}

/**
 * 中序遍历
 */

export function inorderTraversal(root: TreeNode | null): number[] {
  const list: number[] = [];
  const stack: (TreeNode | null)[] = [];
  if (root === null) return list;
  let cur: TreeNode | null = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop()!;
    list.push(cur.val);
    cur = cur.right;
  }

  return list;
}

/**
 * 后序遍历
 */

export function postorderTraversal(root: TreeNode | null): number[] {
  const list: number[] = [];
  const stack: TreeNode[] = [];
  const left: TreeNode[] = [];
  if (root === null) return list;
  let cur: TreeNode | null = root;

  while (cur !== null) {
    while (cur) {
      stack.push(cur);
      if (cur.left !== null) left.push(cur.left);
      cur = cur.right;
    }

    if (left.length !== 0) cur = left.pop()!;
  }

  while (stack.length !== 0) {
    list.push(stack.pop()!.val);
  }

  return list;
}

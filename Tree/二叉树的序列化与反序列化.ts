/**
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 */

import { TreeNode } from "../Utils";

// 当然这道题可以用json来做。。当然也没有这个必要

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  const pre = (root: TreeNode | null): string => {
    if (root === null) return "";
    let [left, right] = [
      root.left ? pre(root.left) : "#",
      root.right ? pre(root.right) : "#",
    ];
    return `${root.val}+${left}+${right}`;
  };

  return `${pre(root)}`;
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  if (data.length === 0) return null;
  // 解构先序遍历
  const arr = data.split("+").map((v) => (v === "#" ? null : +v));
  const buildTree = (arr: (number | null)[]): TreeNode | null => {
    if (arr.length === 0) return null;
    const rootVal = arr.shift()!;
    let node: TreeNode | null;
    if (rootVal === null) {
      node = null;
    } else {
      node = new TreeNode(rootVal);
      node.left = buildTree(arr);
      node.right = buildTree(arr);
    }

    return node;
  };

  return buildTree(arr);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

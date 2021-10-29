// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

import { TreeNode } from "../Utils";

export function levelOrder_1(root: TreeNode | null): number[][] {
  if (root === null) return [];

  let matrix: (TreeNode | null)[][] = [];

  while (1) {
    if (matrix.length === 0) {
      matrix.push([root]);
    } else {
      let lastRow = matrix[matrix.length - 1];
      let withOutNullLastRow = lastRow.filter((item) => item !== null);
      if (withOutNullLastRow.length === 0) break;
      let row: (TreeNode | null)[] = [];
      lastRow.forEach((item) => {
        if (item !== null) {
          row.push(item.left, item.right);
        }
      });

      matrix.push(row);
    }
  }

  let res: number[][] = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    let row = matrix[i];
    let value: number[] = [];
    row.forEach((node) => {
      if (node !== null) {
        value.push(node.val);
      }
    });
    res.push(value);
  }

  return res;
}

// 队列解法
export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const temQueue: TreeNode[] = [];
    const row: number[] = [];

    while (queue.length) {
      const head = queue.shift()!;
      row.push(head.val);
      if (head.left) {
        temQueue.push(head.left);
      }

      if (head.right) {
        temQueue.push(head.right);
      }
    }

    result.push(row);
    queue.push(...temQueue);
  }

  return result;
}

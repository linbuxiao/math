/**
 * 从先序遍历还原二叉树
 */

import { TreeNode } from "../Utils";

export function recoverFromPreorder(traversal: string): TreeNode | null {
  const stack = [];
  for (let i = 0; i < traversal.length; ) {
    let curLevel = 0;
    while (i < traversal.length && traversal[i] === "-") {
      curLevel++;
      i++;
    }

    let start = i;
    while (i < traversal.length && traversal[i] !== "-") {
      i++;
    }

    const val = traversal.substring(start, i);
    const curNode = new TreeNode(+val);
    if (stack.length === 0) {
      stack.push(curNode);
      continue;
    }

    while (stack.length > curLevel) {
      stack.pop();
    }

    if (stack[stack.length - 1].left) {
      stack[stack.length - 1].right = curNode;
    } else {
      stack[stack.length - 1].left = curNode;
    }

    stack.push(curNode);
  }

  return stack[0];
}

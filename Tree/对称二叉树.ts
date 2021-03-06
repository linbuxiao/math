/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

import { TreeNode } from "../Utils";

// 序列化对比法
export function isSymmetric_1(root: TreeNode | null): boolean {
  // 遍历左树，并序列化到转化为字符串。
  // 遍历右数，期间反转所有左右树，判断是否相等

  if (root === null) return true;

  const dfsHelper = (root: TreeNode | null, reverse = false) => {
    let node = "";
    if (!root) return node;
    node = dfs(root, reverse);
    return node;
  };

  const dfs = (root: TreeNode | null, reverse = false): string => {
    if (root === null) return "";

    const left = dfsHelper(root.left, reverse);
    const right = dfsHelper(root.right, reverse);

    if (reverse) {
      return `root${root.val}-left${right}-right${left}`;
    }
    return `root${root.val}-left${left}-right${right}`;
  };

  console.log(dfs(root.left));
  console.log(dfs(root.right, true));

  if (dfs(root.left) === dfs(root.right, true)) {
    return true;
  }

  return false;
}

// 递归法，比对每一串的值，一旦一个子节点为false，则为false
export function isSymmetric_2(root: TreeNode | null): boolean {
  const helper = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
    // 判断边界情况
    if (t1 === null && t2 === null) return true;
    if (t2 === null || t1 === null) return false;

    return (
      t1!.val === t2!.val &&
      helper(t1!.left, t2!.right) &&
      helper(t1!.right, t2!.left)
    );
  };

  return helper(root!.left, root!.right);
}

// 队列法
// 看起来很慢，了解一下

// 队列就是维护一个流动的数组，
// 然后按相同的逻辑处理数组中的每一项，并保证它是流动的
export function isSymmetric(root: TreeNode | null): boolean {
  const queue: (TreeNode | null)[] = [];
  if (root === null) return true;

  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    // 两个出队
    const left = queue.shift();
    const right = queue.shift();

    if (left === null && right === null) continue;
    if (left === null || right === null) return false;

    if (left!.val !== right!.val) return false;

    queue.push(left!.left, right!.right, left!.right, right!.left);
  }
  return true;
}

// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) return 0;

  let count = rootSum(root, targetSum);

  count += pathSum(root.left, targetSum);
  count += pathSum(root.right, targetSum);

  function rootSum(head: TreeNode | null, targetSum: number): number {
    let sum = 0;

    if (head === null) return 0;

    if (head.val === targetSum) sum++;

    sum += rootSum(head.left, targetSum - head.val);
    sum += rootSum(head.right, targetSum - head.val);

    return sum;
  }

  return count;
}

// [10,5,-3,3,2,null,11,3,-2,null,1]
// 8
// [5,4,8,11,null,13,4,7,2,null,null,5,1]
// 22
// [-2,null,-3]
// -5
// [1,null,2,null,3,null,4,null,5]
// 3

// [1,null,2,null,3,null,4,null,5] 0
// null 1
// [2,null,3,null,4,null,5] 1 ------> 相加的3
// null 0
// [3,null,4,null,5] 0 -----> 单独的3
// null 0
// [4,null,5] 0
// null 0
// [5] 0
// null 0
// null 0
// null 0
// [2,null,3,null,4,null,5] 0
// null 2
// [3,null,4,null,5] 2
// null 0
// [4,null,5] 0
// null 0
// [5] 0
// null 0
// null 0
// null 0
// [3,null,4,null,5] 0 ---> 单独的3
// null 0
// [4,null,5] 0
// null 0
// [5] 0
// null 0
// null 0

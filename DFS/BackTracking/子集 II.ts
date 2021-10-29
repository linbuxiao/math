/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */

export function subsets(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (k: number) => {
    if (k === nums.length + 1) return;

    result.push(path.slice());

    for (let i = k; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(0);
  return result;
}

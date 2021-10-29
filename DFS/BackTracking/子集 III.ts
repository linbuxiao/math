/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 */

export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (k: number, used: boolean[]) => {
    if (k === nums.length + 1) return;

    result.push(path.slice());

    for (let i = k; i < nums.length; i++) {
      if (used[i]) continue;

      if (i > 0 && !used[i - 1] && nums[i] === nums[i - 1]) continue;

      used[i] = true;
      path.push(nums[i]);
      dfs(i + 1, used);
      used[i] = false;
      path.pop();
    }
  };

  dfs(0, new Array(nums.length).fill(false));

  return result;
}

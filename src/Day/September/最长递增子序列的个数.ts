// 给定一个未排序的整数数组，找到最长递增子序列的个数。

export function findNumberOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  const count = new Array(n).fill(1);

  // dp储存的为当前位置的最长长度
  // count储存的为这个长度的个数

  function getCountAndMax(nums: number[], times: number[]) {
    let ans = 0;
    let max = Math.max(...nums);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === max) ans += times[i];
    }

    return [max, ans];
  }

  for (let i = 1; i < n; i++) {
    const tmp = [];
    const times = [];
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        tmp.push(dp[j] + 1);
        times.push(count[j]);
      }
    }
    if (tmp.length) {
      const [m, t] = getCountAndMax(tmp, times);
      dp[i] = m;
      count[i] = t;
    }
  }

  return getCountAndMax(dp, count)[1];
}

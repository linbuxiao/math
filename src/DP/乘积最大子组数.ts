// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

//

// 示例 1:

// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:

// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

export function maxProduct(nums: number[]): number {
  const len = nums.length;
  const dp = [nums[0]];
  const minus = [nums[0]];

  for (let i = 1; i < len; i++) {
    const p1 = nums[i] * dp[i - 1];
    const p2 = nums[i] * minus[i - 1];

    if (p1 >= 0 && p2 >= 0) {
      dp[i] = Math.max(p1, p2);
      minus[i] = Math.max(p1, p2);
    } else if (p1 >= 0 && p2 < 0) {
      dp[i] = p1;
      minus[i] = p2;
    } else if (p1 < 0 && p2 >= 0) {
      dp[i] = p2;
      minus[i] = p1;
    } else if (p1 < 0 && p2 < 0) {
      dp[i] = Math.min(p1, p2);
      minus[i] = Math.min(p1, p2);
    }

    // 此时dp[i] 和 minus[i] 均有值

    if (nums[i] >= 0) {
      dp[i] = Math.max(dp[i], nums[i]);
    } else {
      minus[i] = Math.min(minus[i], nums[i]);
    }
  }

  return Math.max(...dp, ...minus);
}

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

//

// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [0]
// 输出：0
// 示例 4：

// 输入：nums = [-1]
// 输出：-1
// 示例 5：

// 输入：nums = [-100000]
// 输出：-100000

// DP
// 这波我们直接开DP
// 先求局部最优的值，从最前面推，然后后面的每一个就挨个加前面值的和，然后最后我们找到全部的
export function maxSubArray(nums: number[]): number {
  const len = nums.length;
  const dp = [...nums]; // dp[i] 的 默认值为自己本身的值

  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i] + dp[i - 1], dp[i]);
  }

  return Math.max(...dp);
}

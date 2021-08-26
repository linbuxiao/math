// 给你一个整数数组 nums ，你可以对它进行一些操作。

// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

//

// 示例 1：

// 输入：nums = [3,4,2]
// 输出：6
// 解释：
// 删除 4 获得 4 个点数，因此 3 也被删除。
// 之后，删除 2 获得 2 个点数。总共获得 6 个点数。
// 示例 2：

// 输入：nums = [2,2,3,3,3,4]
// 输出：9
// 解释：
// 删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
// 之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
// 总共获得 9 个点数。

export function deleteAndEarn(nums: number[]): number {
  const len = nums.length;
  if (len === 1) return nums[0];
  const count = new Map<number, number>();
  for (let i = 0; i < len; i++) {
    if (count.has(nums[i])) {
      count.set(nums[i], count.get(nums[i])! + 1);
    } else {
      count.set(nums[i], 1);
    }
  }

  const arr = Array.from(new Set(nums)).sort((a, b) => a - b);

  const dp = [];

  for (let i = 0; i < arr.length; i++) {
    dp[i] = arr[i] * count.get(arr[i])!;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 === arr[i - 1]) {
      if (i === 1) {
        dp[i] = Math.max(dp[i - 1], dp[i]);
      } else {
        dp[i] = Math.max(dp[i - 1], dp[i] + dp[i - 2]);
      }
    } else {
      dp[i] = dp[i] + dp[i - 1];
    }
  }

  return Math.max(...dp);
}

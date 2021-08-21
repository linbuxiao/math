// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

//
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1

// 递归
export function lengthOfLIS_1(nums: number[]): number {
  let result = 1;

  const getNum = (j: number, res: number): number => {
    const base = nums[j];
    for (let k = j + 1; k < nums.length; k++) {
      // 这里不能用res去取值， 因为res需要被返回， 返回的不能是比较后的值
      if (nums[k] > base) result = Math.max(getNum(k, res + 1), result);
    }
    return res;
  };

  for (let i = 0; i < nums.length; i++) {
    getNum(i, 1);
  }

  return result;
}

// DP
export function lengthOfLIS(nums: number[]): number {
  const len = nums.length;
  const dp = Array.from({ length: nums.length }, () => 1);

  let result = 1;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        result = Math.max(dp[i], result);
      }
    }
  }

  return result;
}

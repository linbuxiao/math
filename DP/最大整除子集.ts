// 给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：
// answer[i] % answer[j] == 0 ，或
// answer[j] % answer[i] == 0
// 如果存在多个有效解子集，返回其中任何一个均可。

//

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[1,2]
// 解释：[1,3] 也会被视为正确答案。
// 示例 2：

// 输入：nums = [1,2,4,8]
// 输出：[1,2,4,8]

export function largestDivisibleSubset(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const dp = new Array(nums.length).fill(1);

  const arr = nums.map((item) => [item]);

  for (let i = 1; i < dp.length; i++) {
    let max = i; // 最大整除子集的索引
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        if (dp[j] + 1 > dp[max]) {
          max = j;
        }
      }
    }
    if (max !== i) {
      arr[i] = arr[i].concat(arr[max]);
      dp[i] = dp[max] + 1;
    }
  }

  const num = Math.max(...dp);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === num) return arr[i];
  }

  return [];
}

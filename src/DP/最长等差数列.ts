// 给定一个整数数组 A，返回 A 中最长等差子序列的长度。

// 回想一下，A 的子序列是列表 A[i_1], A[i_2], ..., A[i_k] 其中 0 <= i_1 < i_2 < ... < i_k <= A.length - 1。并且如果 B[i+1] - B[i]( 0 <= i < B.length - 1) 的值都相同，那么序列 B 是等差的。

// 输入：[3,6,9,12]
// 输出：4
// 解释：
// 整个数组是公差为 3 的等差数列。
// 示例 2：

// 输入：[9,4,7,2,10]
// 输出：3
// 解释：
// 最长的等差子序列是 [4,7,10]。
// 示例 3：

// 输入：[20,1,15,3,10,5,8]
// 输出：4
// 解释：
// 最长的等差子序列是 [20,15,10,5]。

export function longestArithSeqLength(nums: number[]): number {
  const len = nums.length;
  const dp: number[][] = Array.from({ length: len }, () =>
    new Array(len).fill(2)
  );
  let ans = 2;
  for (let i = 1; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = 0; k < i; k++) {
        if (nums[j] - nums[i] === nums[i] - nums[k]) {
          // 构成等差数列
          dp[i][j] = Math.max(dp[k][i] + 1, dp[i][j]);
          ans = Math.max(dp[i][j], ans);
        }
      }
    }
  }

  return ans;
}

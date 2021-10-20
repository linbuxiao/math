// 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。

export function minMoves(nums: number[]): number {
  /**
   * 每次操作将会使 n - 1 个元素增加 1 :可以理解为让其中一个元素减 1 。减几次会有结果
   * 那么需要遍历数组，每次找到最大的那个，去减去 1 。
   *
   * 减 1 太慢了，找到最小的，求差值。
   */
  let ans = 0;
  const min = Math.min(...nums);
  for (let i = 0; i < nums.length; i++) {
    ans += nums[i] - min;
  }

  return ans;
}

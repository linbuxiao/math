// 给你一个整数数组 arr 和一个整数 difference，请你找出并返回 arr 中最长等差子序列的长度，该子序列中相邻元素之间的差等于 difference 。

// 子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。

export function longestSubsequence(arr: number[], difference: number): number {
  // const dp = new Array(arr.length).fill(1)
  let max = 0;
  const dp = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    // for(let j = i - 1; j >= 0; j--) {
    //   if(arr[i] - arr[j] === difference) {
    //     dp[i] = Math.max(dp[i], dp[j] + 1)
    //   }
    // }
    const val = Math.max(
      dp.get(arr[i]) || 0,
      (dp.get(arr[i] - difference) || 0) + 1,
    );
    dp.set(arr[i], val);
    max = Math.max(val, max);
  }

  return max;
}

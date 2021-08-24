// 给你一个披萨，它由 3n 块不同大小的部分组成，现在你和你的朋友们需要按照如下规则来分披萨：

// 你挑选 任意 一块披萨。
// Alice 将会挑选你所选择的披萨逆时针方向的下一块披萨。
// Bob 将会挑选你所选择的披萨顺时针方向的下一块披萨。
// 重复上述过程直到没有披萨剩下。
// 每一块披萨的大小按顺时针方向由循环数组 slices 表示。

// 请你返回你可以获得的披萨大小总和的最大值。

export function maxSizeSlices(slices: number[]): number {
  const findMax = (nums: number[]): number => {
    const dp: number[][] = Array.from({ length: slices.length / 3 }, () =>
      new Array(nums.length).fill(0)
    );

    dp[0] = [...nums];

    for (let i = 1; i < slices.length / 3; i++) {
      for (let j = 0; j < slices.length - 1; j++) {
        if (j < 2) {
          dp[i][j] = nums[j];
        } else {
          dp[i][j] = Math.max(...dp[i - 1].slice(0, j - 1)) + nums[j];
        }
      }
    }
    return Math.max(...dp[dp.length - 1]);
  };

  return Math.max(
    findMax(slices.slice(0, slices.length - 1)),
    findMax(slices.slice(1, slices.length))
  );
}

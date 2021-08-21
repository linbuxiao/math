// 给定一个未排序的整数数组，找到最长递增子序列的个数。

// 示例 1:

// 输入: [1,3,5,4,7]
// 输出: 2
// 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
// 示例 2:

// 输入: [2,2,2,2,2]
// 输出: 5
// 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
// 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。

// 直接上DP
export function findNumberOfLIS_1(nums: number[]): number {
  const len = nums.length;
  const dp: number[][] = Array.from({ length: len }, () => [1]);
  let max = 1;

  for (let i = 1; i < len; i++) {
    let tmp: number[] = [];
    let maxLen = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        const nextVal = dp[j][0] + 1;
        maxLen = Math.max(nextVal, maxLen);
        for (let k = 0; k < dp[j].length; k++) {
          tmp.push(nextVal);
        }
      }
    }

    max = Math.max(maxLen, max);
    if (!tmp.length) continue;

    dp[i] = [];
    for (let k = 0; k < tmp.length; k++) {
      if (tmp[k] === maxLen) {
        dp[i].push(tmp[k]);
      }
    }
  }

  let res = 0;

  for (let i = 0; i < dp.length; i++) {
    if (dp[i][0] === max) {
      dp[i].forEach(() => res++);
    }
  }

  return res;
}

export function findNumberOfLIS(nums: number[]): number {
  const len = nums.length;
  const length = new Array(len).fill(1); // 子序列的长度
  const count = new Array(len).fill(1); // 该长度的数量 --> 我们只能确定第一项的长度

  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        if (length[i] < length[j] + 1) {
          length[i] = length[j] + 1;
          count[i] = count[j];
          continue;
        }

        if (length[i] === length[j] + 1) {
          count[i] += count[j];
        }
      }
    }
  }

  let res = 0;
  const max = Math.max(...length);

  for (let i = 0; i < len; i++) {
    if (length[i] === max) {
      console.log(count);

      res += count[i];
    }
  }

  return res;
}

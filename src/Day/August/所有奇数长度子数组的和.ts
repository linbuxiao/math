// 示例 1：

// 输入：arr = [1,4,2,5,3]
// 输出：58
// 解释：所有奇数长度子数组和它们的和为：
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// 我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// 示例 2：

// 输入：arr = [1,2]
// 输出：3
// 解释：总共只有 2 个长度为奇数的子数组，[1] 和 [2]。它们的和为 3 。
// 示例 3：

// 输入：arr = [10,11,12]
// 输出：66

export function sumOddLengthSubarrays(arr: number[]): number {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    ans += val;
    for (let j = i + 3; j <= arr.length; j += 2) {
      val += arr[j - 1] + arr[j - 2];
      ans += val;
    }
  }

  return ans;
}

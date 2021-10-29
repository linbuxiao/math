// 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

// 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

// 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

// 注意：不允许旋转信封。

//
// 示例 1：

// 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出：3
// 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
// 示例 2：

// 输入：envelopes = [[1,1],[1,1],[1,1]]
// 输出：1

export function maxEnvelopes(envelopes: number[][]): number {
  envelopes.sort((a, b) => a[0] - b[0]);
  const len = envelopes.length;
  const max = [...envelopes];
  const length = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (
      envelopes[i][0] === envelopes[i - 1][0] &&
      envelopes[i][1] === envelopes[i - 1][1]
    ) {
      continue;
    }
    for (let j = i - 1; j >= 0; j--) {
      // 套
      if (max[j][0] < envelopes[i][0] && max[j][1] < envelopes[i][1]) {
        if (length[i] < length[j] + 1) length[i] = length[j] + 1;
        continue;
      }

      // 塞
      if (max[j][0] > envelopes[i][0] && max[j][1] > envelopes[i][1]) {
        if (length[i] < length[j] + 1) {
          length[i] = length[j] + 1;
          max[i] = max[j];
          continue;
        }
      }
    }
  }

  return Math.max(...length);
}

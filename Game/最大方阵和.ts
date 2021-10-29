// 给你一个 n x n 的整数方阵 matrix 。你可以执行以下操作 任意次 ：

// 选择 matrix 中 相邻 两个元素，并将它们都 乘以 -1 。
// 如果两个元素有 公共边 ，那么它们就是 相邻 的。

// 你的目的是 最大化 方阵元素的和。请你在执行以上操作之后，返回方阵的 最大 和。

export function maxMatrixSum(matrix: number[][]): number {
  const [m, n] = [matrix.length, matrix[0].length];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let minCount = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      sum += Math.abs(matrix[row][col]);
      if (matrix[row][col] < 0) {
        minCount++;
      }
      min = Math.min(min, Math.abs(matrix[row][col]));
    }
  }

  return minCount % 2 ? sum - min * 2 : sum;
}

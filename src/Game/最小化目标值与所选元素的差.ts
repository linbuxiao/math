// 给你一个大小为 m x n 的整数矩阵 mat 和一个整数 target 。

// 从矩阵的 每一行 中选择一个整数，你的目标是 最小化 所有选中元素之 和 与目标值 target 的 绝对差 。

// 返回 最小的绝对差 。

// a 和 b 两数字的 绝对差 是 a - b 的绝对值。

export function minimizeTheDifference(mat: number[][], target: number): number {
  let set = new Set(mat[0]);

  for (let i = 1; i < mat.length; i++) {
    const tmp: number[] = [];
    for (let j = 0; j < mat[0].length; j++) {
      set.forEach((val) => {
        tmp.push(val + mat[i][j]);
      });
    }
    set = new Set([...tmp]);
  }

  const arr = Array.from(set).map((item) => Math.abs(target - item));

  return Math.min(...arr);
}

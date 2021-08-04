// 给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。

// 规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。

// 请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。

// 给定下面的 5x5 矩阵:

//   太平洋 ~   ~   ~   ~   ~
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * 大西洋

// 返回:

export function pacificAtlantic(heights: number[][]): number[][] {
  const [m, n] = [heights.length, heights[0].length];
  let res: number[][] = [];

  const direct_x = [0, 0, 1, -1];
  const direct_y = [1, -1, 0, 0];

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const queue: number[][] = [[row, col]];
      let flag = [false, false];
      const used = Array.from({ length: m }, () => new Array(n).fill(false));
      while (queue.length) {
        for (const a of queue) {
          if (a[0] === 0 || a[1] === 0) flag[0] = true;
          if (a[0] === m - 1 || a[1] === n - 1) flag[1] = true;
        }

        if (flag[0] === flag[1] && flag[1] === true) {
          res.push([row, col]);
          break;
        }

        const [i, j] = queue.shift()!;

        if (used[i][j]) continue;
        used[i][j] = true;

        for (let k in Array.from({ length: 4 })) {
          const [nr, nc] = [i + direct_x[k], j + direct_y[k]];
          if (
            nr >= 0 &&
            nr < m &&
            nc >= 0 &&
            nc < n &&
            heights[nr][nc] <= heights[i][j]
          ) {
            queue.push([nr, nc]);
          }
        }
      }
    }
  }

  return res;
}

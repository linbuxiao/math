// 给你一个下标从 0 开始，大小为 m x n 的二进制矩阵 land ，其中 0 表示一单位的森林土地，1 表示一单位的农场土地。

// 为了让农场保持有序，农场土地之间以矩形的 农场组 的形式存在。每一个农场组都 仅 包含农场土地。且题目保证不会有两个农场组相邻，也就是说一个农场组中的任何一块土地都 不会 与另一个农场组的任何一块土地在四个方向上相邻。

// land 可以用坐标系统表示，其中 land 左上角坐标为 (0, 0) ，右下角坐标为 (m-1, n-1) 。请你找到所有 农场组 最左上角和最右下角的坐标。一个左上角坐标为 (r1, c1) 且右下角坐标为 (r2, c2) 的 农场组 用长度为 4 的数组 [r1, c1, r2, c2] 表示。

// 请你返回一个二维数组，它包含若干个长度为 4 的子数组，每个子数组表示 land 中的一个 农场组 。如果没有任何农场组，请你返回一个空数组。可以以 任意顺序 返回所有农场组。

export function findFarmland(land: number[][]): number[][] {
  // BFS

  const [m, n] = [land.length, land[0].length];

  const used = Array.from({ length: m }, () => new Array(n).fill(false));

  const [direct_x, direct_y] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];

  function find(row: number, col: number) {
    const mat = [[row, col]];

    let queue = [[row, col]];

    while (queue.length) {
      const tmp = [];
      for (let [X, Y] of queue) {
        if (
          X < 0 ||
          Y < 0 ||
          X > m - 1 ||
          Y > n - 1 ||
          land[X][Y] === 0 ||
          used[X][Y]
        )
          continue;
        used[X][Y] = true;
        mat.push([X, Y]);
        for (let k in direct_x) {
          tmp.push([X + direct_x[k], Y + direct_y[k]]);
        }
      }

      queue = [...tmp];
    }

    let min = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    let max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    for (let [X, Y] of mat) {
      min[0] = Math.min(min[0], X);
      min[1] = Math.min(min[1], Y);
      max[0] = Math.max(max[0], X);
      max[1] = Math.max(max[1], Y);
    }

    return [...min, ...max];
  }

  const ans: number[][] = [];
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (land[row][col] === 1 && !used[row][col]) {
        // find

        ans.push(find(row, col));
      }
    }
  }

  return ans;
}

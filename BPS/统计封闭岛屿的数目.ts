// 有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。

// 我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。

// 如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。

// 请返回封闭岛屿的数目。

// 输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// 输出：2
// 解释：
// 灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。

function closedIsland(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  const direct_x = [0, 0, 1, -1];
  const direct_y = [1, -1, 0, 0];
  let res = 0;
  const XYZ = ((): number[][] => {
    const arr = [];
    for (let row = 1; row < m - 1; row++) {
      for (let col = 1; col < n - 1; col++) {
        if (grid[row][col] === 0) arr.push([row, col]);
      }
    }

    return arr;
  })();

  const valid = (row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return false;
    return true;
  };

  const isEdge = (row: number, col: number): boolean => {
    if (row === 0 || col === 0 || row === m - 1 || col === n - 1) return true;
    return false;
  };

  for (let [row, col] of XYZ) {
    if (grid[row][col] === 2) continue;
    const queue = [[row, col]];
    let flag = true;

    while (queue.length) {
      const [i, j] = queue.shift()!;
      if (!valid(i, j) || grid[i][j] === 1 || grid[i][j] === 2) continue;
      grid[i][j] = 2;
      if (isEdge(i, j)) {
        flag = false; // 不是封闭
      }

      for (let k in direct_x) {
        queue.push([i + direct_x[k], j + direct_y[k]]);
      }
    }

    if (flag) res++;
  }

  return res;
}

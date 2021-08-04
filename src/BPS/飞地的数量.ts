// 给出一个二维数组 A，每个单元格为 0（代表海）或 1（代表陆地）。

// 移动是指在陆地上从一个地方走到另一个地方（朝四个方向之一）或离开网格的边界。

// 返回网格中无法在任意次数的移动中离开网格边界的陆地单元格的数量。

// 输入：[
//   [0,0,0,0],
//   [1,0,1,0],
//   [0,1,1,0],
//   [0,0,0,0]]
// 输出：3
// 解释：
// 有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。

export function numEnclaves(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  console.log(m, n);

  const direct_x = [0, 0, 1, -1];
  const direct_y = [1, -1, 0, 0];
  let res = 0;
  const XYZ = (() => {
    const arr = [];
    for (let row = 1; row < m - 1; row++) {
      for (let col = 1; col < n - 1; col++) {
        if (grid[row][col] === 1) arr.push([row, col]);
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
    let queue = [[row, col]];
    let num = 0;
    let flag = false;
    while (queue.length) {
      const [i, j] = queue.shift()!;
      if (!valid(i, j) || grid[i][j] === 0 || grid[i][j] === 2) continue;
      num++;
      grid[i][j] = 2;

      if (isEdge(i, j)) {
        flag = true;
      }
      for (let k in direct_x) {
        queue.push([i + direct_x[k], j + direct_y[k]]);
      }
    }

    if (!flag) res += num;
  }

  return res;
}

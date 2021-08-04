// 给出一个二维整数网格 grid，网格中的每个值表示该位置处的网格块的颜色。

// 只有当两个网格块的颜色相同，而且在四个方向中任意一个方向上相邻时，它们属于同一连通分量。

// 连通分量的边界是指连通分量中的所有与不在分量中的正方形相邻（四个方向上）的所有正方形，或者在网格的边界上（第一行/列或最后一行/列）的所有正方形。

// 给出位于 (r0, c0) 的网格块和颜色 color，使用指定颜色 color 为所给网格块的连通分量的边界进行着色，并返回最终的网格 grid 。

// 输入：grid = [[1,1],[1,2]], r0 = 0, c0 = 0, color = 3
// 输出：[[3, 3], [3, 2]]

export function colorBorder(
  grid: number[][],
  r0: number,
  c0: number,
  color: number
): number[][] {
  // 同颜色碰到边界
  // 同颜色周围还有其他颜色
  // 即为边界
  const value = grid[r0][c0];
  const [m, n] = [grid.length, grid[0].length];
  const direct_x = [0, 0, 1, -1];
  const direct_y = [1, -1, 0, 0];

  const queue = [[r0, c0]];

  const valid = (row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return false;
    return true;
  };

  const isBorder = (row: number, col: number): boolean => {
    if (row === 0 || col === 0 || row === m - 1 || col === n - 1) return true;
    return false;
  };

  const isNoise = (row: number, col: number): boolean => {
    const values = [];
    for (let k in direct_x) {
      const [nr, nc] = [row + direct_x[k], col + direct_y[k]];
      if (valid(nr, nc)) {
        values.push(grid[nr][nc]);
      }
    }

    for (let k of values) {
      if (k !== value) return true;
    }

    return false;
  };

  const used = Array.from({ length: m }, () => new Array(n).fill(false));
  const stack = [];
  while (queue.length) {
    const [i, j] = queue.shift()!;
    if (!valid(i, j) || used[i][j] || grid[i][j] !== value) continue;
    if (isBorder(i, j) || isNoise(i, j)) {
      stack.push([i, j]);
    }
    used[i][j] = true;
    for (let k in direct_x) {
      queue.push([i + direct_x[k], j + direct_y[k]]);
    }
  }
  for (const [row, col] of stack) {
    grid[row][col] = color;
  }

  return grid;
}

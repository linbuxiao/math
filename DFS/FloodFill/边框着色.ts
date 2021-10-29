/**
 * 给出一个二维整数网格 grid，网格中的每个值表示该位置处的网格块的颜色。
 * 只有当两个网格块的颜色相同，而且在四个方向中任意一个方向上相邻时，它们属于同一连通分量。
 * 连通分量的边界是指连通分量中的所有与不在分量中的正方形相邻（四个方向上）的所有正方形，或者在网格的边界上（第一行/列或最后一行/列）的所有正方形。
 * 给出位于 (r0, c0) 的网格块和颜色 color，使用指定颜色 color 为所给网格块的连通分量的边界进行着色，并返回最终的网格 grid 。
 */

export function colorBorder(
  grid: number[][],
  r0: number,
  c0: number,
  color: number,
): number[][] {
  // 如果为边界 染色
  // 如果附近有其他颜色 染色

  const used: number[][] = Array.from(
    { length: grid.length },
    () => new Array(grid[0].length).fill(0),
  );
  const k = grid[r0][c0];
  const dfs = (row: number, col: number) => {
    if (
      row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1
    ) {
      return;
    }
    if (grid[row][col] !== k) return;
    if (used[row][col]) return;
    used[row][col] = 1;
    if (
      row === 0 ||
      col === 0 ||
      row === grid.length - 1 ||
      col === grid[0].length - 1
    ) {
      used[row][col] = 2;
    }

    if (
      (row > 0 && grid[row - 1][col] !== k) ||
      (row < grid.length - 1 && grid[row + 1][col] !== k) ||
      (col < grid[0].length - 1 && grid[row][col + 1] !== k) ||
      (col > 0 && grid[row][col - 1] !== k)
    ) {
      used[row][col] = 2;
    }

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  dfs(r0, c0);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (used[row][col] === 2) grid[row][col] = color;
    }
  }

  return grid;
}

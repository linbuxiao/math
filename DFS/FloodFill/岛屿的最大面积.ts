/**
 * 给定一个包含了一些 0 和 1 的非空二维数组 grid 。
 * 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)
 */

export function maxAreaOfIsland(grid: number[][]): number {
  const used: boolean[][] = [];
  let max = 0; // 最大岛屿

  // 建立是否浏览过的矩阵
  for (let y = 0; y < grid.length; y++) {
    let row = [];
    for (let x = 0; x < grid[0].length; x++) {
      row.push(false);
    }
    used.push(row);
  }

  const dfs = (row: number, col: number, path: number[][]) => {
    // 向上查找
    if (row > 0 && grid[row - 1][col] === 1) {
      if (!used[row - 1][col]) {
        used[row - 1][col] = true;
        path.push([row - 1, col]);
        dfs(row - 1, col, path);
      }
    }

    // 向下查找
    if (row < grid.length - 1 && grid[row + 1][col] === 1) {
      if (!used[row + 1][col]) {
        used[row + 1][col] = true;
        path.push([row + 1, col]);
        dfs(row + 1, col, path);
      }
    }

    // 向左查找
    if (col > 0 && grid[row][col - 1] === 1) {
      if (!used[row][col - 1]) {
        used[row][col - 1] = true;
        path.push([row, col - 1]);
        dfs(row, col - 1, path);
      }
    }

    // 向右查找
    if (col < grid[0].length - 1 && grid[row][col + 1] === 1) {
      if (!used[row][col + 1]) {
        used[row][col + 1] = true;
        path.push([row, col + 1]);
        dfs(row, col + 1, path);
      }
    }

    // 上下左右均无陆地，则终止遍历
    max = max > path.length ? max : path.length;
    return;
  };

  // 遍历整个棋盘
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // 找到陆地
      if (grid[row][col] === 1) {
        // 陆地是否已被遍历
        if (!used[row][col]) {
          used[row][col] = true;
          // 开始递归收集
          const path = [];
          path.push([row, col]);
          dfs(row, col, path);
        }
      }
    }
  }

  return max;
}

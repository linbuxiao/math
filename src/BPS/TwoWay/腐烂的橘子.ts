// 在给定的网格中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

// 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

// 输入：[[2,1,1],[1,1,0],[0,1,1]]
// 输出：4

// 输入：[[2,1,1],[0,1,1],[1,0,1]]
// 输出：-1
// 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。

// 染色问题
export function orangesRotting(grid: number[][]): number {
  // 循环棋盘，让其中的腐烂橘子进行扩散
  const [m, n] = [grid.length, grid[0].length];
  const [direct_x, direct_y] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];
  let num = 0; // 1的总数

  let queue = [];
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      }
      if (grid[row][col] === 1) num++;
    }
  }

  const judge = (row: number, col: number) => {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return false;
    return true;
  };

  const dyeing = (row: number, col: number): number[][] => {
    const res = [];
    for (let k in direct_x) {
      const [i, j] = [row + direct_x[k], col + direct_y[k]];
      if (judge(i, j) && grid[i][j] === 1) {
        grid[i][j] = 2;
        num--;
        res.push([i, j]);
      }
    }
    return res;
  };

  let step = 0;

  while (queue.length) {
    let tmp = [];
    for (let [X, Y] of queue) {
      tmp.push(...dyeing(X, Y));
    }
    if (tmp.length) step++;
    queue = [...tmp];
  }
  return num > 0 ? -1 : step;
}

// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

// 队列实现

export function numIslands(grid: string[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  let num = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (+grid[row][col] === 0) continue;
      const queue: number[][] = [[row, col]];
      num++;
      while (queue.length) {
        const [i, j] = queue.shift()!;
        if (i < 0 || j < 0 || i === m || j === n || +grid[i][j] === 0) continue;
        grid[i][j] = "0";
        const direct_x = [0, 0, 1, -1];
        const direct_y = [1, -1, 0, 0];
        for (let k in Array.from({ length: 4 })) {
          queue.push([i + direct_x[k], j + direct_y[k]]);
        }
      }
    }
  }

  return num;
}

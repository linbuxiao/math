// 你现在手里有一份大小为 N x N 的 网格 grid，上面的每个 单元格 都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，请你找出一个海洋单元格，这个海洋单元格到离它最近的陆地单元格的距离是最大的。

// 我们这里说的距离是「曼哈顿距离」（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个单元格之间的距离是 |x0 - x1| + |y0 - y1| 。

// 如果网格上只有陆地或者海洋，请返回 -1。

// 输入：[[1,0,1],[0,0,0],[1,0,1]]
// 输出：2
// 解释：
// 海洋单元格 (1, 1) 和所有陆地单元格之间的距离都达到最大，最大距离为 2。

// 输入：[[1,0,0],[0,0,0],[0,0,0]]
// 输出：4
// 解释：
// 海洋单元格 (2, 2) 和所有陆地单元格之间的距离都达到最大，最大距离为 4。

// 每一个0 对应所有的1 都会有距离值
// 每一个1 对应所有的0 也都会有距离值
// 如果我们遍历每一个1， 拿到距离每一个1的最大值，然后比较出最大，即可完成搜索
// 但是会反复访问每一个0，
export function maxDistance(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  const [direct_x, direct_y] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  let max = -1;

  const bfs = (row: number, col: number): number => {
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    let queue = [[row, col]];
    let step = -1;
    while (queue.length) {
      let tmp = [];
      for (let [X, Y] of queue) {
        step = Math.max(step, Math.abs(row - X) + Math.abs(col - Y));
        console.log(step, [X, Y], [row, col]);

        for (let k in direct_x) {
          const [nr, nc] = [X + direct_x[k], Y + direct_y[k]];
          if (
            nr < 0 ||
            nc < 0 ||
            nr > m - 1 ||
            nc > n - 1 ||
            visited[nr][nc] ||
            grid[nr][nc] === 1
          )
            continue;
          visited[nr][nc] = true;
          tmp.push([nr, nc]);
        }
      }
      queue = [...tmp];
    }

    return step;
  };

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        max = Math.max(bfs(row, col), max);
      }
    }
  }
  // console.log(bfs(0,0));

  return max;
}

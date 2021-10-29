// 给定一个包含了一些 0 和 1 的非空二维数组 grid 。

// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/bfs/e6igwm/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]

export function maxAreaOfIsland(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  let res = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const queue: number[][] = [[row, col]];
      let temp = 0;
      while (queue.length) {
        const [i, j] = queue.shift()!;
        if (i < 0 || j < 0 || i === m || j === n || grid[i][j] === 0) continue;
        temp++;
        grid[i][j] = 0;
        const direct_x = [0, 0, 1, -1];
        const direct_y = [1, -1, 0, 0];

        for (let k in Array.from({ length: 4 })) {
          queue.push([i + direct_x[k], j + direct_y[k]]);
        }
      }

      res = Math.max(res, temp);
    }
  }

  return res;
}

/**
 * 你准备参加一场远足活动。给你一个二维 rows x columns 的地图 heights ，其中 heights[row][col] 表示格子 (row, col) 的高度。一开始你在最左上角的格子 (0, 0) ，且你希望去最右下角的格子 (rows-1, columns-1) （注意下标从 0 开始编号）。你每次可以往 上，下，左，右 四个方向之一移动，你想要找到耗费 体力 最小的一条路径。

 * 一条路径耗费的 体力值 是路径上相邻格子之间 高度差绝对值 的 最大值 决定的。

 * 请你返回从左上角走到右下角的最小 体力消耗值 。
 */

export function minimumEffortPath(heights: number[][]): number {
  const [m, n] = [heights.length, heights[0].length];
  // if(m === n && m === 1) return 0
  // const dp = new Array(m)
  const INF = Number.MAX_SAFE_INTEGER;

  const dfs = (
    row: number,
    col: number,
    abs: number,
    used: boolean[][]
  ): number => {
    if (row === m - 1 && col === n - 1) {
      console.log(abs, used);
    }

    if (row > m - 1 || col > n - 1 || row < 0 || col < 0 || used[row][col])
      return INF;
    if (row === m - 1 && col === n - 1) return abs;

    used[row][col] = true;
    let l = INF;
    let r = INF;
    let u = INF;
    let d = INF;
    if (row < m - 1) {
      r = Math.abs(heights[row + 1][col] - heights[row][col]);
    }
    if (col < n - 1) {
      d = Math.abs(heights[row][col + 1] - heights[row][col]);
    }
    if (row > 0) {
      u = Math.abs(heights[row - 1][col] - heights[row][col]);
    }
    if (col > 0) {
      l = Math.abs(heights[row][col - 1] - heights[row][col]);
    }

    const min = Math.min(r, d, u, l);
    const max = Math.max(abs, min);

    const up = dfs(row - 1, col, max, [...used]);
    const down = dfs(row + 1, col, max, [...used]);
    const left = dfs(row, col - 1, max, [...used]);
    const right = dfs(row, col + 1, max, [...used]);
    return Math.min(up, down, left, right);
  };

  const res = dfs(
    0,
    0,
    0,
    Array.from({ length: m }, () => new Array(n).fill(false))
  );

  return res;
}

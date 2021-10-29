// 给你一个大小为 m x n 的网格和一个球。球的起始坐标为 [startRow, startColumn] 。你可以将球移到在四个方向上相邻的单元格内（可以穿过网格边界到达网格之外）。你 最多 可以移动 maxMove 次球。

// 给你五个整数 m、n、maxMove、startRow 以及 startColumn ，找出并返回可以将球移出边界的路径数量。因为答案可能非常大，返回对 109 + 7 取余 后的结果。

// 输入：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
// 输出：6

// 输入：m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
// 输出：12

// BFS 数值较大，会爆
export function findPaths_1(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  // 构建经过的地方

  let queue = [[startRow, startColumn]]; // 起始位置
  let num = 0;
  let step = 0;
  while (queue.length && step <= maxMove) {
    let tmp = [];

    for (let [row, col] of queue) {
      if (row < 0 || col < 0 || row > m - 1 || col > n - 1) {
        num = (num + 1) % (10 ** 9 + 7);
        continue;
      }
      const [direct_x, direct_y] = [
        [0, 0, 1, -1],
        [1, -1, 0, 0],
      ];
      for (let i in direct_x) {
        tmp.push([row + direct_x[i], col + direct_y[i]]);
      }
    }

    step++;
    queue = [...tmp];
  }

  return num;
}

// DFS
export function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  const mod = Math.pow(10, 9) + 7;
  const memo = new Map<string, number>();

  /**
   * @param i 开始的row
   * @param j 开始的col
   * @param k 还能移动几步
   */
  const dfs = (i: number, j: number, k: number): number => {
    if (k < 0) return 0; // 如果这条路径超过了最大次数，则返回0
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1) return 1; // 如果得到了一次结果，则返回1

    const key = `${i}-${j}-${k}`; // 储存到这个位置还剩多少步的值

    if (memo.has(key)) return memo.get(key)!; // 如果已经在这个位置计算过结果，则直接返回

    let res = 0;
    const [direct_x, direct_y] = [
      [0, 0, 1, -1],
      [1, -1, 0, 0],
    ];

    for (let o in direct_x) {
      res += dfs(i + direct_x[o], j + direct_y[o], k - 1);
    } // 否则收集所有结果

    res %= mod;

    memo.set(key, res);

    return res;
  };

  return dfs(startRow, startColumn, maxMove);
}

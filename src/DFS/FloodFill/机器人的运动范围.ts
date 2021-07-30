/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 */

export function movingCount(m: number, n: number, k: number): number {
  let num = 0;
  // 分割
  const splitNum = (num: number) => {
    let res: number = 0;
    while (num) {
      res += num % 10;
      num = Math.floor(num / 10);
    }

    return res;
  };

  // 构建矩阵
  const board: number[][] = Array.from({ length: m }, () =>
    new Array(n).fill(0)
  );
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      board[row][col] = splitNum(row) + splitNum(col);
    }
  }

  const used: number[][] = Array.from({ length: m }, () =>
    new Array(n).fill(0)
  );

  const dfs = (row: number, col: number) => {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return;
    if (used[row][col]) return;

    used[row][col] = 1;
    if (board[row][col] > k) return;
    used[row][col] = 2;
    num++;
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  dfs(0, 0);

  return num;
}

/**
 * 给你一个正方形字符数组 board ，你从数组最右下方的字符 'S' 出发。

 * 你的目标是到达数组最左上角的字符 'E' ，数组剩余的部分为数字字符 1, 2, ..., 9 或者障碍 'X'。在每一步移动中，你可以向上、向左或者左上方移动，可以移动的前提是到达的格子没有障碍。

 * 一条路径的 「得分」 定义为：路径上所有数字的和。

 * 请你返回一个列表，包含两个整数：第一个整数是 「得分」 的最大值，第二个整数是得到最大得分的方案数，请把结果对 10^9 + 7 取余。

 * 如果没有任何路径可以到达终点，请返回 [0, 0] 。
 */

//  ["E23","2X2","12S"]
//  ["E12","1X1","21S"]
//  ["E11","XXX","11S"]

// 杀

// 递归法 在遇到超长示例时会超时
export function pathsWithMaxScore_1(board: string[]): number[] {
  const len = board.length;
  const INF = Number.MIN_SAFE_INTEGER;
  const used: boolean[][] = Array.from({ length: len }, () =>
    new Array(len).fill(false)
  );
  const dfs = (row: number, col: number): [number, number] => {
    if (row > len - 1 || col > len - 1 || used[row][col]) return [INF, 0];
    const cell = board[row][col];

    if (!isNaN(+cell) || cell === "E") {
      let u = dfs(row + 1, col);
      let r = dfs(row, col + 1);
      let s = dfs(row + 1, col + 1);

      let max = Math.max(u[0], r[0], s[0]);
      if (max === INF) return [INF, 0];
      let num = 0;
      if (max === u[0]) num += u[1];
      if (max === r[0]) num += r[1];
      if (max === s[0]) num += s[1];
      if (cell !== "E") max += +cell;

      return [max % (10 ** 9 + 7), num % (10 ** 9 + 7)];
    }
    if (cell === "S") {
      return [0, 1];
    }
    if (cell === "X") {
      used[row][col] = true;
      return [INF, 0];
    }

    return [0, 0];
  };

  const res = dfs(0, 0);

  return res[0] === INF ? [0, 0] : res;
}

export function pathsWithMaxScore(board: string[]): number[] {
  // 将每一个节点的最大值和可能出现的情况进行计算
  // 只计算三个方向的值，不进行递归收集
  const INF = Number.MIN_SAFE_INTEGER;
  const mod = 10 ** 9 + 7;
  const length = board.length;
  const wallX = length + 2;
  const wallY = length + 2;
  let dp = new Array(wallY);

  for (let row = 0; row < wallY; row++) {
    dp[row] = new Array(wallX);
    for (let col = 0; col < wallX; col++) {
      if (row > 0 && col > 0 && row < length + 1 && col < length + 1) {
        let char = board[row - 1][col - 1];
        switch (char) {
          case "X":
            dp[row][col] = [INF, 0];
            break;
          case "S":
          case "E":
            dp[row][col] = [0, 0];
            break;
          default:
            dp[row][col] = [+char, 0];
        }
      } else {
        dp[row][col] = [INF, 0];
      }
    }
  }

  dp[length + 1][length + 1] = [0, 1];

  for (let row = length; row >= 1; row--) {
    for (let col = length; col >= 1; col--) {
      let max = Math.max(
        dp[row][col + 1][0],
        dp[row + 1][col][0],
        dp[row + 1][col + 1][0]
      );
      if (max === dp[row][col + 1][0])
        dp[row][col][1] += dp[row][col + 1][1] % mod;
      if (max === dp[row + 1][col][0])
        dp[row][col][1] += dp[row + 1][col][1] % mod;
      if (max === dp[row + 1][col + 1][0])
        dp[row][col][1] += dp[row + 1][col + 1][1] % mod;
      dp[row][col][0] += max;
    }
  }

  if (dp[1][1][0] < 0) {
    return [0, 0];
  }

  return dp[1][1];
}

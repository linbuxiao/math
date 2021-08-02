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

export function pathsWithMaxScore(board: string[]): number[] {
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

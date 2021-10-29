// 在 n*m 大小的棋盘中，有黑白两种棋子，黑棋记作字母 "X", 白棋记作字母 "O"，空余位置记作 "."。当落下的棋子与其他相同颜色的棋子在行、列或对角线完全包围（中间不存在空白位置）另一种颜色的棋子，则可以翻转这些棋子的颜色。

export function flipChess(chessboard: string[]): number {
  // 遍历所有. ，找到周围有`o`的情况
  const [m, n] = [chessboard.length, chessboard[0].length];
  const [direct_x, direct_y] = [
    [1, 1, 1, 0, 0, -1, -1, -1],
    [0, 1, -1, 1, -1, 0, 1, -1],
  ];

  function valid(row: number, col: number) {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return false;
    return true;
  }

  function dfs(
    sum: number,
    row: number,
    col: number,
    used: boolean[][],
  ): number {
    if (
      !valid(row, col) ||
      (chessboard[row][col] === "." && sum !== 0) ||
      used[row][col]
    ) {
      return 0;
    }
    if (chessboard[row][col] === "X") return sum;

    used[row][col] = true;
    let tmp = 0;

    for (let k in direct_x) {
      const [nr, nc] = [row + direct_x[k], col + direct_y[k]];
      tmp += dfs(sum + 1, nr, nc, used);
    }
    if (row === 1 && col === 3) {
      console.log(tmp, sum);
    }

    return (sum += tmp);
  }

  let max = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (chessboard[row][col] === ".") {
        const tmp = dfs(
          0,
          row,
          col,
          Array.from({ length: m }, () => new Array(n).fill(false)),
        );
        max = Math.max(tmp, max);
      }
    }
  }

  return max;
}

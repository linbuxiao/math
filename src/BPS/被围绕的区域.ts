// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

// 输入：board = [
//   ["X","X","X","X"],
//   ["X","O","O","X"],
//   ["X","X","O","X"],
//   ["X","O","X","X"]
// ]
// 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

export function solve(board: string[][]): void {
  const [m, n] = [board.length, board[0].length];
  const [direct_x, direct_y] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  for (let row = 1; row < m - 1; row++) {
    for (let col = 1; col < n - 1; col++) {
      const queue: number[][] = [[row, col]];
      const stack: number[][] = [[row, col]];
      const used = Array.from({ length: m }, () => new Array(n).fill(false));
      let flag = false;
      while (queue.length) {
        const [i, j] = queue.shift()!;

        if (board[i][j] === "X" || used[i][j]) continue;
        if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
          flag = true;
        }
        used[i][j] = true;
        for (let k in Array.from({ length: 4 })) {
          const [nr, nc] = [i + direct_x[k], j + direct_y[k]];
          if (nr >= 0 && nc >= 0 && nr < m && nc < n && board[nr][nc] === "O") {
            queue.push([nr, nc]);
            stack.push([nr, nc]);
          }
        }
      }
      if (flag === false) {
        for (let a of stack) {
          const [i, j] = a;
          board[i][j] = "X";
        }
      }
    }
  }
}

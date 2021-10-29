/**
 * 让我们一起来玩扫雷游戏！
 * 给定一个代表游戏板的二维字符矩阵。 'M' 代表一个未挖出的地雷，'E' 代表一个未挖出的空方块，'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，'X' 则表示一个已挖出的地雷。
 * 现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：
 * 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
 * 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
 * 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
 * 如果在此次点击中，若无更多方块可被揭露，则返回面板。
 */

export function updateBoard(board: string[][], click: number[]): string[][] {
  const [r0, c0] = click;
  const m = board.length;
  const n = board[0].length;
  // 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'
  if (board[r0][c0] === "M") {
    board[r0][c0] = "X";
    return board;
  }

  // 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
  if (board[r0][c0] === "E") {
    // 0 未遍历
    // 1 已遍历
    // 2 为E 四周均无
    // 3 为E 四周有 并取数值
    const used = Array.from({ length: m }, () => new Array(n).fill(0));
    const dfs = (row: number, col: number) => {
      if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return;
      if (used[row][col]) return;
      used[row][col] = 1;
      if (board[row][col] === "E") {
        if (
          (row > 0 && board[row - 1][col] === "M") ||
          (row < m - 1 && board[row + 1][col] === "M") ||
          (col > 0 && board[row][col - 1] === "M") ||
          (col < n - 1 && board[row][col + 1] === "M") ||
          (row > 0 && col > 0 && board[row - 1][col - 1] === "M") ||
          (row > 0 && col < n - 1 && board[row - 1][col + 1] === "M") ||
          (row < m - 1 && col > 0 && board[row + 1][col - 1] === "M") ||
          (row < m - 1 && col < n - 1 && board[row + 1][col + 1] === "M")
        ) {
          used[row][col] = 3;
        } else {
          used[row][col] = 2;
          dfs(row + 1, col);
          dfs(row - 1, col);
          dfs(row, col + 1);
          dfs(row, col - 1);
          if (row > 0 && col > 0) dfs(row - 1, col - 1);
          if (row > 0 && col < n - 1) dfs(row - 1, col + 1);
          if (row < m - 1 && col > 0) dfs(row + 1, col - 1);
          if (row < m - 1 && col < n - 1) dfs(row + 1, col + 1);
        }
      }

      if (board[row][col] === "B") {
        used[row][col] = 2;
      }

      // 为数字
      if (!isNaN(Number(board[row][col]))) {
        used[row][col] = 3;
      }
    };

    dfs(r0, c0);
    console.log(used);

    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        const tag = used[row][col];
        // if(tag === 1 && board[row][col] === "E") board[row][col] = "E"
        if (tag === 2) board[row][col] = "B";
        if (tag === 3) {
          let num = 0;
          if (row > 0 && board[row - 1][col] === "M") num++;
          if (col > 0 && board[row][col - 1] === "M") num++;
          if (row < m - 1 && board[row + 1][col] === "M") num++;
          if (col < n - 1 && board[row][col + 1] === "M") num++;
          if (row > 0 && col > 0 && board[row - 1][col - 1] === "M") num++;
          if (row > 0 && col < n - 1 && board[row - 1][col + 1] === "M") num++;
          if (row < m - 1 && col > 0 && board[row + 1][col - 1] === "M") num++;
          if (row < m - 1 && col < n - 1 && board[row + 1][col + 1] === "M") {
            num++;
          }
          board[row][col] = `${num}`;
        }
      }
    }
  }

  return board;
}

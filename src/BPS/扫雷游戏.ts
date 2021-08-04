// 让我们一起来玩扫雷游戏！

// 给定一个代表游戏板的二维字符矩阵。 'M' 代表一个未挖出的地雷，'E' 代表一个未挖出的空方块，'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，'X' 则表示一个已挖出的地雷。

// 现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：

// 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
// 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
// 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
// 如果在此次点击中，若无更多方块可被揭露，则返回面板。

// 输入:

// [['E', 'E', 'E', 'E', 'E'],
//  ['E', 'E', 'M', 'E', 'E'],
//  ['E', 'E', 'E', 'E', 'E'],
//  ['E', 'E', 'E', 'E', 'E']]

// Click : [3,0]

// 输出:

// [['B', '1', 'E', '1', 'B'],
//  ['B', '1', 'M', '1', 'B'],
//  ['B', '1', '1', '1', 'B'],
//  ['B', 'B', 'B', 'B', 'B']]

export function updateBoard(board: string[][], click: number[]): string[][] {
  const [m, n] = [board.length, board[0].length];
  const direct_x = [0, 0, 1, -1, 1, -1, 1, -1];
  const direct_y = [1, -1, 0, 0, -1, 1, 1, -1];

  const valid = (row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return false;
    return true;
  };

  const boom = (row: number, col: number): number => {
    let num = 0;
    for (let k in direct_x) {
      const [nr, nc] = [row + direct_x[k], col + direct_y[k]];
      if (valid(nr, nc)) {
        if (board[nr][nc] === "M") num++;
      }
    }
    return num;
  };

  switch (board[click[0]][click[1]]) {
    case "M": {
      // 挖到地雷
      board[click[0]][click[1]] = "X";
      return board;
    }
    case "E": {
      const queue = [click];
      let cur: number[][] = [];
      const update = () => {
        if (queue.length === 0) {
          queue.push(...cur);
          cur = [];
        }
      };
      while (queue.length) {
        const [i, j] = queue.pop()!;
        if (!valid(i, j) || board[i][j] === "M") {
          update();
          continue;
        }

        if (board[i][j] === "E") {
          // 先判断周围有没有雷
          const num = boom(i, j);
          if (num === 0) {
            for (let k in direct_x) {
              cur.push([i + direct_x[k], j + direct_y[k]]);
            }
            board[i][j] = "B";
          } else {
            board[i][j] = `${num}`;
          }
        }
        update();
      }
    }
    default: {
      // do nothing
    }
  }

  return board;
}

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
  const direct_x = [0, 0, 1, -1, 1, -1];
  const direct_y = [1, -1, 0, 0, -1, 1];
  switch (board[click[0]][click[1]]) {
    case "M": {
      // 挖到地雷
      board[click[0]][click[1]] = "X";
      return board;
    }
    case "E": {
      const queue = [click];
      let cur: number[][] = [];
      const booms = [];
      const update = () => {
        if (queue.length === 0) {
          queue.push(...cur);
          cur = [];
        }
      };
      while (queue.length) {
        const [i, j] = queue.pop()!;

        if (board[i][j] === "M") {
          booms.push([i, j]);
          continue;
        }

        if (board[i][j] === "E") {
          const tmp = [];
          let flag = false;
          for (let k in direct_x) {
            const [nr, nc] = [i + direct_x[k], j + direct_y[k]];
            if (nr >= 0 && nc >= 0 && nr < m && nc < n && board[i][j] !== "B") {
              if (board[nr][nc] === "M") {
                booms.push([i, j]);
                flag = true;
                break;
              }
              board[i][j] = "B";
              tmp.push([i + direct_x[k], j + direct_y[k]]);
            }
          }
          !flag && cur.push(...tmp);
        }
        update();
      }

      console.log(board);
    }
    default: {
      // do nothing
    }
  }

  return board;
}

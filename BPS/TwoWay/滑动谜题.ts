// 在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示.

// 一次移动定义为选择 0 与一个相邻的数字（上下左右）进行交换.

// 最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。

// 给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。

// 示例：

// 输入：board = [[1,2,3],[4,0,5]]
// 输出：1
// 解释：交换 0 和 5 ，1 步完成
// 输入：board = [[1,2,3],[5,4,0]]
// 输出：-1
// 解释：没有办法完成谜板
// 输入：board = [[4,1,2],[5,0,3]]
// 输出：5
// 解释：
// 最少完成谜板的最少移动次数是 5 ，
// 一种移动路径:
// 尚未移动: [[4,1,2],[5,0,3]]
// 移动 1 次: [[4,1,2],[0,5,3]]
// 移动 2 次: [[0,1,2],[4,5,3]]
// 移动 3 次: [[1,0,2],[4,5,3]]
// 移动 4 次: [[1,2,0],[4,5,3]]
// 移动 5 次: [[1,2,3],[4,5,0]]
// 输入：board = [[3,2,4],[1,5,0]]
// 输出：14

export function slidingPuzzle(board: number[][]): number {
  const [direct_x, direct_y] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];
  const RESULT = "123450";
  const visited = new Set<string>();

  const format = (nums: number[][]) => {
    let s = "";
    nums.forEach((row) => {
      s += row.join("");
    });
    return s;
  };

  const findZero = (nums: number[][]) => {
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        if (!nums[row][col]) return [row, col];
      }
    }
    return [-1, -1];
  };

  let queue: number[][][] = [board];
  visited.add(format(board));

  let step = 0;
  while (queue.length) {
    let tmp = [];
    let flag = false;
    for (let item of queue) {
      if (format(item) === RESULT) flag = true;
      const [X, Y] = findZero(item);
      for (let k in direct_x) {
        const [nr, nc] = [X + direct_x[k], Y + direct_y[k]];
        if (nr < 0 || nc < 0 || nr > 1 || nc > 2) continue;

        const newBoard: number[][] = [[], []];
        for (let row = 0; row < 2; row++) {
          for (let col = 0; col < 3; col++) {
            newBoard[row][col] = item[row][col];
          }
        }

        const behindMove = newBoard[nr][nc];
        newBoard[nr][nc] = 0;
        newBoard[X][Y] = behindMove;
        const newStr = format(newBoard);

        if (!visited.has(newStr)) {
          tmp.push(newBoard);
          visited.add(newStr);
        }
      }
    }
    if (flag) break;
    if (tmp.length) {
      step++;
    } else {
      step = -1;
      break;
    }

    queue = [...tmp];
  }

  return step;
}

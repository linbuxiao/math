/**
 * 编写一个程序，通过填充空格来解决数独问题。
 * 数独的解法需 遵循如下规则：
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 */

/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku(board: string[][]): void {
  const isValid = (x: number, y: number, k: number, board: string[][]) => {
    const val = `${k}`;

    for (let i = 0; i < 9; i++) {
      if (board[y][i] === val) return false;
      if (board[i][x] === val) return false;
    }

    const startRow = Math.floor(x / 3) * 3;
    const startCol = Math.floor(y / 3) * 3;

    for (let j = startRow; j < startRow + 3; j++) {
      for (let k = startCol; k < startCol + 3; k++) {
        if (board[k][j] === val) return false;
      }
    }

    return true;
  };

  const backTracking = (board: string[][]) => {
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        if (board[y][x] !== ".") continue;

        for (let k = 1; k <= 9; k++) {
          if (isValid(x, y, k, board)) {
            board[y][x] = `${k}`;

            if (backTracking(board)) {
              return true;
            }
            board[y][x] = ".";
          }
        }

        return false;
      }
    }
    return true;
  };

  backTracking(board);
}

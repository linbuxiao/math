// 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

// 注意：

// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。

export function isValidSudoku(board: string[][]): boolean {
  // 已确定是9 x 9 的数独，有9块 3 x 3, 9 列， 9行

  // 根据一个位置遍历一次的原则进行记录
  let row = new Array(9).fill(0);
  let col = new Array(9).fill(0);
  let box = new Array(9).fill(0);

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      // 遍历到一个数时，在三个维度记录
      if (board[x][y] === ".") continue;
      const num = +board[x][y];
      const idx = Math.floor(x / 3) * 3 + Math.floor(y / 3);
      if ((row[x] >> num) & 1 || (col[y] >> num) & 1 || (box[idx] >> num) & 1) {
        return false;
      }
      row[x] |= 1 << num;
      col[y] |= 1 << num;
      box[idx] |= 1 << num;
    }
  }

  return true;
}

// 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。

// 单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

export function findWords(board: string[][], words: string[]): string[] {
  const [dx, dy] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];
  const [m, n] = [board.length, board[0].length];
  const set = new Set<string>();
  const wordsSet = new Set(words);
  const maxLen = words.sort((a, b) => b.length - a.length)[0].length;

  function dfs(
    row: number,
    col: number,
    used = new Array(m).fill(0),
    str = ""
  ) {
    if (
      row < 0 ||
      col < 0 ||
      row > m - 1 ||
      col > n - 1 ||
      str.length > maxLen ||
      (used[row] >> col) & 1
    )
      return;
    used[row] |= 1 << col;
    const newStr = str + board[row][col];

    if (wordsSet.has(newStr) && !set.has(newStr)) {
      set.add(newStr);
    }

    for (let k in dx) {
      const newUsed = [...used];
      dfs(row + dx[k], col + dy[k], newUsed, newStr);
    }
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (!set.has(word) && word[0] === board[row][col]) {
          dfs(row, col);
          break;
        }
      }
    }
  }

  return Array.from(set);
}

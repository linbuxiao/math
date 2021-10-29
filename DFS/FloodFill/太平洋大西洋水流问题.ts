/**
 * 给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。
 * 规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。
 * 请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。
 */

// left 左侧和顶部太平洋
// right 右侧和底部大西洋
export function pacificAtlantic(heights: number[][]): number[][] {
  const result = [];
  const dfs = (row: number, col: number, used: boolean[][]) => {
    let left: boolean = false;
    let right: boolean = false;

    for (let x = 0; x < heights[0].length; x++) {
      if (used[0][x]) {
        left = true;
      }

      if (used[used.length - 1][x]) {
        right = true;
      }
    }

    for (let y = 0; y < heights.length; y++) {
      if (used[y][0]) {
        left = true;
      }

      if (used[y][used[0].length - 1]) {
        right = true;
      }
    }

    if (left && right) return true;
    // if(left || right) {
    //   for(let x = 0; x<used[0].length; x++) {
    //     if(left && x !== used[0].length - 1) {
    //       used[0][x] = true
    //     }

    //     if(right && x !== 0) {
    //       used[used.length - 1][x] = true
    //     }
    //   }

    //   for(let y = 0; y<used.length; y++) {
    //     if(left && y !== used.length - 1) {
    //       used[y][0] = true
    //     }

    //     if(right && y !== 0) {
    //       used[y][used[0].length - 1] = true
    //     }
    //   }
    // }

    const val = heights[row][col];
    if (row > 0 && heights[row - 1][col] <= val) {
      if (!used[row - 1][col]) {
        used[row - 1][col] = true;
        if (dfs(row - 1, col, used)) return true;
      }
    }

    if (col < heights[0].length - 1 && heights[row][col + 1] <= val) {
      if (!used[row][col + 1]) {
        used[row][col + 1] = true;
        if (dfs(row, col + 1, used)) return true;
      }
    }

    if (row < heights.length - 1 && heights[row + 1][col] <= val) {
      if (!used[row + 1][col]) {
        used[row + 1][col] = true;
        if (dfs(row + 1, col, used)) return true;
      }
    }

    if (col > 0 && heights[row][col - 1] <= val) {
      if (!used[row][col - 1]) {
        used[row][col - 1] = true;
        if (dfs(row, col - 1, used)) return true;
      }
    }

    return false;
  };
  // 遍历所有的棋盘
  for (let row = 0; row < heights.length; row++) {
    for (let col = 0; col < heights[0].length; col++) {
      let used = [];
      for (let y = 0; y < heights.length; y++) {
        let r = [];
        for (let x = 0; x < heights[0].length; x++) {
          r.push(false);
        }
        used.push(r);
      }

      used[row][col] = true;
      if (dfs(row, col, used)) {
        result.push([row, col]);
      }
    }
  }
  return result;
}

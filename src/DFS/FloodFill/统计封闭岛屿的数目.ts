/**
 * 有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。
 * 我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。
 * 如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。
 * 请返回封闭岛屿的数目。
 */

// 双重遍历暴力法
export function closedIsland_1(grid: number[][]): number {
  let num = 0;
  const used: number[][] = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(0)
  );

  // 是孤岛 / 不是孤岛
  const dfs = (row: number, col: number, chess: number[][]) => {
    if (chess[row][col]) return true;
    // 如果遇到了1, 证明前一个引用这个方块的是正确的
    if (grid[row][col] === 1) return true;
    // 当触及到边界，并且为0的时候，返回false
    used[row][col] = 1;
    chess[row][col] = 1;
    if (
      row === 0 ||
      col === 0 ||
      row === grid.length - 1 ||
      col === grid[0].length - 1
    )
      return false;

    // 如果遇到了0，就要看这个0是否是正确的，继续遍历四周

    if (
      dfs(row - 1, col, chess) &&
      dfs(row + 1, col, chess) &&
      dfs(row, col + 1, chess) &&
      dfs(row, col - 1, chess)
    ) {
      return true;
    }
    return false;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0 && !used[row][col]) {
        const chess: number[][] = Array.from({ length: grid.length }, () =>
          new Array(grid[0].length).fill(0)
        );
        if (dfs(row, col, chess)) {
          num++;
        }
      }
    }
  }

  return num;
}

export function closedIsland(grid: number[][]): number {
  let num = 0;
  const used = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(0)
  );

  const dfs = (row: number, col: number) => {
    if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1)
      return;

    if (used[row][col]) return;
    if (grid[row][col]) return;

    used[row][col] = 1;

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let y = 0; y < grid.length; y++) {
    if (grid[y][0] === 0) dfs(y, 0);
    if (grid[y][grid[0].length - 1] === 0) dfs(y, grid[0].length - 1);
  }

  for (let x = 0; x < grid[0].length; x++) {
    if (grid[0][x] === 0) dfs(0, x);
    if (grid[grid.length - 1][x] === 0) dfs(grid.length - 1, x);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (!grid[row][col] && !used[row][col]) {
        dfs(row, col);
        num++;
      }
    }
  }

  return num;
}

/**
 * 给出一个二维数组 A，每个单元格为 0（代表海）或 1（代表陆地）。
 * 移动是指在陆地上从一个地方走到另一个地方（朝四个方向之一）或离开网格的边界。
 * 返回网格中无法在任意次数的移动中离开网格边界的陆地单元格的数量。
 */


export function numEnclaves(grid: number[][]): number {
  let num = 0
  const used: boolean[][] = []
  for(let y = 0; y<grid.length; y++) {
    let row = []
    for(let x = 0; x<grid[0].length; x++) {
      row.push(false)
    }
    used.push(row)
  }

  const dfs = (row: number, col: number) => {
    if(row > 0 && grid[row - 1][col] === 1) {
      if(!used[row - 1][col]) {
        used[row - 1][col] = true
        dfs(row - 1, col)
      }
    }

    if(row < grid.length - 1 && grid[row + 1][col] === 1) {
      if(!used[row + 1][col]) {
        used[row + 1][col] = true
        dfs(row + 1, col)
      }
    }

    if(col > 0 && grid[row][col - 1]) {
      if(!used[row][col - 1]) {
        used[row][col - 1] = true
        dfs(row, col - 1)
      }
    }

    if(col < grid[0].length - 1 && grid[row][col + 1]) {
      if(!used[row][col + 1]) {
        used[row][col + 1] = true
        dfs(row, col + 1)
      }
    }
  }

  for(let col = 0; col < grid[0].length; col ++) {
    if(grid[0][col] === 1) dfs(0, col)
    if(grid[grid.length - 1][col] === 1) dfs(grid.length - 1, col)
  }

  for(let row = 0; row < grid.length; row++) {
    if(grid[row][0] === 1) dfs(row, 0)
    if(grid[row][grid[0].length - 1] === 1) dfs(row, grid[0].length - 1)
  }

  for(let row = 1; row < grid.length - 1; row++) {
    for(let col = 1; col < grid[0].length - 1; col++) {
      if(grid[row][col] === 1 && !used[row][col]) num++
    }
  }
  
  return num
};
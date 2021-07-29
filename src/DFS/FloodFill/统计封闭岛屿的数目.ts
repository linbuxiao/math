/**
 * 有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。
 * 我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。
 * 如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。
 * 请返回封闭岛屿的数目。
 */

export function closedIsland(grid: number[][]): number {
  let num = 0
  const used: boolean[][] = []
  const path = []
  for(let y = 0; y<grid.length; y++) {
    let r = []
    for(let x = 0; x<grid[0].length; x++) {
      r.push(false)
    }
    used.push(r)
  }

  

  const dfs = (row: number, col: number) => {
    used[row][col] = true
    if(row === 0 || row === grid.length - 1 || col === 0 || col === grid[0].length - 1) {
      console.log(row, col);
      
      return false
    }

    if(row > 0 && grid[row - 1][col] === 0) {
      if(!used[row - 1][col]) {
        // if(dfs(row - 1, col)) return true
        dfs(row - 1, col)
      }
    }

    if(row < grid.length - 1 && grid[row + 1][col] === 0) {
      if(!used[row + 1][col]) {
        // if(dfs(row + 1, col)) return true
        dfs(row + 1, col)
      }
    }

    if(col > 0 && grid[row][col - 1] === 0) {
      if(!used[row][col - 1]) {
        // if(dfs(row, col -1)) return true
        dfs(row, col -1)
      }
    }

    if(col < grid[0].length - 1 && grid[row][col + 1] === 0) {
      if(!used[row][col + 1]) {
        // if(dfs(row, col + 1)) return true
        dfs(row, col + 1)
      }
    }
    
    return true
  }

  // 无需遍历最外层
  for(let y = 1; y<grid.length - 1; y++) {
    for(let x = 1; x<grid[0].length - 1; x++) {
      if(!used[y][x] && grid[y][x] === 0) {
        if(dfs(y, x)) {
          path.push([y,x])
          num++
        }
      }
    }
  }
  console.log(path);
  
  return num
};
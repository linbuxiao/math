/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

 * 此外，你可以假设该网格的四条边均被水包围。
 */

export function numIslands(grid: string[][]): number {
  let num = 0

  const dfs = (row: number, col: number, path: number[][]) => {
    // 向上
    if(row > 0 && grid[row - 1][col] === "1") {
      if(!used[row - 1][col]) {
        used[row - 1][col] = true
        path.push([row - 1, col])
        dfs(row - 1, col, path)
      }
    }
    // 向下
    if(row < grid.length - 1 && grid[row + 1][col] === "1") {
      if(!used[row + 1][col]) {
        used[row + 1][col] = true
        path.push([row + 1, col])
        dfs(row + 1, col, path)
      }
    }
    // 向左
    if(col > 0 && grid[row][col - 1] === "1") {
      if(!used[row][col - 1]) {
        used[row][col - 1] = true
        path.push([row, col - 1])
        dfs(row, col - 1, path)
      }
    }
    // 向右
    if(col <  grid[0].length - 1 && grid[row][col + 1] === "1") {
      if(!used[row][col + 1]) {
        used[row][col + 1] = true
        path.push([row, col + 1])
        dfs(row, col + 1, path)
      }      
    }
  }

  const used: boolean[][] = []
  for(let row = 0; row < grid.length; row++) {
    let arr = []
    for(let col = 0; col < grid[0].length; col++) {
      arr.push(false)
    }
    used.push(arr)
  }

  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === "1" && !used[row][col]) {
        used[row][col] = true
        dfs(row, col, [[row, col]])
        num++
      }
    }
  }

  return num
};
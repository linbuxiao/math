/**
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 */

/**
 Do not return anything, modify board in-place instead.
 */
export function solve(board: string[][]): void {
  if(board.length <= 1) return
  // 分两部分遍历
  // 1. 遍历外圈，拿到所有和外圈连接的坐标，并打上tag
  // 2. 遍历内容，所有没有被打上tag的O，都转化为X
  
  const dfs = (row: number, col: number) => {
    // 向上
    if(row > 0 && board[row - 1][col] === "O") {
      if(!used[row - 1][col]) {
        used[row - 1][col] = true
        dfs(row - 1, col)
      }
    }
    // 向下
    if(row < board.length - 1 && board[row + 1][col] === "O") {
      if(!used[row + 1][col]) {
        used[row + 1][col] = true
        dfs(row + 1, col)
      }
    }
    // 向左
    if(board[row][col - 1] === "O") {
      if(!used[row][col - 1]) {
        used[row][col - 1] = true
        dfs(row, col - 1)
      }
    }

    if(board[row][col + 1] === "O") {
      if(!used[row][col + 1]) {
        used[row][col + 1] = true
        dfs(row, col + 1)
      }
    }
  }

  // 建立tag矩阵
  const used: boolean[][] = []
  for(let row = 0; row < board.length; row++) {
    let row = []
    for(let col = 0; col < board[0].length; col++) {
      row.push(false)
    }
    used.push(row)
  }

  // 遍历外圈

  // 遍历第一层 和最后一层
  for(let i = 0; i< board[0].length; i++) {
    // 第一层
    if(board[0][i] === "O") {
      dfs(0, i)
    }

    // 最后一层
    if(board[board.length - 1][i] === "O") {
      dfs(board.length - 1, i)
    }
  }

  // 遍历最左侧 和最右侧
  for(let i = 1; i<board.length - 1; i++) {
    if(board[i][0] === "O") {
      dfs(i, 0)
    }

    if(board[i][board[i].length - 1] === "O") {
      dfs(i, board[i].length - 1)
    }
  }

  // 遍历内圈
  for(let row = 1; row < board.length - 1; row ++) {
    for(let col = 1; col < board[0].length - 1; col ++) {
      if(board[row][col] === "O" && !used[row][col]) {
        board[row][col] = "X"
      }
    }
  }
};
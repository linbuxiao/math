/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 */


// 最大问题，不能回头

export function exist(board: string[][], word: string): boolean {
  const dfs = (row: number, col: number, k: number, used: boolean[][]): boolean => {  
    // 当前项的位置
    if(k === word.length) return true // 当按规则处理到最后一项后
    
    if(row >= 1 && board[row - 1][col] === word[k]) {
      console.log("up", row, col);

      if(!used[row - 1][col]) {
        used[row - 1][col] = true
        if(dfs(row - 1, col, k + 1, used)) return true
        used[row - 1][col] = false
      }
    }
    if(row < board.length - 1 && board[row + 1][col] === word[k]) {
      console.log("down", row, col);

      if(!used[row + 1][col]) {
        used[row + 1][col] = true
        if(dfs(row + 1, col, k + 1, used)) return true
        used[row + 1][col] = false
      }
    }
    if(col < board[0].length - 1 && board[row][col + 1] === word[k]) {
      console.log("right", row, col);

      if(!used[row][col + 1]) {
        used[row][col + 1] = true
        if(dfs(row, col + 1, k + 1, used)) return true
        used[row][col + 1] = false
      }
    }
    if(col >= 1 && board[row][col - 1] === word[k]) {
      console.log("left", row, col);
      
      if(!used[row][col - 1]) {     
        used[row][col - 1] = true
        if(dfs(row, col - 1, k + 1, used)) return true
        used[row][col - 1] = false
      }
    }

    return false
  }



  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board[0].length; col++) {
      // 找到第一项
      if(board[row][col] === word[0]) {
        const used: boolean[][] = []
        // 构建used矩阵
        for(let y = 0; y < board.length; y++) {
          let row: boolean[] = []
          for(let x = 0; x < board[0].length; x++) {
            row.push(false)
          }
          used.push(row)
        }

        used[row][col] = true
        
        if(dfs(row, col, 1, used)) return true
      }
    }
  }

  return false
};
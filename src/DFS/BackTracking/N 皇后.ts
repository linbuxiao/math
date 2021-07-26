/**
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */


// 回溯算法经典题目大赏
export function solveNQueens_1(n: number): string[][] {
  // 是否可暴力求解？  可解，而且还过了。
  let res: string[][] = [] // 收集结果



  const isVaild = (Qs : number[][]): boolean => {
    let flag = true

    // 遍历棋子
    for(let i = 0; i<Qs.length; i++) {
      
      let [ x, y ] = Qs[i]

      const wrongQ = Qs.filter((item, index) => {
        // 检查y上是否有棋子
        if(item[0] === x || item[1] === y) {
          
          if(index !== i) return true
        } 

        while(x>= 0 && y >= 0) {
          x--
          y--
          if(item[0] === x && item[1] === y) return true
        }

        [x , y] = Qs[i]

        while(x < n && y >= 0) {
          x++
          y--
          if(item[0] === x && item[1] === y) return true
        }

        [x , y] = Qs[i]

        return false
      })
      
      if(wrongQ.length !== 0) {
        flag = false
        break
      }
    }

    return flag
  }
  

  const board: number[][][] = []

  // 递归生成所有可能存在的棋盘
  const buildBoard = (i: number, n: number, board: number[][][] = []): number[][][] => {
    if(i < n) {
      if(board.length === 0) {
        for(let x = 0; x < n; x++) {
          board.push([[i, x]])
        }
      } else {
        let res: number[][][]  = []
        for(let x = 0; x< board.length; x++) {
          for(let j = 0; j<n; j++) {
            let temp = board[x].concat([[i, j]])
            if(isVaild(temp)) {
              res.push(temp)
            } 
          }
        }
        
        board = res
      }
      
      return buildBoard(i+1, n, board)
    } else {
      // 停止
      
      return board
    }
  }

  const buildStrBoard = (item : number[][]): string[] => {
    let board: string[][] = [] // 构造棋盘
    for (let i = 0; i< n; i++) {
      let row = []
      for(let r = 0; r< n; r++) {
        row.push(".")
      }
      board.push(row)
    }

    for(let i = 0; i < item.length; i++) {
      const [x,y] = item[i]
      board[y][x] = "Q"
    }
    
    const res: string[] = []

    for(let i = 0; i < board.length; i++) {
      res.push(board[i].join(""))
    }

    return res
  }

  const allBoard = buildBoard(0, n, board)
  allBoard.forEach(item => {
    
      res.push(buildStrBoard(item))
  })  
  
  return res
};

export function solveNQueens(n: number): string[][] {
  const isValid = (row: number, col: number, chessBoard: string[][], n: number): boolean => {
    for(let i = 0; i< row; i++) {
      if(chessBoard[i][col] === 'Q') return false
    }

    for(let i = row - 1, j = col - 1; i>=0 && j >= 0; i--, j--) {
      if(chessBoard[i][j] === 'Q') return false
    }

    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if(chessBoard[i][j] === 'Q') return false
    }

    return true
  }

  const transformChessBoard = (chessBoard: string[][]): string[] => {
    let chessBoardBack: string[] = []
    chessBoard.forEach(row => {
      let rowStr = ''
      row.forEach(str => {
        rowStr += str
      })
      chessBoardBack.push(rowStr)
    })

    return chessBoardBack
  }

  let result: string[][] = []

  const backTracking = (row: number, chessBoard: string[][]) => {
    if(row === n) {
      result.push(transformChessBoard(chessBoard))
      return
    }

    for(let col = 0; col < n; col++) {
      if(isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = 'Q'
        backTracking(row + 1, chessBoard)
        chessBoard[row][col] = '.'
      }
    }
  }

  let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'))

  backTracking(0, chessBoard)
  return result
};
/**
 * 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 * 1. 数字 1-9 在每一行只能出现一次。
 * 2. 数字 1-9 在每一列只能出现一次。
 * 3. 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 * 输入：board =
 [["5","3",".",".","7",".",".",".","."]
 ,["6",".",".","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]]
 输出：true
 */


// 遍历每一项
// row = [[map{ 出现的数字：是否重复出现 }],[],[]...x9]
// col = [[map{ 出现的数字：是否重复出现 }],[],[]...x9]
// box = [[map{ 出现的数字：是否重复出现 }],[],[]...x9]

// 如果重复出现，就直接返回false

/**
 * 数字从1到9
 */
type numberType = 0|1|2|3|4|5|6|7|8

function isValidSudoku(board: string[][]): boolean {
  let row: Set<number>[] = []
  let col: Set<number>[] = []
  let box: Set<number>[] = []

  function parseBoxPos(x: numberType, y:numberType) {
    let position: numberType

    // 解析y轴
    if(y>=0 && y<3) {
      position = 0
    } else if (y>= 3 && y<6) {
      position = 3
    } else {
      position = 6
    }

    // 解析x轴
    if(x>=0 && x<3) {
      position += 0
    } else if (x>=3 && x<6) {
      position += 1
    } else {
      position += 2
    }

    return position
  }

  for(let i = 0; i<board.length; i++) {
    // 遍历横排里的每一项
    // row = 0, 0-2 => box1 | 3-5 => box2 | 6-8=> box3
    // row = 1, 0-2 => box1
    // ...
    // row = 3, 0-2 => box4
    // row = 6, 0-2 => box7
    row[i] = new Set()
    for (let x = 0; x<9; x++) {
      if(board[i][x] === ".") continue
      let value = +board[i][x]
      let boxPos = parseBoxPos(x as numberType, i as numberType)
      // 如果没有col集合，则创建
      if(!col[x]) col[x] = new Set()
      if(!box[boxPos]) box[boxPos] = new Set()
      // 判断当前的row 有无当前值board[i][x]
      if(row[i].has(value)) return false
      row[i].add(value)
      if(col[x].has(value)) return false
      col[x].add(value)
      if(box[boxPos].has(value)) return false
      box[boxPos].add(value)
    }
  }

  return  true
};
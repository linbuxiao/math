/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 */

export function spiralOrder(matrix: number[][]): number[] {
  let res:number[]= []
  while (matrix.length) {
    if(matrix.length) {
      res = res.concat(matrix.shift()!)
    }
    for(let a = 0; a<matrix.length; a++) {
      if(matrix[a].length === 1) {
        res = res.concat(matrix.shift()!)
        a--
      } else {
        res.push(matrix[a].pop()!)
      }
      matrix.length && matrix[a] && matrix[a].reverse()
    }
    
    matrix.length && matrix.reverse()
  }

  return res
};

// 2. codewar解法
export function spiralOrder_1(matrix: number[][]): number[] {
  let result: number[] = []
  while (matrix.length) {
    result.concat(matrix.shift()!)
    matrix.map(row => result.push(row.pop()!))
    matrix.reverse().map(row=> row.reverse())
  }

  return result
}
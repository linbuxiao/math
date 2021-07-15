/**
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * 输入：target = 9
 * 输出：[[2,3,4],[4,5]]
 */

export function findContinuousSequence(target: number): number[][] {
  let res: number[][] = []
  for(let x = 1; x<target; x++) {
    let s = 0
    for(let y = x; y<target; y++) {
      s += y
      if(s > target) {
        break
      }
      if(s === target) {
        let arr = Array.from({length: y - x + 1}).fill(x).map((_,i)=> x+i)
        res.push(arr)
        break
      }
    }
  }
  return res
};
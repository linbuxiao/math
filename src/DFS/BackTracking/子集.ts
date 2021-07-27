/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 */


export function combine(n: number, k: number): number[][] {

  const result: number[][] = []
  const path: number[] =[]
  const backTracking = (j: number) => {
    if(path.length === k) {
      result.push([...path])
      return
    }

    for(let i = j; i<n + 1; i++) {
      path.push(i)
      backTracking(i+1)
      path.pop()
    }
  }

  backTracking(1)

  return result
};
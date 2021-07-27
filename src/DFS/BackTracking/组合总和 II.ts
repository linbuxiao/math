/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 *
 * 解集不能包含重复的组合。
 */

export function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = []
  const path: number[] = []

  candidates.sort((a,b)=> a-b)

  const dfs = (k: number, sum: number, used: boolean[]) => {
    if(sum > target) return
    if(sum === target) {
      result.push(path.slice())
      return
    }

    for(let i = k; i<candidates.length; i++) {
      if(!used[i - 1] && candidates[i] === candidates[i-1]) continue
      if(sum + candidates[i] <= target) {
        used[i] = true
        path.push(candidates[i])
        sum += candidates[i]
        dfs(i+1, sum, used)
        used[i] = false
        path.pop()
        sum -= candidates[i]
      }
    }
  }

  dfs(0, 0, new Array(candidates.length).fill(false))
  return result
};
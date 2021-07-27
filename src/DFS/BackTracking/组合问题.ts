/**
 * 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。
 * candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 
 * 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。
 */


export function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a,b)=> a-b)

  const result: number[][] = []
  const path: number[] = []
  let sum: number = 0
  
  const backTracking = (k: number) => {
    if(sum > target) {
      return
    }
    
    if(sum === target) {
      result.push([...path])
      return
    }

    for(let i = k; i<candidates.length; i++) {
      if(sum + candidates[i] <= target) {
        sum += candidates[i]
        path.push(candidates[i])
        backTracking(i)
        sum -= candidates[i]
        path.pop()
      }

    }
  }

  backTracking(0)

  return result
};
/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 */


// 这道题升级的点在于数字可重复了，所以需要依赖下标
export function permuteUnique(nums: number[]): number[][] {
  nums.sort((a,b) => a-b) // 变为有序数组

  const result: number[][] = []
  const path: number[] = []

  const backTracking = (used: boolean[]) => {
    if(path.length === nums.length) {
      result.push(path.slice())
      return
    }

    for(let i = 0; i<nums.length; i++) {
      if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) {
        console.log(i);
        
        continue
      }

      if(!used[i]) {
        used[i] = true
        path.push(nums[i])
        backTracking(used)
        path.pop()
        used[i] = false
      }
    }
  }
  
  backTracking([])

  return result
};
/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */

export function permute(nums: number[]): number[][] {
  // 暴力法
  const result: number[][] = []

  const backTracking = (chessNums: number[]) => {
    if(chessNums.length === nums.length) {      
      result.push([...chessNums]) 
      return
    } 
    for(let i = 0; i<nums.length; i++) {
      if(chessNums.indexOf(nums[i]) === -1) {
        chessNums.push(nums[i])
        backTracking(chessNums)
        chessNums.pop()   
      }

    }


  }

  const chessNums: number[] = []

  backTracking(chessNums)
  
  return result
};
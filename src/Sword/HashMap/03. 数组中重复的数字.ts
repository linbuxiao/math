/**
 * 数组中重复的数字
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 * 输入：
 * [2, 3, 1, 0, 2, 5, 3]
 * 输出：2 或 3
 */

// 排序后暴力迭代
function findRepeatNumber_1(nums: number[]): number {
  nums.sort((a,b)=> a-b)
  let result: number
  for(let i = 1; i<nums.length; i++) {
    if(nums[i] === nums[i-1]) {
      result = nums[i]
      break
    }
  }
  return result!
};

// set法 但其实set并不快
function findRepeatNumber(nums: number[]): number {
  const set = new Set<number>()
  let result : number
  for (let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])) {
      result = nums[i]
      break
    } else {
      set.add(nums[i])
    }
  }

  return result!
};


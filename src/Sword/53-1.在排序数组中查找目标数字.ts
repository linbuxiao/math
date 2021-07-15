/**
 * 统计一个数字在排序数组中出现的次数。
 * nums = [5,7,7,8,8,10], target = 8
 * 2
 */

// 二分查找

export function search(nums: number[], target: number): number {

  function findTartget(nums: number[], start: number, end: number) {
    let middle: number
    if(start > end) {
      return
    } else if(start === end) {
      if(nums[start] === target) {
        middle = start
      } else {
        return
      }
    } else {
      middle = Math.ceil((end - start) / 2 + start)
    }
    
    if(nums[middle] === target) {
      times++
      let l = middle - 1
      let r = middle + 1
      while(nums[l] === target) {
        l--
        times++
      }
      while(nums[r] === target) {
        r++
        times++
      }
      return
    } else if(nums[middle] > target) {
      findTartget(nums, start, middle - 1)
    } else {
      findTartget(nums, middle + 1, end)
    }
  }

  let times = 0
  findTartget(nums, 0, nums.length - 1)
  return times
};
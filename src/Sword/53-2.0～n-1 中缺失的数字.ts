/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * 输入: [0,1,3]
 * 输出: 2
 */

export function missingNumber(nums: number[]): number {
  if(nums === [0]) return 1
  function getTarget(nums: number[], start: number, end: number): number|undefined {
    let middle = Math.floor((end - start) / 2 + start)
    
    if(nums[middle - 1] !== nums[middle] - 1) {
      return nums[middle] - 1
    }
    if(nums[middle + 1] !== nums[middle] + 1) {
      return nums[middle] + 1
    }
    if(nums[middle] === middle) {
      return getTarget(nums, middle + 1, end)
    } else if(nums[middle] > middle) {
      return getTarget(nums, start, middle - 1)
    } else {
      
    }
  }

  return getTarget(nums, 0, nums.length - 1)!
};
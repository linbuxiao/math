/**
 * 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * 输入: [0,1,3]
 * 输出: 2
 */

// 二分法必须处理好边界问题

export function missingNumber(nums: number[]): number {
  if(nums[nums.length - 1] === nums.length - 1) return nums.length


  function getTarget(nums: number[], start: number, end: number): number|undefined {
    if(start >= end) return
    let middle = Math.ceil((end - start) / 2 + start)
    
    if(nums[middle - 1] !== nums[middle] - 1) {
      // console.log(nums[middle] - 1, nums[middle-1]);
      
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
      // do nothing
    }
  }

  return getTarget(nums, 0, nums.length - 1)!
};

export function missingNumber_2(nums: number[]): number {
  let [left, right, mid]: number[] = [0, nums.length]
  while(left < right) {
    mid = Math.floor((left+right) /2)
    nums[mid] === mid ? left = mid + 1: right = mid - 1
  }
  return left
};

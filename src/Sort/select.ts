/**
 * 选择排序
 */

import { swap } from "../Utils"

// 1. 双重循环遍历数组，每经过一轮比较，找到最小元素的下标，将其交换至首位。
export function select_1(nums: number[]) {
  let minIndex: number
  for(let x = 0; x < nums.length -1; x++) {
    minIndex = x
    for(let y = x + 1; y < nums.length; y++) {
      if(nums[minIndex] > nums[y]) {
        minIndex = y
      }
    }

    swap(nums, x, minIndex)
  }

  return nums
}

// 2. 二元选择排序
export function select_2(nums: number[]) {
  let minIndex: number
  let maxIndex: number
  for(let x = 0; x < nums.length / 2; x++) {
    minIndex = x
    maxIndex = x
    for(let y = x + 1; y < nums.length - x; y++) {
      if(nums[minIndex] > nums[y]){
        minIndex = y
      }

      if(nums[maxIndex] < nums[y]) {
        maxIndex = y
      }
    }

    if(minIndex === maxIndex) break
    swap(nums, x, minIndex)
    if(maxIndex === x){
      maxIndex = minIndex
    }
    let lastIndex = nums.length - 1 - x
    swap(nums, lastIndex, maxIndex)
  }

  return nums
}

/**
 * 练习
 */

// 1. 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

export function findKthLargest(nums: number[], k: number) : number{
  let maxIndex: number
  for(let x = 0; x < nums.length - 1; x++) {
    maxIndex = x
    for(let y = x+1; y < nums.length; y++) {
      if(nums[maxIndex] < nums[y]) {
        maxIndex = y
      }
    }

    swap(nums, x, maxIndex)
  }

  return nums[k]
};

// 2. 给你一个整数数组 nums，请你将该数组升序排列。
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]

export function sortArray(nums: number[]): number[] {
  let minIndex: number
  for(let x = 0; x < nums.length - 1; x++) {
    minIndex = x
    for(let y = x + 1; y < nums.length; y++) {
      if(nums[minIndex] > nums[y]) {
        minIndex = y
      }
    }

    swap(nums, minIndex, x)
  }

  return nums
};

/**
 * 手写
 */

export function select_3(nums: number[]) {
  let minIndex: number
  for(let x = 0; x < nums.length - 1; x++) {
    minIndex = x
    for(let y = x + 1; y < nums.length; y++) {
      
      if(nums[minIndex] > nums[y]) {
        minIndex = y
      }
    }

    [nums[x], nums[minIndex]] = [nums[minIndex], nums[x]]
  }

  return nums
}
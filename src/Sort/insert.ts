/**
 * 插入排序
 */

import { swap, ListNode, ListTurnToArr, ArrTurnToList } from "../Utils"

// 1. 交换法：在新数字插入过程中，不断与前面的数字交换，直到找到自己合适的位置。
export function insert_1(nums: number[]) {
  for(let x = 1;x < nums.length; x++) {
    let y = x

    while(y >= 1 && nums[y] < nums[y-1]) {
      swap(nums, y, y-1)
      y--
    }
  }
  return nums
}

// 2. 移动法：在新数字插入过程中，与前面的数字不断比较，前面的数字不断向后挪出位置，当新数字找到自己的位置后，插入一次即可。
export function insert_2(nums: number[]) {
  for(let x = 1; x<nums.length; x++) {
    let currentNumber = nums[x]
    let y = x - 1
    while(y >= 0 && currentNumber < nums[y]) {
      nums[y+1] = nums[y]
      y--
    }
    nums[y+1] = currentNumber
  }
}

// 3. 双for版本
export function insert_3(nums: number[]) {
  for(let x = 0; x < nums.length; x++) {
    for(let y = x; y > 0 && nums[y] < nums[y-1]; y--) {
      swap(nums, y, y-1)
    }
  }
}

/**
 * 练习
 */

// 1. 给你一个整数数组 nums，请你将该数组升序排列。
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

export function sortArray(nums: number[]) :number[] {
  for(let x = 1; x< nums.length; x++) {
    let y = x
    while(y >= 1 && nums[y] < nums[y-1]) {
      swap(nums, y, y-1)
      y--
    }
  }

  return nums
}

// 2. 对链表进行插入排序
export function insertionSortList(head: ListNode | null) {
  let nums = ListTurnToArr(head)
  for(let x = 0; x < nums.length; x++) {
    let y = x
    while(y >= 0 && nums[y] < nums[y-1]) {
      swap(nums, y, y-1)
      y--
    }
  }
  return ArrTurnToList(nums)
};
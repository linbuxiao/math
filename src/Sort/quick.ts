/**
 * 快速排序
 */

// 1. 将数组分区，并获得中间值的下标
export function partition(arr: number[], start?: number, end?: number) {
  if(!start) start = 0
  if(!end) end = arr.length - 1

  let middle = quickSort(arr, start, end)
  if(!middle && middle !== 0) return
  partition(arr, start, middle - 1)
  partition(arr, middle + 1, end)

  return arr
}

function quickSort(arr: number[], start: number, end: number) {
  if(start >= end) return null
  // 取第一个数为基数
  let priot = arr[start]
  // 从第二个数开始分区
  let left = start + 1
  // 右边界
  let right = end
  while(left < right) {
    while(left < right && arr[left] <= priot) {
      left++
    }
    while(left < right && arr[right] >= priot) {
      right--
    }
    if(left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  if(left === right && arr[right] > priot) {
    right--
  }
  [arr[start], arr[right]] = [arr[right], arr[start]]
  return right
}

/**
 * 练习
 */

// 1. 给你一个整数数组 nums，请你将该数组升序排列。
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

export function getMiddle(arr: number[], start: number, end: number) {
  if(start >= end) return null

  let p = start
  let left = start + 1
  let right = end

  while(left < right) {
    while(left < right && arr[left] <= arr[p]) left++
    while(left < right && arr[right] >= arr[p]) right--
    if(left<right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  if(left === right && arr[right] > arr[p] ) right--
  [arr[start], arr[right]] = [arr[right], arr[start]]
  
  return right
}

export function sortArray(arr: number[], start?: number, end?: number) {
  if(arr.length === 1) return arr
  if(!start && start!==0) start = 0
  if(!end && end!==0) end = arr.length - 1
  let middle = getMiddle(arr, start, end)
  if(!middle && middle !== 0) return null
  sortArray(arr, start, middle - 1)
  sortArray(arr, middle + 1, end)
  return arr
}
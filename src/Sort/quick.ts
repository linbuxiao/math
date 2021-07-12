/**
 * 快速排序
 */

// 1. 将数组分区，并获得中间值的下标
export function partition(arr: number[], start: number, end: number) {
  // 取第一个数为基数
  let priot = arr[start]
  // 从第二个数开始分区
  let left = start + 1
  // 右边界
  let right = end

  while(left < right) {
    while(left < right && arr[left] < priot) {
      left++ 
    }

    if(left !== right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      right--
    }
  }

  if(left === right && arr[right] > priot) {
    right--
  }

  if(right !== start) {
    [arr[start], arr[right]] = [arr[right], arr[start]]
  }
  
  return right
}
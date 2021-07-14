/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
 */

// 其实这道题就是求最小值。。

// 因为数组是递增的，所以遇到后一个数比前一个数小，那一定就是他了。

// 不需要考虑数组为空的情况。不存在这种情况。

export function minArray(numbers: number[]): number {
  for(let x = 0; x<numbers.length; x++) {
    if(numbers[x] < numbers[x-1]) {
      return numbers[x]
    } 
  }
  
  return numbers[0]
};
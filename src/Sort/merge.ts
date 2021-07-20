/**
 * 归并排序
 */

export function merge_1(nums_1: number[], nums_2: number[]) {
  
  let p1 = 0 // 数组 一 指针
  let p2 = 0 // 数组 二 指针
  let arr: number[] = [] // 新数组
  while(arr.length < nums_1.length + nums_2.length) {
    // a. 遍历 num2 中比 p1 小的 ， 如果有则按顺序排入数组，然后排入p1
    // 没有的话则直接排入p1 p1++
    let y = p2
    for(let x = y; x < nums_2.length && nums_2[x] <= nums_1[p1]; x++) {
      arr.push(nums_2[x])
      p2 = x
    }
    arr.push(nums_1[p1])
    
    // b. 此时p1的指针 + 1，p2的指针停在最小的那个索引
    p1++

    // c. 如果p2有变化了，还需要再往前走一步。
    if(p2!==y) p2++
  }

  return arr
}

/**
 * 练习
 */
// 1. 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
// 输入:
// A = [1,2,3,0,0,0], m = 3
// B = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]


/**
 Do not return anything, modify A in-place instead.
 */
export function merge(A: number[], m: number, B: number[], n: number): void {
  let pa = m-1
  let pb = n-1
  let tail = m+n-1
  let cur
  while (pa>=0||pb>=0) {
    if(pa=== -1) {
      cur = B[pb--]
    } else if(pb === -1) {
      cur = A[pa--]
    } else if(A[pa]>B[pb]) {
      cur = A[pa--]
    } else {
      cur = B[pb--]
    }
    A[tail--] = cur
  }
};

// 2. 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
// 输入: [7,5,6,4]
// 输出: 5

export function reversePairs(nums: number[]): number {
  function findInversePairNum(nums: number[], start :number, end: number) {
    if(start >= end) return 0

    const copy = new Array(end - start + 1)
    const length = Math.floor((end - start) / 2)
    const leftNumber: number = findInversePairNum(nums, start, start+length)
    const rightNumber: number = findInversePairNum(nums, start+length+1, end)

    let i = start + length
    let j = end
    let copyIndex = end - start
    let num = 0
    while (i >= start && j >= start + length + 1) {
      if (nums[i] > nums[j]) {
          num += j - start - length;
          copy[copyIndex--] = nums[i--];
      } else {
          copy[copyIndex--] = nums[j--];
      }
    }

    while (i >= start) {
        copy[copyIndex--] = nums[i--];
    }

    while (j >= start + length + 1) {
        copy[copyIndex--] = nums[j--];
    }

    for (let k = start; k <= end; ++k) {
      nums[k] = copy[k - start];
    }

    return num + leftNumber + rightNumber;
  }

  return findInversePairNum(nums, 0, nums.length - 1);
};
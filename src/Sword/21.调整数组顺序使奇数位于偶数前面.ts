/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4] 
 * 注：[3,1,2,4] 也是正确的答案之一。
 */

export function exchange(nums: number[]): number[] {
  let b = []
  for(let a = 0; a<nums.length; a++) {
    if(nums[a] % 2) {
      b.unshift(nums[a])
    } else {
      b.push(nums[a])
    }
  }

  return b
};

// 双指针解法，避免不必要的移动, 移动至左为偶数，右为奇数，然后交换
export function exchange_1(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const leftVal = nums[left]
    const RightVal = nums[right]
    if(leftVal % 2 !== 0) {
      left++
    } else if(RightVal % 2 === 0) {
      right--
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]]
    }
  }
  return nums
};
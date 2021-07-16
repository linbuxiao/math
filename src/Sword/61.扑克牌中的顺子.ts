/**
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
 * 输入: [1,2,3,4,5]
 * 输出: True
 */

export function isStraight(nums: number[]): boolean {
  nums = nums.sort((a,b)=> a-b).filter(item => item !== 0)
  if(nums[nums.length - 1] - nums[0] > 4) return false

  for(let a = 0; a<nums.length - 1; a++) {
    if(nums[a] === nums[a+1]) return false
  }

  return true
};
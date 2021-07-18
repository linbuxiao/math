/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * 输入：[1,2,3,1]
 * 输出：true
 */

export function containsDuplicate(nums: number[]): boolean {
  let items: { [key in number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i] in items;
    if (val) {
      return true;
    } else {
      items[nums[i]] = nums[i];
    }
  }
  return false;
}

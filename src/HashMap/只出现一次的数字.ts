/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 输入: [4,1,2,1,2]
 * 输出: 4
 */

export function singleNumber(nums: number[]): number {
  let items: { [key in number]: boolean } = Object.create(null);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in items) {
      items[nums[i]] = true;
    } else {
      items[nums[i]] = false;
    }
  }

  for (let key in items) {
    if (!items[key]) {
      return +key;
    }
  }

  return -1;
}

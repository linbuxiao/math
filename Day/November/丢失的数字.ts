// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
export function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) return i;
  }

  return 0;
}

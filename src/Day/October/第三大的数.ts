// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

export function thirdMax(nums: number[]): number {
  const set = new Set<number>();

  while (set.size < 3 && nums.length) {
    const obj = {
      i: 0,
      e: nums[0],
    };
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > obj.e) {
        obj.i = i;
        obj.e = nums[i];
      }
    }
    set.add(obj.e);
    nums.splice(obj.i, 1);
  }

  return Math.max(...Array.from(set));
}

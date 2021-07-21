/**
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
 *
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 */

export function containsNearbyDuplicate_1(nums: number[], k: number): boolean {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (map.has(val)) {
      if (i - map.get(val) >= k) {
        return true;
      } else {
        map.set(val, i);
      }
    } else {
      map.set(val, i);
    }
  }
  return false;
}

// 奇思妙想
// 这个方法最妙
// 利用has方法判断是否重复
// 利用size删除掉多余的窗口外的数据
// i-k即为刚经过的下标
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (set.has(current)) return true;
    set.add(current);

    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
}

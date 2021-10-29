/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 */

export function intersection(nums1: number[], nums2: number[]): number[] {
  let oneSet = new Set<number>(nums1);
  let twoSet = new Set<number>();

  for (let b = 0; b < nums2.length; b++) {
    let val = nums2[b];
    if (oneSet.has(val)) {
      twoSet.add(val);
    }
  }

  return Array.from(twoSet);
}

// 也可以简单化一点
export function intersection_1(nums1: number[], nums2: number[]): number[] {
  let nums: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) && nums.indexOf(nums1[i])) {
      nums.push(nums1[i]);
    }
  }

  return nums;
}

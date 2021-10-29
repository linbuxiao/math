/**
 * 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

 * 请你找出符合题意的 最短 子数组，并输出它的长度。
 */

export function findUnsortedSubarray(nums: number[]): number {
  const copy = [...nums].sort((a, b) => a - b);
  // 挨个对照，直到找到不符合的部分
  const INF = Number.MIN_SAFE_INTEGER;

  let start = INF;
  let end = INF;

  for (let i = 0; i < nums.length; i++) {
    if (copy[i] !== nums[i]) {
      start = i;
      break;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (copy[i] !== nums[i]) {
      end = i;
      break;
    }
  }

  if (start !== INF && end !== INF) {
    return end - start + 1;
  }

  if (start === INF || end === INF) {
    return 0;
  }

  return nums.length;
}

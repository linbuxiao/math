/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * [3,3,5,5,6,7]
 */

export function maxSlidingWindow(nums: number[], k: number): number[] {
  if (!nums.length) return [];
  let start = 0;
  let end = k;
  let s = [];
  while (end <= nums.length) {
    s.push(Math.max(...nums.slice(start, end)));
    start++;
    end++;
  }
  return s;
}

// 不要关注窗口的概念，窗口只是比较数据的范围
// 关注大小，顺便关注一下左边界的位置，超出就拿掉。
export function maxSlidingWindow_1(nums: number[], k: number): number[] {
  let result: number[] = [];
  let window: number[] = [];
  const getPop = (v: number[]) => v[v.length - 1];
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 当window有长度，并且
    // 以window最后一项为下标的nums 小于当前的nums[i]
    while (window.length && nums[i] > nums[getPop(window)]) {
      // 删除掉window的最后一项
      // 所以剩下的一定大于等于nums[i]
      window.pop();
    }

    // 把当前下标推入
    window.push(i);

    // 如果window第一项小于窗口最后一项
    if (window[0] < i - k + 1) {
      window.shift();
    }

    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }

  return result;
}

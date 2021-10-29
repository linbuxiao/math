// 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

// 输入: [2,2,3,4]
// 输出: 3
// 解释:
// 有效的组合是:
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3

export function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b); // 排序

  // 三角形三边，两边之和 > 斜边
  // 找到两个边，然后把剩下的 < 两边和的找到，组合
  // 双指针

  let num = 0;
  for (let a = 0; a < nums.length - 2; a++) {
    for (let b = a + 1; b < nums.length - 1; b++) {
      let sum = nums[a] + nums[b];
      for (let c = b + 1; c < nums.length; c++) {
        if (nums[c] < sum) num++;
        if (nums[c] >= sum) break;
      }
    }
  }

  return num;
}

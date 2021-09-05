// 给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 ：

// nums[a] + nums[b] + nums[c] == nums[d] ，且
// a < b < c < d

export function countQuadruplets(nums: number[]): number {
  // 遍历出所有数组
  let num = 0;
  for (let a = 0; a < nums.length - 3; a++) {
    for (let b = a + 1; b < nums.length - 2; b++) {
      for (let c = b + 1; c < nums.length - 1; c++) {
        for (let d = c + 1; d < nums.length; d++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) num++;
        }
      }
    }
  }
  return num;
}

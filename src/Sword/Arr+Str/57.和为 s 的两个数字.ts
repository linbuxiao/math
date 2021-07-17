/**
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[2,7] 或者 [7,2]
 */

export function twoSum(nums: number[], target: number) {
  let [left, right, middle]: number[] = [0, nums.length - 1];
  while (left < right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  // for(let x = 0; x<=left; x++) {
  //   for(let y = x + 1; y<=left; y++) {
  //     if(nums[x] + nums[y] === target) {
  //       return [nums[x], nums[y]]
  //     }
  //   }
  // }
  let [x, y] = [0, left];
  while (nums[x] + nums[y] !== target) {
    if (nums[x] + nums[y] > target) {
      y--;
    } else {
      x++;
    }
  }

  return [nums[x], nums[y]];
}

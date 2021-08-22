// 给你一个 m x n 的矩阵 matrix 和一个整数 k ，找出并返回矩阵内部矩形区域的不超过 k 的最大数值和。

// 题目数据保证总会存在一个数值和不超过 k 的矩形区域。

// 示例 1：
// 输入：matrix = [[1,0,1],[0,-2,3]], k = 2
// 输出：2
// 解释：蓝色边框圈出来的矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。

// 示例 2：
// 输入：matrix = [[2,2,-1]], k = 3
// 输出：3

export function maxSumSubmatrix(matrix: number[][], k: number): number {
  const set = new Set<number>();

  const dp = (nums: number[]) => {
    for (let i = 1; i < nums.length; i++) {
      let sum = nums[i];
      for (let j = i - 1; j >= 0; j--) {
        sum += nums[j];
        // const sum = nums.slice(j, i + 1).reduce((a,b)=> a+ b)
        if (sum <= k) set.add(sum);
      }
    }
  };

  const countArr = (nums: number[][]): number[] => {
    let result = new Array(nums[0].length).fill(0);
    for (let row = 0; row < nums.length; row++) {
      for (let col = 0; col < nums[0].length; col++) {
        set.add(matrix[row][col]);
        result[col] += nums[row][col];
      }
    }

    return result;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= i; j++) {
      dp(countArr(matrix.slice(j, i + 1)));
    }
  }

  const arr = Array.from(set);
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) return arr[i];
  }

  return 0;
}

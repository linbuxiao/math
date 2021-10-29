// 给定一个正整数、负整数和 0 组成的 N × M 矩阵，编写代码找出元素总和最大的子矩阵。

// 返回一个数组 [r1, c1, r2, c2]，其中 r1, c1 分别代表子矩阵左上角的行号和列号，r2, c2 分别代表右下角的行号和列号。若有多个满足条件的子矩阵，返回任意一个均可。

// 注意：本题相对书上原题稍作改动

// 示例：

// 输入：
// [
//    [-1,0],
//    [0,-1]
// ]
// 输出：[0,1,0,1]
// 解释：输入中标粗的元素即为输出所表示的矩阵

export function getMaxMatrix(matrix: number[][]) {
  /**
   * 计算平面数组的最大连续和，并返回该和的起止坐标
   * @param nums
   * @returns
   */
  const dp = (
    nums: number[],
  ): {
    val: number;
    index: number[];
  } => {
    const len = nums.length;
    const dp = [...nums];
    const length = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
      if (dp[i - 1] + dp[i] > dp[i]) {
        dp[i] = dp[i - 1] + dp[i];
        length[i] += length[i - 1];
      }
    }

    const max = Math.max(...dp);
    let k: number;
    for (let i = 0; i < len; i++) {
      if (dp[i] === max) {
        k = i;
        break;
      }
    }

    return {
      val: dp[k!],
      index: [k! - length[k!] + 1, k!],
    };
  };

  /**
   * 将二维数组压平，转化为一维数组
   * @param matrix
   * @returns
   */
  const countArr = (matrix: number[][]): number[] => {
    if (matrix.length === 1) return matrix[0];
    let arr = new Array(matrix[0].length).fill(0);

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        arr[col] += matrix[row][col];
      }
    }

    return arr;
  };

  const len = matrix.length;
  const map = new Map<number, number[]>();
  const set = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      // 二维转一维
      const tmp = dp(countArr(matrix.slice(j, i + 1)));
      map.set(tmp.val, [j, tmp.index[0], i, tmp.index[1]]);
      set.push(tmp.val);
    }
  }

  const max = Math.max(...set);
  let result: number[];
  map.forEach((item, key) => {
    if (key === max) result = item;
  });
  return result!;
}

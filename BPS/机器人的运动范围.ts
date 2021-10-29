// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

// 输入：m = 2, n = 3, k = 1
// 输出：3

// 输入：m = 3, n = 1, k = 0
// 输出：1

export function movingCount(m: number, n: number, k: number): number {
  const direct_x = [0, 0, 1, -1];
  const direct_y = [1, -1, 0, 0];

  const splitSum = (num: number) => {
    let res = 0;
    while (num) {
      res += num % 10;
      num = Math.floor(num / 10);
    }
    return res;
  };

  const valid = (row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row > m - 1 || col > n - 1) return false;
    return true;
  };

  const used = Array.from({ length: m }, () => new Array(n).fill(false));
  const queue = [[0, 0]];
  while (queue.length) {
    const [i, j] = queue.shift()!;
    if (!valid(i, j) || used[i][j] || splitSum(i) + splitSum(j) > k) continue;
    used[i][j] = true;
    for (let k in direct_x) {
      queue.push([i + direct_x[k], j + direct_y[k]]);
    }
  }
  let num = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (used[row][col]) num++;
    }
  }

  return num;
}

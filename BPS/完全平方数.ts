// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

// 输入：n = 12
// 输出：3
// 解释：12 = 4 + 4 + 4

export function numSquares(n: number): number {
  let queue = [n];
  let s = 0;
  const used: boolean[] = [];

  while (queue.length) {
    const tmp: number[] = [];
    for (const num of queue) {
      if (used[num]) continue;
      used[num] = true;
      if (num === 0) return s;
      for (let i = 1; i <= num; i++) {
        if (i ** 2 > num) break;
        tmp.push(num - i ** 2);
      }
    }
    s++;
    queue = [...tmp];
  }

  return s;
}

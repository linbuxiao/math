// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1

export function coinChange(coins: number[], amount: number): number {
  let queue = [amount];
  const used: boolean[] = [];
  let s = 0;
  while (queue.length) {
    const tmp = [];
    for (const k of queue) {
      if (used[k]) continue;
      used[k] = true;
      if (k === 0) return s;
      for (const coin of coins) {
        if (coin <= k) {
          tmp.push(k - coin);
        }
      }
    }
    s++;
    queue = [...tmp];
  }

  return -1;
}

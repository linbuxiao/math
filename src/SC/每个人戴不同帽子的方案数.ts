// 总共有 n 个人和 40 种不同的帽子，帽子编号从 1 到 40 。

// 给你一个整数列表的列表 hats ，其中 hats[i] 是第 i 个人所有喜欢帽子的列表。

// 请你给每个人安排一顶他喜欢的帽子，确保每个人戴的帽子跟别人都不一样，并返回方案数。

// 由于答案可能很大，请返回它对 10^9 + 7 取余后的结果。

export function numberWays(hats: number[][]): number {
  const m = hats.length;
  const n = 1 << m;
  const mod = Math.pow(10, 7) + 7;

  // for(let h = 1; h < 41; h++) {
  //   for(let s = 0; s < n; s++) {
  //     dp[h][s] = (dp[h][s] + dp[h - 1][s]) % mod
  //     for(let i = 0; i < m; i++) {
  //       if(s & (1 << i) !== 0 && )
  //     }
  //   }
  // }

  return 1;
}

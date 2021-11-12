// 我们正在玩一个猜数游戏，游戏规则如下：

// 我从 1 到 n 之间选择一个数字。
// 你来猜我选了哪个数字。
// 如果你猜到正确的数字，就会 赢得游戏 。
// 如果你猜错了，那么我会告诉你，我选的数字比你的 更大或者更小 ，并且你需要继续猜数。
// 每当你猜了数字 x 并且猜错了的时候，你需要支付金额为 x 的现金。如果你花光了钱，就会 输掉游戏 。
// 给你一个特定的数字 n ，返回能够 确保你获胜 的最小现金数，不管我选择那个数字 。

export function getMoneyAmount(n: number): number {
  // 找出最大花销
  const cache: number[][] = Array.from(
    { length: n + 1 },
    () => new Array(n + 1).fill(0),
  );
  function dfs(l: number, r: number): number {
    if (l >= r) return 0;
    let ans = Number.MAX_SAFE_INTEGER;
    if (cache[l][r] !== 0) return cache[l][r];
    for (let i = l; i <= r; i++) {
      const cur = Math.max(dfs(l, i - 1), dfs(i + 1, r)) + i;
      ans = Math.min(cur, ans);
    }
    cache[l][r] = ans;
    return ans;
  }
  return dfs(1, n);
}

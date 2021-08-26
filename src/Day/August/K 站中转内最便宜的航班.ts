// 有 n 个城市通过一些航班连接。给你一个数组 flights ，其中 flights[i] = [fromi, toi, pricei] ，表示该航班都从城市 fromi 开始，以价格 toi 抵达 pricei。

// 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到出一条最多经过 k 站中转的路线，使得从 src 到 dst 的 价格最便宜 ，并返回该价格。 如果不存在这样的路线，则输出 -1。

// DP
export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const INF = Number.MAX_SAFE_INTEGER;

  const dp = Array.from({ length: k + 2 }, () => new Array(n).fill(INF));
  dp[0][src] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (const item of flights) {
      const j = item[0]; // 出发
      const t = item[1]; // 到达
      const cost = item[2]; // 花费

      dp[i][t] = Math.min(dp[i][t], dp[i - 1][j] + cost);
    }
  }

  // 横坐标为到达站

  // [
  //   [0, INF, INF], // 起飞必然为0
  //   [INF, 100, 500], // 到达第一站时, 没有到达城市0的航班,所以为INF. 有到达其他城市的航班, 取花费最小的值
  //   [INF, INF, 200] // 当到达第二站时,我们需要取过来航班的最小值,加上飞到这个目的地的值.即为最小值
  // ]

  // 当遍历完所有站数, dst列仍然无值,则无法准时到达.

  // 这样的设计方式, 保证我们的航线图会从0辐射,逐渐找到所有的最小值.

  let ans = INF;

  for (let i = 1; i < dp.length; i++) {
    ans = Math.min(ans, dp[i][dst]);
  }

  return ans;
}

/**
 * 有 n 个网络节点，标记为 1 到 n。

 * 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

 * 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。
 */
export const networkDelayTime = function (
  times: number[][],
  n: number,
  k: number
) {
  const INF = Number.MAX_SAFE_INTEGER;
  const g = new Array(n).fill(INF).map(() => new Array(n).fill(INF));
  for (const t of times) {
    const x = t[0] - 1,
      y = t[1] - 1;
    g[x][y] = t[2];
  }

  console.log(g);

  const dist = new Array(n).fill(INF); // 每个序列分别对应到达每个节点的最小值
  dist[k - 1] = 0;

  const used = new Array(n).fill(false); // 是否计算过
  for (let i = 0; i < n; ++i) {
    let x = -1;
    console.log("in =>", dist);
    for (let y = 0; y < n; ++y) {
      if (!used[y] && (x === -1 || dist[y] < dist[x])) {
        x = y;
      }
    }
    used[x] = true; // x一定为当前dist当中最小的那一个
    console.log(x);

    for (let y = 0; y < n; ++y) {
      // x为出发节点
      // y为到达节点

      // dist[0] = Math.min(dist[0], dist[0] + g[0][0]) // x到达各个节点所需要的值
      // dist[1] = Math.min(dist[1], dist[0] + g[0][1])
      dist[y] = Math.min(dist[y], dist[x] + g[x][y]);
    }
  }

  let ans = Math.max(...dist);
  // console.log(ans);

  return ans === INF ? -1 : ans;
};

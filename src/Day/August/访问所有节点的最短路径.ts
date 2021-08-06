// 存在一个由 n 个节点组成的无向连通图，图中的节点按从 0 到 n - 1 编号。

// 给你一个数组 graph 表示这个图。其中，graph[i] 是一个列表，由所有与节点 i 直接相连的节点组成。

// 返回能够访问所有节点的最短路径的长度。你可以在任一节点开始和停止，也可以多次重访节点，并且可以重用边

// 输入：graph = [[1,2,3],[0],[0],[0]]
// 输出：4
// 解释：一种可能的路径为 [1,0,2,0,3]

export function shortestPathLength_1(graph: number[][]): number {
  // 路径是多个数字组成的数组，便于哈希，需要打成二进制

  const n = graph.length;
  const queue = [];
  const seen = new Array(n).fill(0).map(() => new Array(1 << n).fill(false));
  for (let i = 0; i < n; ++i) {
    // 1<<i 无限对前一位x2
    queue.push([i, 1 << i, 0]);
    seen[i][1 << i] = true;
  }

  let ans = 0;
  while (queue.length) {
    const [u, mask, dist]: number[] = queue.shift()!;
    if (mask === (1 << n) - 1) {
      ans = dist;
      break;
    }

    for (const v of graph[u]) {
      const maskV: number = mask | (1 << v);
      if (!seen[v][maskV]) {
        queue.push([v, maskV, dist + 1]);
        seen[v][maskV] = true;
      }
    }
  }

  return ans;
}

// 但我对位运算相当不熟悉，所以不能用官方方式储存索引

export function shortestPathLength(graph: number[][]): number {
  const n = graph.length;
  // 因为可以从任意节点开始，所以队列里要放置所有
  const queue: [number, number[], number, number][] = [];
  const used = Array.from({ length: n }, () =>
    new Array().fill(Number.MAX_SAFE_INTEGER)
  );
  for (const i in graph) {
    queue.push([+i, [+i], 0, 1]);
    used[i][i] = true;
  }

  while (queue.length) {
    const [u, mask, dist, num] = queue.shift()!;
    if (num === n) return dist;
    for (const i of graph[u]) {
      const maskV = mask.concat(i);
      const index = +maskV.join("");

      if (!used[u][index]) {
        if (maskV.indexOf(i) === -1) {
          queue.push([i, maskV, dist + 1, num + 1]);
        } else {
          queue.push([i, maskV, dist + 1, num]);
        }
        used[u][index] = true;
      }
    }
  }

  return 0;
}

// 在有向图中，以某个节点为起始节点，从该点出发，每一步沿着图中的一条有向边行走。如果到达的节点是终点（即它没有连出的有向边），则停止。

// 对于一个起始节点，如果从该节点出发，无论每一步选择沿哪条有向边行走，最后必然在有限步内到达终点，则将该起始节点称作是 安全 的。

// 返回一个由图中所有安全的起始节点组成的数组作为答案。答案数组中的元素应当按 升序 排列。

// 该有向图有 n 个节点，按 0 到 n - 1 编号，其中 n 是 graph 的节点数。图以下述形式给出：graph[i] 是编号 j 节点的一个列表，满足 (i, j) 是图的一条有向边。

// 输入：graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// 输出：[2,4,5,6]

export function eventualSafeNodes(graph: number[][]): number[] {
  // 建立索引
  const map = new Map<number, Set<number>>();

  graph.forEach((row, index) => {
    map.set(index, new Set(row));
  });

  let queue: number[] = [];
  const res: number[] = [];
  map.forEach((set, k) => {
    if (!set.size) {
      queue.push(k);
      res.push(k);
      map.delete(k);
    }
  });

  while (queue.length) {
    let tmp: number[] = [];
    map.forEach((set) => {
      for (let key of queue) {
        if (set.has(key)) set.delete(key);
      }
    });

    map.forEach((set, k) => {
      if (!set.size) {
        tmp.push(k);
        res.push(k);
        map.delete(k);
      }
    });

    if (!tmp.length) break;

    queue = [...tmp];
  }

  return res.sort((a, b) => a - b);
}

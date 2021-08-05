// 在有向图中，以某个节点为起始节点，从该点出发，每一步沿着图中的一条有向边行走。如果到达的节点是终点（即它没有连出的有向边），则停止。

// 对于一个起始节点，如果从该节点出发，无论每一步选择沿哪条有向边行走，最后必然在有限步内到达终点，则将该起始节点称作是 安全 的。

// 返回一个由图中所有安全的起始节点组成的数组作为答案。答案数组中的元素应当按 升序 排列。

// 该有向图有 n 个节点，按 0 到 n - 1 编号，其中 n 是 graph 的节点数。图以下述形式给出：graph[i] 是编号 j 节点的一个列表，满足 (i, j) 是图的一条有向边。

// 输入：graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// 输出：[2,4,5,6]
// 解释：示意图如上。

export function eventualSafeNodes(graph: number[][]): number[] {
  const repeat = new Set<number>();
  const notRepeat = new Set<number>();

  const isCircle = (k: number, path: Set<number>) => {
    if (path.has(k) || repeat.has(k)) {
      repeat.add(k);
      return true;
    }
    if (notRepeat.has(k)) return false;
    path.add(k);

    // 传入一个数字，遍历它的去向, 如果回到自己，则返回true
    for (let i = 0; i < graph[k].length; i++) {
      if (isCircle(graph[k][i], new Set(path))) return true;
    }
    notRepeat.add(k);
    return false;
  };

  const res = [];
  for (let k = 0; k < graph.length; k++) {
    if (!isCircle(k, new Set<number>())) {
      res.push(k);
    }
  }
  return res;
}

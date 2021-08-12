// 给你这棵「无向树」，请你测算并返回它的「直径」：这棵树上最长简单路径的 边数。

// 我们用一个由所有「边」组成的数组 edges 来表示一棵无向树，其中 edges[i] = [u, v] 表示节点 u 和 v 之间的双向边。

// 树上的节点都已经用 {0, 1, ..., edges.length} 中的数做了标记，每个节点上的标记都是独一无二的。

// 输入：edges = [[0,1],[0,2]]
// 输出：2
// 解释：
// 这棵树上最长的路径是 1 - 0 - 2，边数为 2。

// 输入：edges = [[0,1],[1,2],[2,3],[1,4],[4,5]]
// 输出：4
// 解释：
// 这棵树上最长的路径是 3 - 2 - 1 - 4 - 5，边数为 4。

// DFS解法，超时警告
export function treeDiameter_1(edges: number[][]): number {
  const map = new Map<number, Set<number>>();
  let num = Number.MIN_SAFE_INTEGER;
  for (let [X, Y] of edges) {
    !map.has(X) && map.set(X, new Set());
    !map.has(Y) && map.set(Y, new Set());

    map.set(X, map.get(X)!.add(Y));
    map.set(Y, map.get(Y)!.add(X));
  }

  const dfs = (s: number, set: Set<number>, value: number) => {
    const k = map.get(s)!;
    let flag = false;
    k.forEach((item) => {
      if (!set.has(item)) {
        flag = true;
        const nextSet = new Set(set);
        nextSet.add(item);
        dfs(item, nextSet, value + 1);
      }
    });

    if (flag) {
      num = Math.max(num, value);
      return;
    }
  };

  map.forEach((_, key) => {
    dfs(key, new Set(), 0);
  });

  return num;
}

export function treeDiameter(edges: number[][]): number {
  const map = new Map<number, Set<number>>();
  let num = 0;
  for (let [X, Y] of edges) {
    !map.has(X) && map.set(X, new Set());
    !map.has(Y) && map.set(Y, new Set());

    map.set(X, map.get(X)!.add(Y));
    map.set(Y, map.get(Y)!.add(X));
  }

  let queue: number[] = [];

  map.forEach((item, key) => {
    if (item.size === 1) queue.push(key);
  });

  while (queue.length) {
    num++;
    let tmp: number[] = [];
    for (let k of queue) {
      map.delete(k);
    }

    map.forEach((set) => {
      for (let k of queue) {
        if (set.has(k)) set.delete(k);
      }
    });

    if (map.size === 1 || map.size === 2) break;

    map.forEach((set, k) => {
      if (set.size === 1) tmp.push(k);
    });

    queue = [...tmp];
  }

  if (map.size === 1) {
    return num * 2;
  } else {
    return num * 2 + 1;
  }
}

// [[0,1], [1,2], [2,3], [1,4], [4,5]]
// [[0,1],[0,2]]
// [[0,1],[1,2],[2,3],[1,4],[4,5]]

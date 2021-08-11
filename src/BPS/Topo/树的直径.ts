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

export function treeDiameter(edges: number[][]): number {
  const map = new Map<number, Set<number>>();
  let num = 1;
  for (let [X, Y] of edges) {
    !map.has(X) && map.set(X, new Set());
    !map.has(Y) && map.set(Y, new Set());

    map.set(X, map.get(X)!.add(Y));
    map.set(Y, map.get(Y)!.add(X));
  }

  while (map.size > 1) {
    let wait: number[] = [];
    map.forEach((set, key) => {
      if (set.size === 1) {
        wait.push(key);
      }
    });

    wait.forEach((item) => {
      map.delete(item);

      map.forEach((set) => {
        if (set.has(item)) {
          set.delete(item);
        }
      });
    });

    num++;
  }

  return num;
}
